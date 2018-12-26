import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Content, ListItem, List, CardItem, Card, Container } from "native-base";
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import Button from 'react-native-button';
import ShopInfo from  '../../../assets/BsInfo';

import styles from "./styles";
import Comments from "react-native-comments";
import * as commentActions from "./ExampleActions";
import moment from "moment"

import Review from "../../OwnerScreen/Review"

class ShopScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.props = props;
    this.actions = commentActions;
    this.state = {
      comments: [],
      loadingComments: true,
      lastCommentUpdate: null,
      review: this.props.review ? this.props.review : null,
      login: null,
      id: this.props.id,
      isLiked: false,
    };

    this.scrollIndex = 0;
  }

  static navigatorStyle = {};

  componentWillMount() {
    const c = this.actions.getComments();
    this.setState({
      comments: c,
      loadingComments: false,
      lastCommentUpdate: new Date().getTime()
    });
  }

  extractUsername(c) {
    try {
      return c.email !== "" ? c.email : null;
    } catch (e) {
      console.log(e);
    }
  }

  extractBody(c) {
    try {
      return c.body && c.body !== "" ? c.body : null;
    } catch (e) {
      console.log(e);
    }
  }

  extractImage(c) {
    try {
      return c.image_id && c.user.image_id !== ""
        ? c.user.image_id
        : "https://ireview.live/img/no-user.png";
    } catch (e) {
      console.log(e);
    }
  }

  extractChildrenCount(c) {
    try {
      return c.childrenCount || 0;
    } catch (e) {
      console.log(e);
    }
  }

  extractEditTime(item) {
    try {
      return item.updated_at;
    } catch (e) {
      console.log(e);
    }
  }

  extractCreatedTime(item) {
    try {
      return item.created_at;
    } catch (e) {
      console.log(e);
    }
  }

  likeExtractor(item) {
    return item.liked;
  }

  reportedExtractor(item) {
    return item.reported;
  }

  likesExtractor(item) {
    return item.likes.map(like => {
      return {
        image: like.image,
        name: like.username,
        user_id: like.user_id,
        tap: username => {
          console.log("Taped: " + username);
        }
      };
    });
  }

  isCommentChild(item) {
    return item.parentId !== null;
  }
  

  _onPressLikeButton(){
    
    this.setState({isLiked: !this.state.isLiked})
    this.state.isLiked == false ? alert("Liked!") : alert("Unliked!")
  }

  onPressBackButton(){
    
  }
  
  render() {
    
    let ShopPic ={ uri : ShopInfo[0].photo };
    let ShopName = ShopInfo[0].name;
    let ShopAddress = ShopInfo[0].address;
    let ShopPhoneNum = ShopInfo[0].phone_num;
    let ShopHomepage = ShopInfo[0].homepage;
    

    let likeIcon = this.state.isLiked? 'heart' : 'heart-o';
    
    const review = this.state.review;
    const data = this.state.comments;
    
    return (
  
      <ScrollView
        style={styles.container}
        keyboardShouldPersistTaps="always"
        onScroll={event => {
          this.scrollIndex = event.nativeEvent.contentOffset.y;
        }}
        ref={"scrollView"}
      >
      
        
       
         <Content>
        <List style={{ backgroundColor: "white",  }}>
          <ListItem style={{ justifyContent:'center', flexDirection:'column' }}>
            <Image style={{ width:120, height:120, alignItems:'center'}} source={ShopPic}/>
            <Text style={{ paddingTop:10, fontSize:21.33, paddingLeft:20}}>{ShopName}</Text>
            <Button style={{height:30, width:30  }} onPress={()=>{this._onPressLikeButton()}}>
              <FontAwesome size={30} color='pink' name={likeIcon}/>
            </Button>
          </ListItem>
          
          
          <ListItem style={{ flexDirection:'row', }}>
            <Entypo style={{}} color="gray" size={30} name="shop" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopName}</Text>
        </ListItem>
          <ListItem style={{ flexDirection:'row', }}>
            <FontAwesome style={{}} color="gray" size={30} name="map-marker" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopAddress}</Text>
          </ListItem>
          <ListItem style={{  flexDirection:'row',   }}>
            <FontAwesome  color="gray" size={30} name="home" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopHomepage}</Text>
          </ListItem>
      
          <ListItem style={{  flexDirection:'row',   }}>
            <FontAwesome  color="gray" size={30} name="phone" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopPhoneNum}</Text>
          </ListItem>
       
          <ListItem style={{  flexDirection:'row',   }}>
            <MaterialIcons backgroundColor="transparent" color="gray" size={30} name="rate-review" />
            
            
          

        {this.state.comments.length ? (
          <Comments
            data={data}
            //To compare is user the owner
            viewingUserName={{uri: ShopInfo[0].name}}
            //how many comments to display on init
            initialDisplayCount={5}
            //How many minutes to pass before locking for editing
            editMinuteLimit={0}
            //What happens when user taps on username or photo
            usernameTapAction={username => {
              console.log("Taped user: " + username);
            }}
            //Where can we find the children within item.
            //Children must be prepared before for pagination sake
            childPropName={"children"}
            isChild={item => this.isCommentChild(item)}
            //We use this for key prop on flat list (i.e. its comment_id)
            keyExtractor={item => item.commentId}
            //Extract the key indicating comments parent
            parentIdExtractor={item => item.parentId}
            //what prop holds the comment owners username
            usernameExtractor={item => this.extractUsername(item)}
            //when was the comment last time edited
            editTimeExtractor={item => this.extractEditTime(item)}
            //When was the comment created
            createdTimeExtractor={item => this.extractCreatedTime(item)}
            //where is the body
            bodyExtractor={item => this.extractBody(item)}
            //where is the user image
            imageExtractor={item => this.extractImage(item)}
            //Where to look to see if user liked comment
          likeExtractor={item => this.likeExtractor(item)}
            //Where to look to see if user reported comment
            reportedExtractor={item => this.reportedExtractor(item)}
            //Where to find array with user likes
          likesExtractor={item => this.likesExtractor(item)}
            //Where to get nr of replies
            childrenCountExtractor={item => this.extractChildrenCount(item)}
            // //what to do when user clicks reply. Usually its header height + position (b/c scroll list heights are relative)
            // replyAction={offset => {
            //   this.refs.scrollView.scrollTo({
            //     x: null,
            //     y: this.scrollIndex + offset - 300,
            //     animated: true
            //   });
            // }}
            //what to do when user clicks submits edited comment
            saveAction={(text, parentCommentId) => {
              let date = moment().format("YYYY-MM-DD H:mm:ss");
              let owenr = ShopInfo[0].name;
              let comments = this.actions.save(
                this.state.comments,
                text,
                parentCommentId,
                date,
                owenr
              );
              this.setState({
                comments: comments
              });

              if (!parentCommentId) {
                this.refs.scrollView.scrollToEnd();
              }
            }}
            //what to do when user clicks submits edited comment
            editAction={(text, comment) => {
              let comments = this.actions.edit(
                this.state.comments,
                comment,
                text
              );
              this.setState({
                comments: comments
              });
            }}
            //what to do when user clicks report submit
            reportAction={comment => {
              let comments = this.actions.report(this.state.comments, comment);
              this.setState({
                comments: comments
              });
            }}
            // //what to do when user clicks like
            // likeAction={comment => {
            //   let comments = this.actions.like(this.state.comments, comment);
            //   this.setState({
            //     comments: comments
            //   });
            // }}
          
            //Must return promise
            paginateAction={(from_comment_id, direction, parent_comment_id) => {
              //Must return array of new comments after pagination

              let newComments = this.actions.paginateComments(
                this.state.comments,
                from_comment_id,
                direction,
                parent_comment_id
              );

              this.setState({
                comments: newComments
              });
              let self = this;
              setTimeout(function() {
                if (direction == "up") {
                  self.refs.scrollView.scrollTo({
                    x: 0,
                    y: 500,
                    animated: true
                  });
                } else {
                  self.refs.scrollView.scrollTo({ x: 0, y: 0, animated: true });
                }
              }, 3000);
            }}
          />
        ) : null}

          </ListItem>
      
        </List>
        
      </Content>
      </ScrollView>
      
    );
  }
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex:0.1,
    backgroundColor: '#1FB6FF',
    marginTop:24
  },
 
  title: {
    flexDirection: 'row',
    backgroundColor:"transparent",
    alignItems:'center',
    justifyContent:'space-between',
    
    marginTop:4,
    marginLeft:5,
    marginRight:5,
  },
})
*/
export default ShopScreen;