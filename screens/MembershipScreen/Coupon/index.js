import React from "react";
import { AsyncStorage, StyleSheet, View, Button,TouchableOpacity } from "react-native";
import { Header, Left, Right, Icon} from "native-base";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
            <Left>
                <Icon name="menu" onPress={()=>{this.props.navigation.openDrawer()}}/>
            </Left>
        </Header>
        {/* <Button
          title="홈"
          onPress={() => {
            console.log("test");
          }}
        /> */}
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
