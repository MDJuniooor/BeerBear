import React, { Component } from "react";
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
  Text,
  Body,
  Thumbnail,
  Left,
  Right,
  Title,
  Icon,
  Label,
  Form,
  Item
} from "native-base";
import Colors from "../../../constants/Colors";
import ShopInfo from '../../../assets/BsInfo';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Placeholder } from "semantic-ui-react";

//
import PropTypes from 'prop-types'

import contactData from '../../../mocks/contact.json'

import Profile from './Profile'

const ProfileScreen = () => <Profile {...contactData} />

ProfileScreen.navigationOptions = () => ({
  header: null,
})

ProfileScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileScreen

//          <CardItem cardBody>
//<Thumbnail source={require("../../../assets/images/bsImg.png")} />
//</CardItem>

// class Main extends React.Component {
//   render() {
//     return (
//       <Container>
//         <Content padder>
//           <Card>
//             <CardItem>
//               <Left>
//                 <Thumbnail
//                   source={{uri: ShopInfo[0].photo}}/>
//                 <Body>
//                   <Text>{ShopInfo[0].name}</Text>
//                   <Text note></Text>
//                 </Body>
//               </Left>
//             </CardItem>

//             {/* /* <CardItem bordered>
//               <Body>
//                 <Label>주소</Label>
//                 <Item fixedLabel>
//                 <Text>
//                   {ShopInfo[0].address}
//                 </Text>
//                 </Item>
//                 <Text>
//                   주소: {ShopInfo[0].address}
//                 </Text>
//                 <Text>
//                   홈페이지: {ShopInfo[0].homepage}
//                 </Text>
//               </Body>
//             </CardItem> */}
//           </Card> 
//           <Form>
//               <Item fixedLabel>
//                 <Label>주소</Label>
//                 <Text> {ShopInfo[0].address} </Text>
//               </Item>

//               <Item fixedLabel last>
//               <Label>홈페이지</Label>
//               <Text>{ShopInfo[0].homepage}</Text>
//               </Item>
//           </Form>

//           <Card>
//             <CardItem>
//               <Text> 단골고객 </Text>
//             </CardItem>
//             <CardItem>
//             <Text> {ShopInfo[0].customers_counting} </Text>
//             </CardItem>
//           </Card>
//           <Card>
//             <CardItem>
//               <Text> 고객방문 </Text>
//             </CardItem>
//             <CardItem>
//             <Text> 230회 </Text>
//             </CardItem>
//           </Card>

//         </Content>
//       </Container>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff"
//   }
// });

// export default Main;
