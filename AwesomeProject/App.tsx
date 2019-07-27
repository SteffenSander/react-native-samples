import React from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

// see for gradient: https://medium.com/@Chilid/react-native-and-how-to-start-your-first-application-cc9afdea2eca 
export default class App extends React.Component<Props> {
  render() {
    return (
      <LinearGradient colors={['#3399ff', '#55ddff']}
        style={styles.container}>
        <Image style={styles.logo} source={require('./assets/ssvl_logo_2017.gif')} />
        <Text style={styles.welcome}>Meine Trainings-App</Text>
        <Text style={styles.subTitle}>Schwimm-Sport-Verein Lahr von 1921 e.V.</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3399ff',//'#F5FCFF',
  },
  welcome: {
    color: '#dddddd',
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo: {
    width: 300/1.5,
    height:171/1.5
  },
  subTitle: {
    textAlign: 'center',
    color: '#dddddd',
    marginTop: 40,
    marginBottom: 5
  },
  instructions: {
    textAlign: 'center',
    fontSize: 9,
    color: '#555555',
    marginTop: 40,
    marginBottom: 5
  },
});
