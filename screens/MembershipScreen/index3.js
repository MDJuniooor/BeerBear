import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
} from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body,
  Segment, 
  Icon,
  Tab, Tabs, TabHeading 
} from "native-base";
import Colors from "../../constants/Colors";

const BeerStamp = ({ stamp }) => {
  return (
    <CardItem>
      {[...Array(stamp)].map((e, i) => {
        return (
          <View style={{marginRight:10}} key={i}>
            <Icon style={{ fontSize: 30 }} color={Colors.tintColor} name="beer" />
          </View>
        );
      })}
    </CardItem>
  );
};
// 빈 얼굴 사진 : <Thumbnail source={require("../../../assets/images/user.jpg")} />
class Profile extends React.Component {
  render() {
    const c = require('../../components/customData.json');
    return (
      <Container>
        <Header/>
        <Body>
          <Segment>
            <Button first title = '내 쿠폰' onPress = {()=> alert("내 쿠폰")}/>
            <Button last title = '적립하기' onPress = {()=> alert("적립하기")}/>
          </Segment>
        </Body>
        <Card style = {{flex : 0, paddingHorizontal : 50}}>
          <CardItem>
            <Text> 스탬프 현황 </Text>
          </CardItem>
          <CardItem>
            <BeerStamp stamp={c.user1.stamp} />
            </CardItem>
        </Card>
        <Body>
          <Segment>
            <Button first title = 'My Beer' onPress = {()=> alert("My Beer")}/>
            <Button last title = 'My Beer Shop' onPress = {()=> alert("My Beer Shop")}/>
          </Segment>
        </Body>
        <Tabs style = {{paddingHorizontal : 50}}>
            <Tab heading = {<TabHeading><Text>오늘</Text></TabHeading>}>
              <Content>
                <Text>{c.user1.Coupon1.shop}{c.user1.Coupon1.datetime}{"\n"}</Text>
                <Text>{c.user1.Coupon2.shop}{c.user1.Coupon2.datetime}{"\n"}</Text>
              </Content>
            </Tab>
            <Tab heading = {<TabHeading><Text>7일</Text></TabHeading>}>
              <Content>

              </Content>
            </Tab>
            <Tab heading = {<TabHeading><Text>30일</Text></TabHeading>}>
              <Content>

              </Content>
            </Tab>
        </Tabs>
      </Container>
    );
  }
}
// 스탬프 갯수 조절?

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default Profile;
