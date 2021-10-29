import React from "react";

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class HelloWorld extends React.Component {
  
  render() {
    return (
      <Text style = {
        {
          flex: 1,
          top: 100,
          left: 20,
          fontSize: 30
        }
      } > Welcome Chun-Chieh </Text>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);