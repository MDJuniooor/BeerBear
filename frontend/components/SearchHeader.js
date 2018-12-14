import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Item, Icon, Input } from "native-base";

class SearchHeader extends Component {
  render() {
    return (
      <Header style={{ height: 80, }} transparent searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder = "검색어를 입력해주세요"
            onChangeText = {this.props.onChangeText}
            returnKeyType="search"
            onSubmitEditing={this.props.beerSearch}
          />
        </Item>
      </Header>
    );
  }
}

export default SearchHeader;
