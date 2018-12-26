import React, { Component } from "react";
import { View, Text, StyleSheetm, Keyboard,TouchableHighlight } from "react-native";
import { Container, Content, } from "native-base";
import SearchHeader from "../../components/SearchHeader";
import SearchBody from "../../components/SearchBody";
import Button from 'react-native-button';
class Search extends Component {

  state = {
    searchBeer: "",
    beerData: {},
    // data: [
    //             {
    //                 "id": 105,
    //                 "ref": 9010,
    //                 "name": "카스테일 루지(Kasteel Rouge)",
    //                 "brewery": "Brouwerij Van Honsebrouck",
    //                 "style": "프루트 비어(Fruit Beer)",
    //                 "city": "Emelgem",
    //                 "state": null,
    //                 "country": "Belgium",
    //                 "ABV": 0.08,
    //                 "IBU": null,
    //                 "EST_CAL": 240,
    //                 "avg_scr": 3.47,
    //                 "description": "Kasteel Rouge는 Kasteel Donker와 체리 주류가 혼합 된 제품입니다. 이 두 가지 우수한 제품이 섞여있어 짙은 색 맥주에 대한 언급이있는 부드러운 맥주가 만들어집니다.",
    //                 "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_9010",
    //                 "favorite_user_list": []
    //             },
    //             {
    //                 "id": 130,
    //                 "ref": 72515,
    //                 "name": "코나 와일루아 위트(Kona Wailua Wheat)",
    //                 "brewery": "Kona Brewing Company(Craft Brew Alliance)",
    //                 "style": "프루트 비어(Fruit Beer)",
    //                 "city": "Kailua Kona",
    //                 "state": null,
    //                 "country": "Hawaii",
    //                 "ABV": 0.054000000000000006,
    //                 "IBU": null,
    //                 "EST_CAL": 162,
    //                 "avg_scr": 2.8,
    //                 "description": "한정판. 폭포 바닥의 담수 수영장에서 수영하는 것은 우리 모두가 낙원에서 찾을 수 있다고 생각하는 것입니다. 마우이에서 오래된 하나 고속도로를 따라 가면 Wailua Falls와 같은 장소를 발견 할 수 있습니다. 이 맑은 물이 급격하게 떨어지는 것을 보고 Wailua Limited에 대한 영감을 얻었습니다. 이 황금빛 태양 색 에일 맥주는 열대 과일의 밝은 감귤 향을 갖고 있습니다. 언제든지 편안히 앉아 편안하고 즐거운 시간을 보내십시오.",
    //                 "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_72515",
    //                 "favorite_user_list": []
    //             },
    //             {
    //                 "id": 131,
    //                 "ref": 73158,
    //                 "name": "호가든 로제(Hoegaarden Rosée)",
    //                 "brewery": "Brouwerij Hoegaarden (AB InBev)",
    //                 "style": "프루트 비어(Fruit Beer)",
    //                 "city": "Hoegaarden",
    //                 "state": null,
    //                 "country": "Belgium",
    //                 "ABV": 0.03,
    //                 "IBU": null,
    //                 "EST_CAL": 90,
    //                 "avg_scr": 2.49,
    //                 "description": "",
    //                 "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_73158",
    //                 "favorite_user_list": []
    //             },
    //             {
    //                 "id": 139,
    //                 "ref": 102724,
    //                 "name": "리프만스 프루티제(Liefmans Fruitesse)",
    //                 "brewery": "Liefmans (Duvel-Moortgat)",
    //                 "style": "프루트 비어(Fruit Beer)",
    //                 "city": "Oudenaarde",
    //                 "state": null,
    //                 "country": "Belgium",
    //                 "ABV": 0.038,
    //                 "IBU": null,
    //                 "EST_CAL": 114,
    //                 "avg_scr": 2.99,
    //                 "description": "Liefmans는 딸기, 라즈베리, 체리, billberry 및 elderberry의 자연 과일 주스와 혼합 된 지하실의 실제 체리에서 숙성 된 맥주의 독특하고 상쾌한 조화입니다. 그 결과 Champenoise pearling, 과일 향, 그리고 단호하게 달콤한 음료가 반짝 반짝 빛납니다.",
    //                 "image": "https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_102724",
    //                 "favorite_user_list": []
    //             }
    //         ],
         //   custom : require('../../components/searchData.json'),
            beerName : this.props.beerName

  };
  beerSearch = () => {
    Keyboard.dismiss();
    const beerName = this.state.searchBeer.toLowerCase();
  };

  renderContent = () => {
    if (this.state.searchBeer) {
      return (
      
        <View>
          <SearchBody beerName = {this.state.searchBeer}/>
        </View>
        
      
      );
    }
    else {
      return(
        <Text>검색어를 입력해주세요</Text>
      );
    }
  };

  render() {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchBeer}
          onChangeText={searchBeer => this.setState({ searchBeer })}
          beerSearch={this.beerSearch}
        />
        <Content>{this.renderContent()}</Content>
      </Container>
    );
  }
}
export default Search;
