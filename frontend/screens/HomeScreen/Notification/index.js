import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
  TouchableHighlight,
  Animated, PanResponder,Platform, ViewPropTypes
} from 'react-native';
// import { Rating } from 'react-native-elements';
//import { Rating, AirbnbRating } from 'react-native-ratings';



// import {
//   Container,
//   Header,
//   Content,
//   Card,
//   CardItem,
//   Body,
//   Segment, 
//   Thumbnail,
//   Left,
//   Icon,
//   Tab, Tabs, TabHeading 
// } from "native-base";



// const BeerStamp = ({ stamp }) => {
//   return (
//     <CardItem>
//       {[...Array(stamp)].map((e, i) => {
//         return (
//           <View style={{marginRight:10}} key={i}>
//             <Icon style={{ fontSize: 30 }} color={Colors.tintColor} name="beer" />
//           </View>
//         );
//       })}
//     </CardItem>
//   );
// };

//const WATER_IMAGE = require('../../../assets/images/beer.png')


export default class Congratulation extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png"}} />
        <Text style={styles.title}>QR코드로 쿠폰을 적립하세요!</Text>
        <Text style={styles.description}>직원에게 QR코드를 제시하세요.</Text>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}>
          <Text style={styles.buttonText}>스탬프 적립 횟수</Text>
        </TouchableHighlight>
        {/* <Card style = {{flex : 0, paddingHorizontal : 50}}>
          <CardItem>
            <Text> 스탬프 현황 </Text>
          </CardItem>
          <CardItem>
            <BeerStamp stamp={3}/>
            </CardItem>
        </Card> */}
        
        
        
{/* <Rating
          type='custom'
          ratingImage={WATER_IMAGE}
          ratingColor='#3498db'
          ratingBackgroundColor='#c8c7c8'
          ratingCount={10}
          imageSize={30}
          onFinishRating={this.ratingCompleted}
          onStartRating={this.ratingStarted}
          style={{ paddingVertical: 10 }}
        /> */}
      
      <View style={styles.separator}></View>
      <View style={styles.starContainer}>
            <Image style={styles.star} source={require('../../../assets/images/beercp.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/beercp.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/beercp.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/beercp.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/beercp.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/beercp.png')}/>
      </View>
      <View style={styles.starContainer}>
            <Image style={styles.star} source={require('../../../assets/images/beercp.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/graybear.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/graybear.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/graybear.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/graybear.png')}/>
            <Image style={styles.star} source={require('../../../assets/images/graybear.png')}/>
      </View> 
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    paddingTop:50,
  },
  icon:{
    width:200,
    height:200,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:22,
    color: "#5F6D7A"
  },
  description: {
    marginTop:20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:16,
    margin:40,
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:"100%",
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "brown",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize:20,
  },
  separator:{
    height:2,
    backgroundColor:"#eeeeee",
    marginTop:20,
    marginHorizontal:30
  },
  starContainer:{
    justifyContent:'center', 
    marginHorizontal:50, 
    flexDirection:'row', 
    marginTop:20
  },
  star:{
    width:40,
    height:40,
  }
});
 