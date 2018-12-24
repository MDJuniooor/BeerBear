import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthLoadingScreen from "./presenter";
import {
  AsyncStorage,
} from "react-native";
class Container extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    AsyncStorage.clear();
    this.props.navigation.navigate("Auth");    
  };

  render() {
    return <AuthLoadingScreen {...this.props} />;
  }
}

export default Container;
