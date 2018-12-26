import React, { Component } from 'react';
import Modal from "react-native-modal";
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

export default class Store extends Component {
    state = {
        visibleModal: null
    };

    renderButton = (text, onPress) => (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text>{text}</Text>
            </View>
        </TouchableOpacity>
    );

    renderModalContent = () => (
        <View style={styles.modalContent}>
            <Image source={require('../../../assets/qrcode.jpg')} />
            {this.renderButton("Close", () => this.setState({ visibleModal: null }))}
        </View>
    );

    handleOnScroll = event => {
        this.setState({
            scrollOffset: event.nativeEvent.contentOffset.y
        });
    };

    handleScrollTo = p => {
        if (this.scrollViewRef) {
            this.scrollViewRef.scrollTo(p);
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: "Beer Buddy 쿠폰", price: "2018. 11. 20 12:23:34", image: "http://1075koolfm.com/wp-content/uploads/2018/08/Beer-Pints-400x200.jpg" },
                { id: 2, title: "스탬프 쿠폰", price: "2018-10-27 19:20:25", image: "http://1075koolfm.com/wp-content/uploads/2018/08/RC-NEWS-3-REASONS-WHY-BRUNCH-IS-BEER-1217-400x200.jpg" },
                { id: 3, title: "Beer Buddy 쿠폰", price: "2018-10-13 18:45:41", image: "http://1075koolfm.com/wp-content/uploads/2018/08/Beer-Pints-400x200.jpg" },
                { id: 4, title: "스탬프 쿠폰", price: "2018-09-23 21:20:24", image: "http://1075koolfm.com/wp-content/uploads/2018/08/RC-NEWS-3-REASONS-WHY-BRUNCH-IS-BEER-1217-400x200.jpg" },
            ]
        };
    }

    addProductToCart = () => {
        Alert.alert('Success', 'The product has been added to your cart')
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={this.state.data}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor={(item) => {
                        return item.id;
                    }}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={styles.separator} />
                        )
                    }}
                    renderItem={(post) => {
                        const item = post.item;
                        return (
                            <View style={styles.card}>

                                <View style={styles.cardHeader}>
                                    <View>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </View>
                                </View>

                                <Image style={styles.cardImage} source={{ uri: item.image }} />

                                <View style={styles.cardFooter}>
                                    <View style={styles.socialBarContainer}>
                                        {this.renderButton("사용하기", () =>
                                            this.setState({ visibleModal: 1 })
                                        )}
                                        <Modal isVisible={this.state.visibleModal === 1}>
                                            {this.renderModalContent()}
                                        </Modal>
                                    </View>
                                </View>
                            </View>
                        )
                    }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "#E6E6E6",
    },
    listContainer: {
        alignItems: 'center'
    },
    separator: {
        marginTop: 10,
    },
    /******** card **************/
    card: {
        shadowColor: '#00000021',
        shadowOffset: {
            width: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginVertical: 8,
        backgroundColor: "white",
        flexBasis: '47%',
        marginHorizontal: 5,
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
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        flex: 1,
        height: 150,
        width: null,
    },
    /******** card components **************/
    title: {
        fontSize: 18,
        flex: 1,
    },
    price: {
        fontSize: 16,
        color: "green",
        marginTop: 5
    },
    buyNow: {
        color: "purple",
    },
    icon: {
        width: 25,
        height: 25,
    },
    /******** social bar ******************/
    socialBarContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    socialBarSection: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    socialBarlabel: {
        marginLeft: 8,
        alignSelf: 'flex-end',
        justifyContent: 'center',
    },
    socialBarButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: "pink",
        padding: 12,
        margin: 16,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    bottomModal: {
        justifyContent: "flex-end",
        margin: 0
    },
    scrollableModal: {
        height: 300
    },
    scrollableModalContent1: {
        height: 200,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollableModalContent2: {
        height: 200,
        backgroundColor: "lightgreen",
        alignItems: "center",
        justifyContent: "center"
    }
});