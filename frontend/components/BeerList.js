import React, { Component } from "react";
import { Image, View } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from "native-base";  

class BeerList extends Component {
    constructor(props) {
        super(props);
    }
        // 클릭시 BeerInfo 화면으로 넘기기
    render() {
        const beerData = this.props.beerData;
        return (
        <Container>
              <Content padder>
                  <Card>
                    <CardItem header button onPress={() => alert("This is Card Image")}>
                        <Text>{beerData.name}</Text>
                        <Text note>{beerData.catecory}</Text>
                    </CardItem>
                    <CardItem cardBody button onPress={() => alert("This is Card Image")}>
                        <Image source={{uri: 'https://goo.gl/images/s34Mw9'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                        <Icon name="star" />
                        <Icon name="star" />
                        <Icon name="star" />
                    </CardItem>
                </Card>
            </Content>
        </Container>
      );
    }
  }

export default BeerList;