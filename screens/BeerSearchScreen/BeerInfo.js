import React, { Component } from "react";
import { View, StyleSheet, AppRegistry, Image } from "react-native";
import { Content, Header, ListItem, List, Thumbnail, Container, Left, Body, Button, Right, Text, Icon, Title, Tab, Tabs, TabHeading } from "native-base";
import BeerReview from './BeerReview';
import { Font } from 'expo';
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
class BeerInfo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
    };
}
  favorite = (OnOff) => {
    if (OnOff == 1) {
      return ('heart');
    }
    else {
      return ('ios-heart-outline');
    }
  }
  onClick = (OnOff) => {
    if (OnOff == 0) {
      alert("Favorite added")
      this.setState({OnOff : 1})
    }
    else {
      alert("Favorite canceled")
      this.setState({OnOff : 0})
    }
  }
  _onPressLikeButton(){
    
    this.setState({isLiked: !this.state.isLiked})
    this.state.isLiked == false ? alert("Liked!") : alert("Unliked!")
  }

  render() {
    const beerData =  
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
                };
    const star = <Icon name = "star"/>;
    const c = require('../../components/customData.json');
    let likeIcon = this.state.isLiked? 'heart' : 'heart-o';
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Text style={{color: 'white'}}>크로넨버그 1664</Text>
          </Left>
          <Right>
            <Button iconRight light transparent  onPress={()=>{this._onPressLikeButton()}}>
              <FontAwesome name = {likeIcon }/>
            </Button>
          </Right>
        </Header>
          <Body>
            <Image source = {{uri:beerData.image}} style={styles.cardImage}/>
            
          </Body>
          <Button light full>
            <Text> 매장 찾기</Text>
          </Button>
          <Tabs>
            <Tab heading = {<TabHeading><Text>정보</Text></TabHeading>}>
              <Content>
              <List>
                <ListItem itemDivider>
                  <Text>이름          {beerData.name} {"\n"}
                    카테고리  {beerData.style} {"\n"}
                    도수          {beerData.ABV}{"\n"}
                    산도          {beerData.IBU}{"\n"}
                    국가          {beerData.country}{"\n"}
                    제조사      {beerData.brewery}{"\n"}
                    열량          {beerData.estcal}
                  </Text>
                </ListItem>
              </List>
            </Content>
            </Tab>
            <Tab heading = {<TabHeading><Text>리뷰</Text></TabHeading>}>
              <Content>
                <List>
                <ListItem Thumbnail>                   
                    <Left>
                      <Thumbnail square source={require('../../assets/images/catcat.jpg')}/> 
                    </Left>
                    <Body>
                      <Text> {c.review1.reviewer} </Text>
                      <Text note> {c.review1.content} </Text>
                    </Body>
                    <Right>
                      <Text numberOfLines = {2}> {c.review1.reviewDate} </Text>
                    </Right>
                  </ListItem>
                </List>
                <Button light full>
                  <Text> 리뷰 더보기</Text>
                </Button>
              </Content>
            </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  image: {
      width: 50,
      height: 50,
      padding: 0,
  },
  cardImage:{
        width: 100,
        height : 240,
        resizeMode : 'contain',
        alignSelf:'center'
      },
  description: {
      padding: 0,
  }
});
//리뷰 더보기 누르면 Navigator 이용해서 BeerReview로 넘어감
export default BeerInfo;
