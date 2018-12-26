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
      title: 'Feed',
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
      title: 'Feed',
      
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      title: 'Me',
      
    },
  },
});

export default createStackNavigator(
  { Tabs },
);