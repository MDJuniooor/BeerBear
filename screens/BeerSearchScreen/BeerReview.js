import React, { Component } from "react";
import { View, Text, StyleSheet, AppRegistry, Image, Form } from "react-native";
import { Content, Header, ListItem, List, Thumbnail, Container, Left, Body, Right, Button, Icon, Title, Tab, Tabs, TabHeading, Textarea } from "native-base";

// tab 정보 누르면 Navigator 작동해서 BeerInfo로 이동
class BeerReview extends Component { 
    render() {
        const c = require('../../components/customData.json');
      return (
        <Container>
          <Form>
            <Textarea rowSpan = {5} bordered placeholder = "리뷰를 입력해 주세요"/>
          </Form>
            <Tabs>
              <Tab heading = {<TabHeading><Text>정보</Text></TabHeading>}>
                </Tab>
              <Tab heading = {<TabHeading><Text>리뷰</Text></TabHeading>}>
                <Content>
                  <List>
                  <ListItem>                   
                    <Left>
                        <Image source={require('../../assets/images/catcat.jpg')} style = {styles.image}/> 
                    </Left>
                    <Body>
                        <View style = {styles.description}>
                            <Text style={{textAlign: 'left'}}> {c.review1.reviewer} </Text>
                            <Text note style={{textAlign: 'left'}}> {c.review1.content} </Text>
                        </View>
                    </Body>
                    <Right>
                      <Text numberOfLines = {2} style = {{width : 80}}> {c.review1.reviewDate} </Text>
                    </Right>
                  </ListItem>
                  <ListItem Thumbnail>                   
                    <Left>
                      <Thumbnail square source={require('../../assets/images/catcat.jpg')}/> 
                    </Left>
                    <Body>
                      <Text> {c.review2.reviewer} </Text>
                      <Text note> {c.review2.content} </Text>
                    </Body>
                    <Right>
                      <Text numberOfLines = {2}> {c.review2.reviewDate} </Text>
                    </Right>
                  </ListItem>
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
                  <ListItem Thumbnail>                   
                    <Left>
                      <Thumbnail square source={require('../../assets/images/catcat.jpg')}/> 
                    </Left>
                    <Body>
                      <Text> {c.review3.reviewer} </Text>
                      <Text note> {c.review3.content} </Text>
                    </Body>
                    <Right>
                      <Text numberOfLines = {2}> {c.review3.reviewDate} </Text>
                    </Right>
                  </ListItem>
                  </List>
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

export default BeerReview;
