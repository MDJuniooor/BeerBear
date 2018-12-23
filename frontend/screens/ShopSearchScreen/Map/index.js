import React from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList } from 'react-native';
import MapView from 'react-native-maps';
import ShopInfo from '../assets/ShopInfo';


export default class Map extends React.Component {
  state={
    region: {
      latitude:0,
      longitude:0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    
    shop: [],
    shopLat:37.533489,
    shopLong:126.994048,
    shopName:'blue55',
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var lati = position.coords.latitude
        var longi = position.coords.longitude
        var regioni = {
          latitude: lati,
          longitude: longi,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
        this.setState({
          region: regioni,
          shop: ShopInfo,
        })     
      }
    );
  }

  onRegionChange(region){
    this.setState({region});
  }
  render() { 

    return (
      <View style={styles.container}>
        <Text>{this.state.region.lat} {this.state.region.long} </Text>
        
        <MapView 
          style={styles.map}
          region={this.state.region }
        >
          <FlatList data={this.state.shop} renderItem= { ({item}) => 
            <MapView.Marker coordinate={item.latitude, item.longitude} title={item.name}/> } >
          </FlatList>
          <MapView.Marker
            coordinate={{
              latitude: this.state.shopLat,
              longitude: this.state.shopLong,
            }}
            title={this.state.shopName}/>
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    position: 'absolute',
    top:40,
    left:0,
    bottom:0,
    right:0,
  }
});
