import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Main from "./Main";
import Event from "./Event";
import Notification from "./Notification";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";

const HomeTabs = createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      title: "홈",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-home${focused ? "" : "-outline"}`
              : "md-home"
          }

        />
      )
    }
  },
  Notification: {
    screen: Notification,
    navigationOptions: {
      title: "채팅",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-chatbubbles${focused ? "" : "-outline"}`
              : "md-chatbubbles"
          }
        />
      )
    }
  }
},
{
  tabBarOptions: {
      activeTintColor: Colors.tintColor,
  }
}
);

export default createStackNavigator(
  { HomeTabs }, 
  { 
//    headerMode: "none" ,
  });
