import React, { Component } from "react";
import { Image, View, StyleSheet, TouchableOpacity, Alert, ScrollView, FlatList, ImageBackground, Platform } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base"; 

class BeerList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 105,
                    "ref": 9010,
                    "name": "카스테일 루지(Kasteel Rouge)",
                    "brewery": "Brouwerij Van Honsebrouck",
                    "style": "프루트 비어(Fruit Beer)",
                    "city": "Emelgem",
                    "state": null,
                    "country": "Belgium",
                    "ABV": 0.08,
                    "IBU": null,
                    "EST_CAL": 240,
                    "avg_scr": 3.47,
                    "description": "Kasteel Rouge는 Kasteel Donker와 체리 주류가 혼합 된 제품입니다. 이 두 가지 우수한 제품이 섞여있어 짙은 색 맥주에 대한 언급이있는 부드러운 맥주가 만들어집니다.",
                    "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_9010",
                    "favorite_user_list": []
                },
                {
                    "id": 130,
                    "ref": 72515,
                    "name": "코나 와일루아 위트(Kona Wailua Wheat)",
                    "brewery": "Kona Brewing Company(Craft Brew Alliance)",
                    "style": "프루트 비어(Fruit Beer)",
                    "city": "Kailua Kona",
                    "state": null,
                    "country": "Hawaii",
                    "ABV": 0.054000000000000006,
                    "IBU": null,
                    "EST_CAL": 162,
                    "avg_scr": 2.8,
                    "description": "한정판. 폭포 바닥의 담수 수영장에서 수영하는 것은 우리 모두가 낙원에서 찾을 수 있다고 생각하는 것입니다. 마우이에서 오래된 하나 고속도로를 따라 가면 Wailua Falls와 같은 장소를 발견 할 수 있습니다. 이 맑은 물이 급격하게 떨어지는 것을 보고 Wailua Limited에 대한 영감을 얻었습니다. 이 황금빛 태양 색 에일 맥주는 열대 과일의 밝은 감귤 향을 갖고 있습니다. 언제든지 편안히 앉아 편안하고 즐거운 시간을 보내십시오.",
                    "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_72515",
                    "favorite_user_list": []
                },
                {
                    "id": 131,
                    "ref": 73158,
                    "name": "호가든 로제(Hoegaarden Rosée)",
                    "brewery": "Brouwerij Hoegaarden (AB InBev)",
                    "style": "프루트 비어(Fruit Beer)",
                    "city": "Hoegaarden",
                    "state": null,
                    "country": "Belgium",
                    "ABV": 0.03,
                    "IBU": null,
                    "EST_CAL": 90,
                    "avg_scr": 2.49,
                    "description": "",
                    "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_73158",
                    "favorite_user_list": []
                },
                {
                    "id": 139,
                    "ref": 102724,
                    "name": "리프만스 프루티제(Liefmans Fruitesse)",
                    "brewery": "Liefmans (Duvel-Moortgat)",
                    "style": "프루트 비어(Fruit Beer)",
                    "city": "Oudenaarde",
                    "state": null,
                    "country": "Belgium",
                    "ABV": 0.038,
                    "IBU": null,
                    "EST_CAL": 114,
                    "avg_scr": 2.99,
                    "description": "Liefmans는 딸기, 라즈베리, 체리, billberry 및 elderberry의 자연 과일 주스와 혼합 된 지하실의 실제 체리에서 숙성 된 맥주의 독특하고 상쾌한 조화입니다. 그 결과 Champenoise pearling, 과일 향, 그리고 단호하게 달콤한 음료가 반짝 반짝 빛납니다.",
                    "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_102724",
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
        if (this.props.beerName == "프루트"){
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
        else {
            return (
                <View>
                    <Text>검색 결과 없음</Text>
                </View>
            );
        }
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
