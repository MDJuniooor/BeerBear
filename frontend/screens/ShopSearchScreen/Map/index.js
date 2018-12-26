import React from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, Button, TouchableHighlight, ScrollView,  } from 'react-native';
import {Container, } from 'native-base';
import MapView from 'react-native-maps';
import ShopInfo from  '../../../assets/BsInfo';



export default class Map extends React.Component {
  constructor(){
    super();
    this.state={
    region: {
      latitude:0,
      longitude:0,
      latitudeDelta: 0.0922*4,
      longitudeDelta: 0.0421*4,
    },
    
    //shop: null,
    shopLat:37.533489,
    shopLong:126.994048,
    shopName:'test',
    shopLat2:37.533489,
    shopLong2:126.994048,
    shopName2:'test',
    shopLat3:37.533489,
    shopLong3:126.994048,
    shopName3:'test',
    }
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
          shopLat: ShopInfo[0].latitude,
          shopLong: ShopInfo[0].longitude,
          shopName: ShopInfo[0].name,
          shopLat2: ShopInfo[1].latitude,
          shopLong2: ShopInfo[1].longitude,
          shopName2: ShopInfo[1].name,
          shopLat3: ShopInfo[2].latitude,
          shopLong3: ShopInfo[2].longitude,
          shopName3: ShopInfo[2].name,
        })     
      }
    );
  }

  onRegionChange(region){
    this.setState({region});
  }
  render() { 
    let testShop = ShopInfo;
    return (
      
      
      <View style={styles.map}>
      
        <MapView 
          style={styles.map}
          region={this.state.region }
           
        >
          
         
           <MapView.Marker
            coordinate={{
              latitude: this.state.region.latitude,
              longitude: this.state.region.longitude,
            }}
            pinColor='blue'
            
            >
           
          </MapView.Marker>
          
          <MapView.Marker
            coordinate={{
              latitude: testShop[0].latitude,
              longitude: testShop[0].longitude,
            }}
            title={testShop[0].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[0].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: testShop[1].latitude,
              longitude: testShop[1].longitude,
            }}
            title={testShop[1].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[1].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: testShop[2].latitude,
              longitude: testShop[2].longitude,
            }}
            title={testShop[2].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[2].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: testShop[3].latitude,
              longitude: testShop[3].longitude,
            }}
            title={testShop[3].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[3].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: testShop[4].latitude,
              longitude: testShop[4].longitude,
            }}
            title={testShop[4].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[4].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: testShop[5].latitude,
              longitude: testShop[5].longitude,
            }}
            title={testShop[5].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[5].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: testShop[6].latitude,
              longitude: testShop[6].longitude,
            }}
            title={testShop[6].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[6].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>
          <MapView.Marker
            coordinate={{
              latitude: testShop[7].latitude,
              longitude: testShop[7].longitude,
            }}
            title={testShop[7].name}
            onCalloutPress={ ()=>this.props.navigation.navigate('ShopScreen') }
            >
           <MapView.Callout
              onPress={()=> this.props.navigation.navigate('ShopScreen')}
           >
              <View>
              <Text>{testShop[7].name}</Text>
              </View>
          </MapView.Callout>
          </MapView.Marker>

        </MapView>
        
      
      
      </View>
      
      
        
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
  },
  map: {
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
  }
});

