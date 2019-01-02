import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Header} from 'react-native-elements'
export default class Detail extends Component {
  render() {
    return (
      <View>
         <Header 
                containerStyle={{height:80, top:-30}}
                placement="center"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Detail', style: { color: '#fff',fontWeight:'bold' } }}
                rightComponent={{ icon: 'search', color: '#fff' }}>
            </Header>
        <Text> Detail screen </Text>
      </View>
    )
  }
}
