import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {ListItem,Header} from 'react-native-elements';
import TourData from '../data/data.json';

export default class Settings extends Component {
  render () {
    return (
      <View>
         <Header 
                containerStyle={{height:80, top:-30}}
                placement="center"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Setting', style: { color: '#fff',fontWeight:'bold'} }}
                rightComponent={{ icon: 'search', color: '#fff' }}>
            </Header>
        <Text> Settings screens </Text>
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
