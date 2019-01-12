import React, {Component} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {
  IndicatorViewPager,
  PagerTitleIndicator,
} from 'rn-viewpager';
import TourData from '../data/data.json';
import {ListItem} from 'react-native-elements'

export default class CamNang extends React.Component {
  _renderTitleIndicator () {
      return <PagerTitleIndicator titles={['Điểm đến', 'Ẩm thực', 'Mẹo']} style={{ height: 80, bottom:0,alignItems:'center'}}/>;
  }
  render () {
    return (
        <IndicatorViewPager
            style={{ flex: 1, paddingTop: 20, backgroundColor: 'white' }}
            indicator={this._renderTitleIndicator()}
        >
            <View style={{ backgroundColor: 'cadetblue' }}>
                <Text>Điểm đến</Text>
                {
                    TourData.map((t, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: t.img } }}
                            title={t.name}
                            subtitle={t.doc}
                            onPress={this.toggleShow}
                        />
                    ))
                }
            </View>
            <View style={{ backgroundColor: 'cornflowerblue' }}>
                <Text>Ẩm thực</Text>
                {
                    TourData.map((t, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: t.img } }}
                            title={t.name}
                            subtitle={t.doc}
                            onPress={this.toggleShow}
                        />
                    ))
                }
            </View>
            <View style={{ backgroundColor: '#1AA094' }}>
                <Text>Mẹo</Text>
                {
                    TourData.map((t, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri: t.img } }}
                            title={t.name}
                            subtitle={t.doc}
                            onPress={this.toggleShow}
                        />
                    ))
                }
            </View>
        </IndicatorViewPager>
    );
  }
}

const styles = StyleSheet.create ({
  scene: {
    flex: 1,
  },
});
