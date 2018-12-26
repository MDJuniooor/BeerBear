import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  ImageBackground,
  Platform,
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "코젤다크", image: "https://image.mycelebs.com/beer/new/sq/241539_sq_00.jpg"},
        {id:2, title: "호가든", image:'https://images-na.ssl-images-amazon.com/images/I/61Rnk8egANL._SL1024_.jpg'},
        {id:3, title: "하이네켄", image:"https://nutsaboutwine.ie/wp-content/uploads/2017/03/heineken.jpg"} ,
        {id:4, title: "버드와이저", image:"https://media-verticommnetwork1.netdna-ssl.com/wines/budweiser-435142.jpg"} ,
        {id:5, title: "아사히", image:"https://static.shoplightspeed.com/shops/611413/files/007448610/asahi-brewing-asahi-super-dry-beer-bottle-pint.jpg"} ,
        {id:6, title: "블랑", image:"https://image.mycelebs.com/beer/new/sq/241449_sq_00.jpg"} ,
        {id:7, title: "코로나", image:"http://www.liquorshed.com.au/wp-content/uploads/2017/08/Corona.jpg"} 
      ]
    };
  }
  clickEventListener(item) {
    Alert.Alert(item.title)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.case1}>
         <ImageBackground source={require('../../../assets/images/favbeermain.jpg')} style={{width: '100%', height: '100%'}}>
         </ImageBackground>
        </View>
    
        <View style={styles.case2}>
         
         <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item.view)}}>
                <View style={styles.cardFooter}></View>
                <Image style={styles.cardImage} source={{uri:item.image}}/>
                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
        </View>
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  case1: {
    
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
  },
  case2: {
    flex: 5,
    backgroundColor: 'green',
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',

    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    backgroundColor:"white",
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 70,
    width: 70,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});    
