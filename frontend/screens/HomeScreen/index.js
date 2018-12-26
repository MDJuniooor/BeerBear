import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import MyBeers from "./MyBeers";
import MyShops from "./MyShops";
import TabBarIcon from "../../components/TabBarIcon";

const MypageTab = createBottomTabNavigator({
    MyBeers: {
        screen: MyBeers,
        navigationOptions: {
          title: "My Beers",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? `ios-beer${focused ? "" : "-outline"}`
                  : "md-beer"
              }
            />
          )
        }
      },
  MyShops: {
    screen: MyShops,
    navigationOptions: {
      title: "My BeerShops",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused} 
          name={
            Platform.OS === "ios"
              ? "ios-thumbs-up"
              : "md-thumbs-up"
          }
        />
      )
    }
  },
}
);
export default createStackNavigator(
  { MypageTab }, 
);
