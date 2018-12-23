import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Text
} from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import API_URL from "../../../constants/Api";

class NotificationScreen extends React.Component {
  state = {
    user: null
  };
  componentDidMount() {
    this._getprofile();
  }
  _getprofile = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      fetch(`${API_URL.API_URL}/users/profile/`, {
        method: "GET",
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            user: json
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  _updatefavoritebeer = async (beer_id) => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      fetch(`${API_URL.API_URL}/beers/favorite/${beer_id}/`, {
        method: "POST",
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then(response => {
          if (response.ok == true) {
            return true;
          } else {
            return false;
          }
        })
        ;
    } catch (error) {
      console.log(error);
    }
  _submitbeercomment = async (beer_id, comment) => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      fetch(`${API_URL.API_URL}/beers/review/${beer_id}/create/`, {
        method: "POST",
        headers: {
          Authorization: `JWT ${token}`
        },
        body: JSON.stringify({
          comment
        })
      }).then(response => {
        if (response.ok == true) {
          return true;
        } else {
          return false;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  _deletebeercomment = async(beer_id, review_id) => {
    try{
      const token = await AsyncStorage.getItem("token");
      fetch(`${API_URL.API_URL}/beers/review/${beer_id}/delete/${review_id}/`, {
        method: "DELETE",
        headers: {
          Authorization: `JWT ${token}`
        }
      }).then(response => {
        if (response.ok == true) {
          return true;
        } else {
          return false;
        }
      });
    } catch(error){
      console.log(error);
    }
  }
  };
  render() {
    const user = this.state.user;
    // const {user} = this.state;

    return (
      <View style={styles.container}>
        <Button
          title="정보열람"
          onPress={() => {
            this._getprofile();
            console.log(this.state.user);
          }}
        />
        <Text>Testing</Text>
        { user ?
        <Text>{this.state.user.name}</Text>
        :
        <Text>로딩중</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default NotificationScreen;
