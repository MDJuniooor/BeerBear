import React, { Component } from "react";
import { View, StyleSheet, AsyncStorage } from "react-native";
import { Content, ListItem, List, Container, Header, Card, CardItem, Text, Body  } from "native-base";
import BeerList from "../screens/BeerSearchScreen/BeerList";  
import BeerInfo from "../screens/BeerSearchScreen/BeerInfo";
import BeerReview from "../screens/BeerSearchScreen/BeerReview";

class SearchBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Content>
        <List style={{ backgroundColor: "white" }}>
          <ListItem itemDivider>
            <Text>{this.props.beerName}에 대한 검색결과</Text>
          </ListItem>
          <ListItem>
            <BeerList beerName = {this.props.beerName}/>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default SearchBody;
