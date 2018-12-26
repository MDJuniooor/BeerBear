import React from "react";
import {
    AsyncStorage,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    TextInput,
    Dimensions,
    Alert,
    Image,
} from "react-native";
const { width, height } = Dimensions.get("window");
import UserInfo from '../../assets/UserInfo';
import { connect } from "react-redux";
import { actionCreators as AuthActions } from "../../redux/modules/auth";

class SignInScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }
    
    componentWillReceiveProps = nextProps => {
        if (nextProps.isLoggedIn) this.props.navigation.navigate("Main");
    }
    render() {

        return (
            <View style={styles.container}>
                <Image src="http://cscp2.sogang.ac.kr/CSW4010/CSW4010/UserData/BearBear.png" height="3" width="3"> </Image>
                <Text style={{ fontSize: 14 }}>Welcome to Beer Bear :)</Text>
                <View style={styles.textInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="아이디를 입력하세요"
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        value={this.state.username}
                        underlineColorAndroid={"transparent"}
                        onChangeText={text => this.setState({ username: text })}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="비밀번호를 입력하세요"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        value={this.state.password}
                        underlineColorAndroid={"transparent"}
                        onChangeText={text => this.setState({ password: text })}
                    />
                </View>

                <Button title="로그인" onPress={this.handleLogin} />
                
            </View>
        );
    }
    handleLogin= async()=> {
        const {username, password} = this.state;
        await this.props.onLogin(username, password); 
    } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  textInputContainer: {
    paddingTop: 15,
    width: width / 2,
    marginBottom: 10
  },
  textInput: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
});


const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) => { dispatch(AuthActions.login(username, password)); },
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);
