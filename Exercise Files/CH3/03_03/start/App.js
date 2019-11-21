import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { Switch, NativeRouter, Route, Link } from 'react-router-native';
import Cards from './Cards';

// You can safely remove this line if React Native updated their React
// lifecycle methods github issue: https://github.com/facebook/react-native/issues/18175
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <View>
            <Link to="/cards"><Text style={styles.text}>Cards</Text></Link>
          </View> 
          <View>
            <Switch>
              <Route exact path="/cards" component={Cards}/>
            </Switch>
          </View> 
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
