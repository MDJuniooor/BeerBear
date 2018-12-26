import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,

} from 'react-native';
import users from '../../../assets/UserInfo3';
export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  clickEventListener(item) {
    alert('친구요청이 수락되었습니다!')
  }
  clickEventListener2(item) {
    alert('친구요청을 거절하였습니다!')
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.case1}>
        <Text> </Text>
          </View>
          <View style={styles.case2}>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={users} //this.state.data
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.gender;
          }}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                
                <Image style={styles.userImage} source={{uri:item.picture.large}}/>
                <View style={styles.cardFooter}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.name}>{item.name.first}</Text>
                    <Text style={styles.position}>{item.name.last}</Text>
                    <TouchableOpacity style={styles.followButton} onPress={()=> this.clickEventListener(item)}>
                      <Text style={styles.followButtonText}>요청수락</Text>  
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.followButton2} onPress={()=> this.clickEventListener2(item)}>
                      <Text style={styles.followButtonText}>요청거절</Text>  
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }}/>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   marginTop: 10,
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: "#fff"
  // },
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
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
   alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage:{
    height: 120,
    width: 120,
    borderRadius:60,
    alignSelf:'center',
    borderColor:"#DCDCDC",
    borderWidth:3,
  },
  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#008080",
    fontWeight:'bold'
  },
  position:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
  
  followButton2: {
    marginTop:10,
    height:35,
    width:100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:30,
    backgroundColor: "red",
  },
  followButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
  icon:{
    height: 20,
    width: 20, 
  },
container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  case1: {
    flex: 1,
    width: "100%",
    backgroundColor: 'white',
  },
  case2: {
    marginTop : 20,
    flex: 8,
    backgroundColor: 'white',
  },
});     

/*
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
import {Container} from 'native-base';
import friends from '../../../assets/BsInfo';
import users from '../../../assets/UserInfo2';

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
  }
});

export default class Friend extends Component {
  constructor(){
    super()
    this.state={
      bb:0
    }
  }
  onPressButton(){
    Alert.alert('You tapped the button!')
  }
  render() {
    let photo = friends[0].photo;
    let fname = friends[0].name;
    let lname = friends[0].address;


    return (
      <Container style={{flex:1}}>
        <ScrollView style={{marginTop:30}}>
          <TouchableHighlight style={{}} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:.2, }} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:.2, }} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </Container>
    );
  }
}
*/