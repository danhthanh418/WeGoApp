import React, {Component} from 'react';
import {Text, View, Alert, ScrollView} from 'react-native';
import {Card, Button, Icon,Header} from 'react-native-elements';
import Awesome from 'react-native-vector-icons/FontAwesome';

import TourData from '../data/data.json';

export default class Tour extends Component {
  renderdata = TourData.map ((t, i) => {
    return (
      <Card image={{uri: t.img}} style={{marginBottom: 20, flex: 1}} key={i}>
        <Text style={{marginBottom: 10, fontWeight: 'bold', color: 'orange'}}>
          {t.name}
        </Text>
        <Text style={{marginBottom: 10}}>
          {t.doc}
        </Text>
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

  render () {
    return (
        <View style={{flex:1}}>
            <Header 
                containerStyle={{height:80, top:-30}}
                placement="center"
                leftComponent={{ icon: 'menu', color: '#fff',text: 'Tour', style: { color: '#fff',fontWeight:'bold'  }}
                centerComponent={{}}
                rightComponent={{ icon: 'menu', color: '#fff' }}>
            </Header>
            <ScrollView style={{flex:1}}>
                {this.renderdata}
            </ScrollView>
        </View>
    );
  }
}
