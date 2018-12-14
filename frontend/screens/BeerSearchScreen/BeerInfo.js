import React, { Component } from "react";
import { View, StyleSheet, AppRegistry, Image } from "react-native";
import { Content, Header, ListItem, List, Thumbnail, Container, Left, Body, Button, Right, Text, Icon, Title, Tab, Tabs, TabHeading } from "native-base";
import BeerReview from './BeerReview';

class BeerInfo extends Component {
  constructor(props) {
    super(props);
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

  render() {
    const beerData = this.props.beerData;
    const star = <Icon name = "star"/>;
    const c = require('../../components/customData.json');
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Text>{this.props.beerData.name}</Text>
          </Left>
          <Right>
            <Button iconRight light transparent onPress={() => this.onClick(this.props.OnOff)}>
              <Icon name = { this.favorite(this.props.OnOff) }/>
            </Button>
          </Right>
        </Header>
          <Body>
            <Image source = {require('../../assets/images/beer_35424.jpg')} style={{width: 90}}/>
            <View>{star}</View>
          </Body>
          <Button light full>
            <Text> 매장 찾기</Text>
          </Button>
          <Tabs>
            <Tab heading = {<TabHeading><Text>정보</Text></TabHeading>}>
              <Content>
              <List>
                <ListItem itemDivider>
                  <Text>이름          {c.beer.name} {"\n"}
                    카테고리  {c.beer.style} {"\n"}
                    도수          {c.beer.abv}{"\n"}
                    산도          {c.beer.ibu}{"\n"}
                    국가          {c.beer.country}{"\n"}
                    제조사      {c.beer.brewery}{"\n"}
                    열량          {c.beer.estcal}
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
                      <Thumbnail square source={require('../../components/catcat.jpg')}/> 
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
  description: {
      padding: 0,
  }
});
//리뷰 더보기 누르면 Navigator 이용해서 BeerReview로 넘어감
export default BeerInfo;
