import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";
import BeerRec from "./BeerRec";
import Search from "./Search";
import BeerInfo from "./BeerInfo";
import BeerReview from "./BeerReview";
import BeerList from "./BeerList";
export const BeerStack = createStackNavigator( 
  {
    Search: {
      screen: Search,
      navigationOptions: {
        title: "맥주 검색",
      }
    },
    // BeerInfo: {
    //     screen: BeerInfo,
    //     navigationOptions: {
    //         title: "상세 정보",

    //         }
    //     },
    BeerList: {
      screen: BeerList,
    }
    }
)
export const BeerRecStack = createStackNavigator(
  {
    BeerRec: {
      screen: BeerRec,
      navigationOptions: {
        title: "맥주 추천",
      }
    },
    BeerInfo: {
        screen: BeerInfo,
        navigationOptions: {
            title: "상세 정보",

            }
        },
    
    }
)
export const BeerSearchTabs = createBottomTabNavigator(
{
  Search: {
      screen: BeerStack,
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
    screen: BeerRecStack,
    navigationOptions: {
      title: "맥주 추천",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-beer" : "md-beer"}
        />
      )
    }
  }
},
  {tabBarOptions: {
    activeTintColor: Colors.tintColor,
    headerMode : null
  }
  }
)

export default createStackNavigator(
  { BeerSearchTabs },
  { 
    headerMode: "none" ,
  });
