import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {Container} from 'native-base';
import friends from '../../../assets/BsInfo'
//import {users} from '../../../assets/UserInfo2.js';
import users from '../../../assets/UserInfo2.js';

const styles = StyleSheet.create({
  friend: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 25,
  },
  name: {
    flex:1,
    fontSize: 18,
    color: '#000',
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  }
});


/*
class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail}}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;
*/
export default class Friend extends Component {
  constructor(){
    super()
    this.state={
      bb:0,
      testUsers: [],
    }
  }
  onPressButton(){
   
  }
  componentDidMound(){
    this.setState({
      testUsers: users,
    }
    )
  }
  render() {
    let photo = friends[0].photo;
    let fname = friends[0].name;
    let lname = friends[0].address;

    
    return (
      <Container style={{flex:1}}>
        <ScrollView style={{marginTop:30}}>
          <TouchableHighlight style={{}} onPress={ () => this.props.navigation.navigate('Details')}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:users[0].picture.large}} />
              <Text style={styles.name}>{users[0].name.first} {users[0].name.last}</Text>
              <TouchableOpacity style={styles.followButton} >
                      <Text style={styles.followButtonText}>친구요청</Text>  
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:.2, }} onPress={ () => this.props.navigation.navigate('Details')}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:users[1].picture.large}} />
              <Text style={styles.name}>{users[1].name.first} {users[1].name.last}</Text>
              <TouchableOpacity style={styles.followButton} >
                      <Text style={styles.followButtonText}>친구요청</Text>  
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:.2, }} onPress={ () => this.props.navigation.navigate('Details')}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:users[2].picture.large}} />
              <Text style={styles.name}>{users[2].name.first} {users[2].name.last} </Text>
              <TouchableOpacity style={styles.followButton} >
                      <Text style={styles.followButtonText}>친구요청</Text>  
              </TouchableOpacity>
            </View>
          </TouchableHighlight>


        </ScrollView>
      </Container>
    );
  }
}
