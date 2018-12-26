import React, { Component } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Alert, ScrollView, FlatList, ImageBackground, Platform } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base"; 

class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
             data: [
                {
                    "id": 81,
                    "ref": 4459,
                    "name": "크로넨버그 1664(Kronenbourg 1664)",
                    "brewery": "Kronenbourg (Carlsberg)",
                    "style": "페일 라거(Pale Lager)",
                    "city": "Obernai",
                    "state": null,
                    "country": "France",
                    "ABV": 0.055,
                    "IBU": null,
                    "EST_CAL": 165,
                    "avg_scr": 2.28,
                    "description": "케그 & 병; 저온 살균. 성분 : 물, 보리 맥아, 옥수수, 밀 맥아, 색상 : 카라멜, 홉 추출물 크로넨 부르그 1664는 프랑스의 1 위 맥주 판매량과 영국에서 두 번째로 큰 판매 프리미엄 맥주입니다. Kronenbourg 1664는 알자스 (Alsace)의 향기로운 홉 (hop)을 포함하여 독특한 홉 (hop)을 혼합하여 만들어졌습니다.",
                    "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_4459",
                    "favorite_user_list": []
                },
                {
                    "id": 116,
                    "ref": 15747,
                    "name": "산토리(Suntori)",
                    "brewery": "Suntory Liquors Limited",
                    "style": "프리미엄 라거(Premium Lager)",
                    "city": "Osaka",
                    "state": null,
                    "country": "Japan",
                    "ABV": 0.055,
                    "IBU": null,
                    "EST_CAL": 165,
                    "avg_scr": 2.68,
                    "description": "",
                    "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_15747",
                    "favorite_user_list": []
                },
                {
                    "id": 153,
                    "ref": 274029,
                    "name": "템트 9(Tempt No 9)",
                    "brewery": "Royal Unibrew",
                    "style": "사과주(Cider)",
                    "city": "Faxe",
                    "state": null,
                    "country": "Denmark",
                    "ABV": 0.045,
                    "IBU": null,
                    "EST_CAL": 135,
                    "avg_scr": 2.77,
                    "description": "",
                    "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_274029",
                    "favorite_user_list": []
                }
            ],
         //   custom : require('../../components/searchData.json'),
            beerName : this.props.beerName
          };
    }
    clickEventListener(item) {
        Alert.Alert(item.title)
    }
        
    render() {
        
        return (
            <View style={styles.container}>
            <Text>{this.props.beerName}</Text>
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
                    <TouchableOpacity style={styles.card} onPress={() => {this.props.navigation.navigate('BeerInfo')}}>
                    <View style={styles.cardFooter}></View>
                    <Image style={styles.cardImage} source={{uri:item.image}}/>
                    <View style={styles.cardHeader}>
                      <View style={{alignItems:"center", justifyContent:"center"}}>
                        <Text style={styles.title}>{item.name}</Text>
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
        width: 70,
        height : 70,
        resizeMode : 'contain',
        alignSelf:'center'
      },
      title:{
        fontSize:18,
        flex:1,
        alignSelf:'center',
        color:"#696969"
      },
    });    
    

export default BeerList;
