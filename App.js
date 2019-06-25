/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import { Form, FormLabel, FormInput, FormValidationMessage, Avatar, PricingCard, SocialIcon, Divider } from 'react-native-elements'


import Routes from './Route'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={{flex:1,flexDirection: 'column',justifyContent: 'center',alignItems: 'stretch'}}><StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        <Routes />

        <Divider style={{ backgroundColor: 'tomato' }} />
        <View style={{width: '100%',height: 50,backgroundColor: '#082349',alignSelf:'flex-end'}}>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
});


