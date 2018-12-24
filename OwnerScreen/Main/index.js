import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Thumbnail,
  Left,
  Right,
  Title,
  Icon,
  Label,
  Form,
  Item
} from "native-base";
import API_URL from "../../../constants/Api";


class Main extends React.Component{
  state = {
    owner : "",
    check : false,
    loading : true,
  }
  componentDidMount() {
    this.getBeershopInfo();
  }
  getBeershopInfo = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      console.log(token);
      fetch(`${API_URL.API_URL}/users/ beershop/`, {
        method: "GET",
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then(response => {
          console.log(response);
          if(response.status == 200){
            return response.json();
          } else {
            this.setState({
              user: "NOT",
              loading: false
            })
            return null;
          }
        })
        .then(json => {
          if (json){
            this.setState({
              user: json,
              loading: false
            });  
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  render(){
     const {owner, loading} = this.state;
     console.log(owner,loading);

     if (loading){
       return(
         <View>
           <Text> 로딩중입니다.</Text>
         </View>
       );
     } else if (owner=="NOT"){
      return(
          <View>
            <Text>owner만 접근할 수 있습니다.</Text>
          </View>
        );
     } else {
        console.log(owner, "데이터 받아옴");
        console.log(this.state.owner);
        return(
          <View>
            <Text>{this.state.owner.name}</Text>
          </View>
        )
     }
  }
}
export default Main;