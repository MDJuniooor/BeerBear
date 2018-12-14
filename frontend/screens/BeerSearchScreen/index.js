import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";
import BeerRec from "./BeerRecScreen/BeerRec";
import Search from "./Search";
import BeerInfo from "./BeerInfo";
import BeerReview from "./BeerReview";

const BeerSearchTabs = createBottomTabNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        title: "맥주 검색",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    },
    BeerRec: {
      screen: BeerRec,
      navigationOptions: {
        title: "맥주 추천",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
          />
        )
      }
    }
  },
);
tabBarOptions: {
    activeTintColor: Colors.tintColor
}


export default createStackNavigator(
  { BeerSearchTabs },
  { 
    headerMode: "none" ,
  });
