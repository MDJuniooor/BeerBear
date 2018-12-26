import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Main from "./Main";
import Notification from "./Notification";
import Coupon from "./Coupon";
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
      title: "스탬프적립",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-qr-scanner${focused ? "" : "-outline"}`
              : "md-qr-scanner"
          }
        />
      )
    }
  },
  Coupon: {
    screen: Coupon,
    navigationOptions: {
      title: "My Coupon",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-card${focused ? "" : "-outline"}`
              : "md-card"
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
