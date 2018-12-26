import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import ShopScreen from "./ShopScreen";
import Map from "./Map";
import { FontAwesome } from "@expo/vector-icons";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";


export const ShopSearchTabs = createStackNavigator({

  Map: {
    screen: Map,
    navigationOptions: {
      title: "지도",
      
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
      
    },
  },

  ShopScreen: {
    screen: ShopScreen,
    navigationOptions: {
      title: "샵",
      
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
});

export const Tabs = createBottomTabNavigator({
  Map: {
    screen: ShopSearchTabs,

  },
  Test:{
    screen: ShopScreen,
  },

});


export default createStackNavigator(
  { ShopSearchTabs }, 
  { 
    headerMode: "none" ,
  });
