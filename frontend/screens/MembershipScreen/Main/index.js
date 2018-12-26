import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";


class HomeScreen extends React.Component {
  static navigationoption = {
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            position: "absolute",
          }}
        >
          <Image
            source={require("../../../assets/images/beer.jpg")}
            style={{ flex: 1 }}
          />
        
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default HomeScreen;
