import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import {TabView, TabBar, SceneMap} from 'react-native-tab-view';
import TourData from '../data/data.json';

export default class CamNang extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Điểm đến'},
      {key: 'second', title: 'Ẩm thực'},
      {key: 'third', title: 'Mẹo hay'},
    ],
  };
  render () {
    return (
      <View>
        <Header
          containerStyle={{height: 80, top: -30}}
          placement="center"
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{
            text: 'Cẩm nang',
            style: {color: '#fff', fontWeight: 'bold'},
          }}
          rightComponent={{}}
        />
        {TourData.map ((t, i) => (
          <ListItem
            key={i}
            leftAvatar={{source: {uri: t.img}}}
            title={t.name}
            subtitle={t.doc}
          />
        ))}
      </View>
    );
  }
}
