import React from "react";
import { ScrollView, SafeAreaView, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


import HomeScreen from "../screens/HomeScreen";
import BeerSearchScreen from "../screens/BeerSearchScreen";
import MembershipScreen from "../screens/MembershipScreen";
import OwnerScreen from "../screens/OwnerScreen";
import ShopSearchScreen from "../screens/ShopSearchScreen";
import Colors from "../constants/Colors";
import BuddyMatchingScreen from "../screens/BuddyMatchingScreen";
//import window from "../constants/Layout";
const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={{height:150, backgroundColor:'white', alignItems:'center',justifyContent:'center'}}>
            <Image source={require('../assets/images/profile.png')} style={{height:120, width:120, borderRadius: 60}}/>
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)
export default createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: ({ state }) => {
          return {
            tintColor: Colors.tintColor
          };
        },
        drawerLabel: "메인",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={17} color={tintColor} />
        )
      }
    },
    BuddyMatchingScreen: {
      screen: BuddyMatchingScreen,
      navigationOptions: {
        header: ({ state }) => {
          return {
            tintColor: Colors.tintColor
          };
        },
        drawerLabel: "맥주 친구",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-contacts" size={17} color={tintColor} />
        )
      }
    },
    BeerSearchScreen: {
      screen: BeerSearchScreen,
      navigationOptions: {
        header: ({ state }) => {
          return {
            tintColor: Colors.tintColor
          };
        },
        drawerLabel: "맥주 추천/검색",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-search" size={17} color={tintColor} />
        )
      }
    },
    ShopSearchScreen: {
      screen: ShopSearchScreen,
      navigationOptions: {
        header: ({ state }) => {
          return {
            tintColor: Colors.tintColor
          };
        },
        drawerLabel: "맥주집 찾기",
        drawerIcon: ({ tintColor }) => (
          <FontAwesome name="map-marker" size={17} color={tintColor} />
        )
      }
    },
    MembershipScreen: {
      screen: MembershipScreen,
      navigationOptions: {
        header: ({ state }) => {
          return {
            tintColor: Colors.tintColor
          };
        },
        drawerLabel: "마이페이지",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-card" size={17} color={tintColor} />
        )
      }
    },
    OwnerScreen: {
      screen: OwnerScreen,
      navigationOptions: {
        header: ({ state }) => {
          return {
            tintColor: Colors.tintColor
          };
        },
        drawerLabel: "Owner 페이지",
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-bowtie" size={17} color={tintColor} />
        )
      }
    }
  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: Colors.tintColor
    }
  }
);
