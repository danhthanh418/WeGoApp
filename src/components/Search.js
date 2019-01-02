import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {SearchBar,Header} from 'react-native-elements';

export default class Search extends Component {
  render () {
    return (
      <View>
         <Header 
                containerStyle={{height:80, top:-30,bottom:0}}
                placement="center"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Search', style: { color: '#fff',fontWeight:'bold'} }}
                rightComponent={{ icon: 'search', color: '#fff' }}>
            </Header>
        <SearchBar
          round
          lightTheme
          searchIcon={{size: 24}}
          placeholder="Type Here..."
        />
        <View style={{flex:1}}>
            <Text>Search result</Text>
        </View>
      </View>
    );
  }
}
