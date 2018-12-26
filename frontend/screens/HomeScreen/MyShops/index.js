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
  Button,
  ImageBackground
} from 'react-native';

export default class Posts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title: "브롱스 연남점",                  time:"1 days a go",    image:"http://www.pubbronx.com/files/attach/images/189/070/001/bb5775aa30444cdf6d10bfa31234adc2.jpg"},
        {id:2, title: "크래프트한스 이태원점",             time:"2 minutes a go", image:"http://mblogthumb4.phinf.naver.net/20160505_39/ahn_dae_won_1462421816573SUcyc_JPEG/P20160504_194930000_3D58CCD7-7D30-47AE-9739-1F44A60E83B8.JPG?type=w800"},
        {id:3, title: "blue55",            time:"3 hour a go",    image:"https://t1.daumcdn.net/cfile/tistory/245798505680E42E18"}, 
        {id:4, title: "봉구비어 신촌점",         time:"4 months a go",  image:"http://www.kpinews.co.kr/news/photo/201802/67530_39625_4536.jpg"}, 
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.case1}>
         <ImageBackground source={require('../../../assets/images/favbsmain.jpg')} style={{width: '100%', height: '100%'}}>
         </ImageBackground>
        </View>
    
        <View style={styles.case2}> 

        <FlatList style={styles.list}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          ItemSeparatorComponent={() => {
            return (
              <View style={styles.separator}/>
            )
          }}
          renderItem={(post) => {
            const item = post.item;
            return (
              <TouchableOpacity>
                <View style={styles.card}>

                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.title}>{item.title}</Text>
                      <Text style={styles.time}>{item.time}</Text>
                    </View>

                    <View style={styles.cardFooter}>
                      <View style={styles.socialBarContainer}>
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/android/75/ffffff/hearts.png'}}/>
                            <Text style={styles.socialBarLabel}>78</Text>
                          </TouchableOpacity>
                        </View>

                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ios-glyphs/75/ffffff/comments.png'}}/>
                            <Text style={styles.socialBarLabel}>25</Text>
                          </TouchableOpacity>
                        </View>
{/* 
                        <View style={styles.socialBarSection}>
                          <TouchableOpacity style={styles.socialBarButton}>
                            <Image style={styles.icon} source={{uri: 'https://png.icons8.com/material/50/ffffff/retweet.png'}}/>
                            <Text  style={styles.socialBarLabel}>13</Text>
                          </TouchableOpacity>
                        </View> */}
                      </View>
                    </View>
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
    flex: 5,
    backgroundColor: 'green',
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  separator: {
    //marginTop: 1,
  },
  /******** card **************/
  card:{
    margin: 0,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#DCDCDC",
    backgroundColor: "#DCDCDC",
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
    //overlay efect
    flex: 1,
    height: 200,
    width: null,
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    backgroundColor: 'transparent'
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 0,
    paddingVertical: 7.5,
    paddingHorizontal: 0
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:22,
    color: "#ffffff",
    marginTop: 10,
    fontWeight:'bold'
  },
  time:{
    fontSize:13,
    color: "#ffffff",
    marginTop: 5
  },
  icon: {
    width:25,
    height:25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flex: 1
  },
  socialBarSection: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    color: "#ffffff",
  },
  socialBarButton:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});  
 
