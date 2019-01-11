import React, {Component} from 'react'
import {StyleSheet,Dimensions,View,Text}  from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {Header} from 'react-native-elements'

const FirstRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const SecondRoute = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);
const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: 'red'}]} />
);

export default class Test extends React.Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Điểm đến' },
            { key: 'second', title: 'Ẩm thực' },
            { key: 'third', title: 'Mẹo' },
        ],
    };

    render() {
        return (

                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: FirstRoute,
                        second: SecondRoute,
                        third: ThirdRoute,
                    })}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={{ width: Dimensions.get('window').width }}
                />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});