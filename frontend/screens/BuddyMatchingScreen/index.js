import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator,
  StackNavigator,
  TabNavigator,
} from "react-navigation";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";
import { Icon } from 'react-native-elements';
import Feed from "./FriendsMatch";
import UserDetail from "./BuddyInfo";
import Me from "./List";

export const FeedStack = createStackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: '추천 친구',
    },
  },
  Details: {
    screen: UserDetail,
    
  },
});



export const Tabs = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      title: '추천 친구',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-contacts${focused ? "" : "-outline"}`
              : "md-contacts"
          }
        />
      )
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      title: '친구 요청',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-filing${focused ? "" : "-outline"}`
              : "md-filing"
          }
        />
      )
    },
  },
});

export default createStackNavigator(
  { Tabs },
  { 
    headerMode: "none" ,
  }
);