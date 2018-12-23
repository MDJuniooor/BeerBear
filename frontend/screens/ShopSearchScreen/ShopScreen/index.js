import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Content, ListItem, List, CardItem, Card } from "native-base";
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import Button from 'react-native-button';
import ShopInfo from '../assets/ShopInfo';

/*
import API_URL from "./assets/api";
import React from 'react';
import {AsyncStorage, Text, View} from 'react-native'


export default class ShopScreen extends React.Component{
  state = {
    shop: null,
  }

  componentDidMount() {
    this._getshop();
  }
  _getshop = async () => {
    try {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImN1c3RvbWVyMSIsImV4cCI6MTU0NDc5MzY0MywiZW1haWwiOiIifQ.ySkWtUXxpUkZtMxy1NrOVhtZz-t9i093Q4SAEFRQiUE';
      console.log(token);
      fetch(`${API_URL.API_URL}/beershops/detail/${1}/`, {
        method: "GET",
        headers: {
          Authorization: `JWT ${token}`
        }
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            shop: json
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  render(){
    const shop = this.state.shop;
    return(
      <View>
       {(shop)?
       <View>
        <Text>{this.state.shop.name}</Text>
        <Text>{this.state.shop.latitude}</Text>
        <Text>{this.state.shop.longitude}</Text>
        {console.log(shop)}
       
      </View>
      : <Text>로딩중입니다.</Text>}
      </View>
    )
  }
  }
*/

class Review extends React.Component{
  render(){
    return(

      <View style={{alignItems: 'center'}}>
        <Content>
          <List>
            <ListItem style={{  justifyContent:'center',   }}>
          
              <Text>{this.props.userName}</Text>
              <Text>{this.props.content}</Text>
              <Text>{this.props.rate}</Text>
              <Text>{this.props.date}</Text>
              <Text>{this.props.rate}</Text>
              
              
            </ListItem>


      
          </List>
        </Content>
        <View>
          <Button style={{height:30, width:30}} title='리뷰 작성' >
          </Button>
          <Button style={{height:30, width:30}} title='리뷰 수정' >
          </Button>
          <Button style={{height:30, width:30}} title='리뷰 삭제' >
          </Button>
        </View>
      </View>
    );
  }

}




export default class ShopScreen extends React.Component {

  
    state={
      isLiked: false,
    } 
  

  _onPressLikeButton(){
    
    this.setState({isLiked: !this.state.isLiked})
  }

  onPressBackButton(){
    
  }

  onPressAddReviewButton(){}
  onPressDeleteReviewButton(){}
  onPressModifyReviewButton(){}
  
  render() {
    let ShopPic ={ uri : ShopInfo[0].photo };
    let ShopName = ShopInfo[0].name;
    let ShopAddress = ShopInfo[0].address;
    let ShopPhoneNum = ShopInfo[0].phone_num;
    let ShopHomepage = ShopInfo[0].homepage;
    

    let likeIcon = this.state.isLiked? 'md-heart' : 'md-heart-empty';
    
    return (
      <View style={styles.container}>
        <View style = {styles.topBar}>
          <View style = {styles.title}>
              <Button  style={{height:10, width:10  }} onPress={this.onPressBackButton} >
                <FontAwesome style={styles.title}  size={30} name="arrow-left" />
              </Button>
              <Text style={styles.title}> {ShopName} </Text>
              <Button style={{height:30, width:30  }} onPress={()=>{this._onPressLikeButton()}}>
                <Ionicons size={30} color='white' name={likeIcon}/>
              </Button>
          </View>
        </View>
       
         <Content>
        <List style={{ backgroundColor: "white",  }}>
          <ListItem style={{ justifyContent:'center', flexDirection:'column' }}>
            <Image style={{ width:120, height:120, alignItems:'center'}} source={ShopPic}/>
            <Text style={{ paddingTop:10, fontSize:21.33, paddingLeft:20}}>{ShopName}</Text>
          </ListItem>
          
          
          <ListItem style={{ flexDirection:'row', }}>
            <Entypo style={{}} color="#1FB6FF" size={30} name="shop" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopName}</Text>
        </ListItem>
          <ListItem style={{ flexDirection:'row', }}>
            <FontAwesome style={{}} color="#1FB6FF" size={30} name="map-marker" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopAddress}</Text>
          </ListItem>
          <ListItem style={{  flexDirection:'row',   }}>
            <FontAwesome  color="#1FB6FF" size={30} name="home" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopHomepage}</Text>
          </ListItem>
      
          <ListItem style={{  flexDirection:'row',   }}>
            <FontAwesome  color="#1FB6FF" size={30} name="phone" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopPhoneNum}</Text>
          </ListItem>
       
          <ListItem style={{  flexDirection:'row',   }}>
            <MaterialIcons backgroundColor="transparent" color="#1FB6FF" size={30} name="rate-review" />
            <Review userName= '홍길동' content='good' rate={5} date='12/5'>
            </Review>
            <Text>{!this.state.isLiked? 'dd': 'zz'}</Text>
          </ListItem>
      
        </List>
        
      </Content>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex:0.1,
    backgroundColor: '#1FB6FF',
    marginTop:24
  },
 
  title: {
    flexDirection: 'row',
    fontSize: 24,
    backgroundColor:"transparent",
    alignItems:'center',
    justifyContent:'space-between',
    color: 'white',
    marginTop:4,
    marginLeft:5,
    marginRight:5,
  },
})
