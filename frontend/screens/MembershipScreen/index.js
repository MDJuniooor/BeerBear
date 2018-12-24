import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Coupon from "./Coupon";
import Profile from "./Profile";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";

const MembershipTabs = createBottomTabNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      title: "내정보",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-person${focused ? "" : "-outline"}`
              : "md-person"
          }
        />
      )
    }
  },
  Coupon: {
    screen: Coupon,
    navigationOptions: {
      title: "쿠폰",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? "ios-beer"
              : "md-beer"
          }
        />
      )
    }
  },
},
{
  tabBarOptions: {
      activeTintColor: Colors.tintColor,
  }
}
);

export default createStackNavigator(
  { MembershipTabs }, 
  { 
    headerMode: "none" ,
  });
