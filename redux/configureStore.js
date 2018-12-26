import { combineReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
import thunk from "redux-thunk";
import auth from './modules/auth'; 

const middlewares = [thunk];

const persistConfig = {
    key: 'root',
    storage: storage,
};

const pReducer = persistCombineReducers(persistConfig, {
    auth
});

const configureStore = () => {
    let store = createStore(pReducer, applyMiddleware(...middlewares));
    let persistor = persistStore(store);
    return { store, persistor };
};

export default configureStore;