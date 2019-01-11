import React, {Component} from 'react';
import {Text, View, Alert, ScrollView,Dimensions} from 'react-native';
import {Card, Button, Icon,Header} from 'react-native-elements';
import { SearchBar } from 'react-native-elements'
import Carousel from 'react-native-snap-carousel';

import TourData from '../data/data.json';

export default class Tour extends Component {
  renderdata = TourData.map ((t, i) => {
    return (
      <Card image={{uri: t.img}} style={{marginBottom: 20, flex: 1}} key={i}>
        <Text style={{marginBottom: 10, fontWeight: 'bold', color: '#003c71',fontSize:20}}>
          {t.name}
        </Text>
        <View style={{flex:1,justifyContent:'flex-start', flexDirection:'row'}}>
          <Icon type='font-awesome' name='clock-o' color='grey' style={{flex:1,}}></Icon>
          <Text style={{flex:8, paddingLeft:5}}>{t.time}</Text>
        </View>
        <Text style={{marginBottom: 10}}>
          {t.doc}
        </Text>
        <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'row' }}>
          <Text style={{ flex: 2, color:'orange',fontSize:20,fontWeight:'bold'}}>{`${t.price} VND`} </Text>
          <View style={{justifyContent:'flex-end', paddingLeft:5, flexDirection:'row' ,flexWrap:'wrap'}}>
            <Icon type='font-awesome' name='plane' color='grey' style={{ flex: 1, }}></Icon>
            <Icon type='font-awesome' name='train' color='grey' style={{ flex: 1, }}></Icon>
            <Icon type='ionicon' name='ios-boat' color='grey' style={{ flex: 1, }}></Icon>
          </View>
        </View>
        <Button
          icon={<Icon name="check" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="Xem chi tiết"
          onPress={() => {
            Alert.alert ('Thông báo', JSON.stringify (t.name));
          }}
        />
      </Card>
    );
  });

  renderCarosel({ item, index }) {
    return (
      <Card
        image={{uri: item.img}}>
        <Text style={{ marginBottom: 10, fontWeight: 'bold', color: '#003c71', fontSize: 20,fontStyle:'italic' }}>
          {item.name}
  </Text>
      </Card>
    );
  }
  render () {
    const { height, width } = Dimensions.get('window');
    return (
        <View style={{flex:1}}>
            <Header 
                containerStyle={{height:80, top:-30}}
                placement="center"
                leftComponent={{ icon: 'menu', color: '#fff',text: 'Tour', style: { color: '#fff',fontWeight:'bold' }}}
                centerComponent={<SearchBar
  showLoading= {false}
  platform="android"
  placeholder='Tìm kiếm'
  clearIcon = {<Icon  type= 'font-awesome' name='times-circle' color='grey' style={{fontSize:16}}></Icon>}
  onCl
  />}
                rightComponent={{}}>
            </Header>
            <ScrollView style={{flex:1}}>
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={TourData}
            renderItem={this.renderCarosel}
            sliderWidth={width}
            itemWidth={width}
          />
                {this.renderdata}
            </ScrollView>
        </View>
    );
  }
}
