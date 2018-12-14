import React, { Component } from "react";
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base"; 

class BeerList extends Component {
    constructor(props) {
        super(props);
    }
    // 클릭시 Navigator 사용해 BeerInfo 화면으로 넘기기
        
    render() {
        const c = require('../../components/customData.json');
        return (
        <Container>
              <Content padder>
                  <Card>
                    <CardItem header button onPress={() => alert("show beer info")}>
                        <Text>{c.beer.name}</Text>
                        <Text note>{c.beer.style}</Text>
                    </CardItem>
                    <CardItem cardBody button onPress={() => alert("beer info")}>
                        <Image source = {require('../../assets/images/beer_35424.jpg')} />
                    </CardItem>
                    <CardItem>
                        <View> 
                            <Icon name = "star" /> 
                        </View>
                    </CardItem>
                </Card>
            </Content>
        </Container>
      );
    }
  }

export default BeerList;
