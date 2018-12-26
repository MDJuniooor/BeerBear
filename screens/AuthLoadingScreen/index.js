import { connect } from "react-redux";
import Container from "./container";
const mapStateToProps = (state, ownProps) => {
    const { auth } = state;
    return {
        isLoggedIn: auth.isLoggedIn,
    };
};
export default connect(mapStateToProps,null)(Container);
