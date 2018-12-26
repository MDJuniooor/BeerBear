import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
} from 'react-native';

import users from '../../../assets/UserInfo2'
export default class ProfileCardView extends Component {

  constructor(props) {
    super(props);
  }

  onClickListener = (viewId) => {
    Alert.alert("Alert", "친구 요청이 완료되었습니다! "+viewId);
  }

  render() {
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.box}>
            <Image style={styles.profileImage} source={{uri: 'https://pbs.twimg.com/profile_images/838333189957398529/OEdnN3LU_400x400.jpg'}}/>
            <Text style={styles.name}>주누 준우</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableHighlight style={[styles.button, styles.buttonMessage]} onPress={() => this.onClickListener('')}>
              <Text>친구요청하시겠습니까?</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollContainer:{
    flex: 1,
  },
  container:{
    padding:20,
  },
  box: {
    marginTop:10,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2,
    paddingTop:10
  },
  profileImage:{
    width:300,
    height:300,
    marginBottom:20,
  },
  name:{
    fontSize:35,
    marginBottom:20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  buttonContainer:{
    flexDirection:'row',
    marginTop:20,
  },

  button: {
    width:'100%',
    height:60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    borderRadius:30,
    margin:10,
    shadowColor: 'black',
    shadowOpacity: .8,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  buttonMessage: {
    backgroundColor: "#00BFFF",
  },
  buttonLike: {
    backgroundColor: "#228B22",
  },
  buttonLove: {
    backgroundColor: "#FF1493",
  },
  buttonCall: {
    backgroundColor: "#40E0D0",
  },
  icon: {
    width:35,
    height:35,
  }
}); 