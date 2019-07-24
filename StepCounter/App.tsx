import React from 'react';
import { Dimensions, StyleSheet, Text, Button, View, Image } from 'react-native';

export default class App extends React.Component {
  state = {counter: 0};

  render (){
    const currentCounter = this.state.counter;

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/ssvl_logo_2017.gif')} />
        <Text style={styles.counter}>{currentCounter}</Text>
        <View style={styles.button}>
          <Button
            title="Drück mich!"
            onPress={()=> {
              this.setState({counter: currentCounter +1});
              console.log(this.props);
            }}/>
        </View>
      </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    color: 'orange',
    fontSize: 180
  },
  button:{ // or use Button.containerViewStyle={{width: Dimensions.get('window').width, marginLeft: 0}}
    width: "90%", //Dimensions.get('window').width,// 300/2.5,
    marginLeft: 0//,    marginRight: 30
  },
  logo: {
    width: 300/2.5,
    height:171/2.5
  }
});
