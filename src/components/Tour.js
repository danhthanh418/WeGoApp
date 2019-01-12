import React, {Component} from 'react';
import {
  Text,
  View,
  Alert,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import {Card, Button, Icon, Header} from 'react-native-elements';
import {SearchBar} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import Modal from 'react-native-modal';

import TourData from '../data/data.json';
import ChiTietTour from './ChiTietTour.js';

export default class Tour extends Component {
  state = {
    isModalVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });


  renderdata = TourData.map ((t, i) => {
    return (
      <TouchableOpacity onPress = {this._toggleModal}>
        <Card image={{ uri: t.img }} style={{ marginBottom: 20, flex: 1 }} key={i}>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: 'bold',
              color: '#003c71',
              fontSize: 20,
            }}
          >
            {t.name}
          </Text>
          <View
            style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}
          >
            <Icon
              type="font-awesome"
              name="clock-o"
              color="grey"
              style={{ flex: 1 }}
            />
            <Text style={{ flex: 8, paddingLeft: 5 }}>{t.time}</Text>
          </View>
          <Text style={{ marginBottom: 10 }}>
            {t.doc}
          </Text>
          <View
            style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}
          >
            <Text
              style={{ flex: 2, color: '#00c1de', fontSize: 20, fontWeight: 'bold' }}
            >
              {`${t.price} VND`}{' '}
            </Text>
            <View
              style={{
                justifyContent: 'flex-end',
                paddingLeft: 5,
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}
            >
              <Icon
                type="font-awesome"
                name="plane"
                color="grey"
                style={{ flex: 1 }}
              />
              <Icon
                type="font-awesome"
                name="train"
                color="grey"
                style={{ flex: 1 }}
              />
              <Icon
                type="ionicon"
                name="ios-boat"
                color="grey"
                style={{ flex: 1 }}
              />
            </View>
          </View>
          {/* <Button
          icon={<Icon name="check" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Xem chi tiết"
        /> */}
        </Card>
      </TouchableOpacity>
    );
  });

  renderCarosel({item, index}) {
    return (
      <TouchableOpacity onPress={this._toggleModal}>
        <Card image={{ uri: item.img }}>
          <Text
            style={{
              marginBottom: 10,
              fontWeight: 'bold',
              color: '#003c71',
              fontSize: 20,
              fontStyle: 'italic',
            }}
          >
            {item.name}
          </Text>
        </Card>
      </TouchableOpacity>
    );
  }
  render () {
    const {height, width} = Dimensions.get ('window');
    return (
      <View style={{flex: 1}}>
        <Header
          containerStyle={{height: 80, top: -30}}
          placement="center"
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            text: 'Tour',
            style: {color: '#fff', fontWeight: 'bold'},
          }}
          centerComponent={
            <SearchBar
              showLoading={false}
              platform="android"
              placeholder="Tìm kiếm"
              clearIcon={
                <Icon
                  type="font-awesome"
                  name="times-circle"
                  color="grey"
                  style={{fontSize: 16}}
                />
              }
            />
          }
          rightComponent={{}}
        />
        <ScrollView style={{flex: 1}}>
          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={TourData}
            renderItem={this.renderCarosel}
            sliderWidth={width}
            itemWidth={width}
          />
          {this.renderdata}
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1,backgroundColor:'#fff',width:width*0.9,height:height*0.9}}>
              <ScrollView>
                <ChiTietTour></ChiTietTour>
              </ScrollView>
              <Button onPress={this._toggleModal} title="Đóng">
              </Button>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  topHeader: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textHeader: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})