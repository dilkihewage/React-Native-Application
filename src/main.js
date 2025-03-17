import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CharactersScreen from './CharactersScreen';
import Welcome from './screens/Welcome';
import SignIn from './SignIn';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen 
            name="SignIn" 
            component={SignIn} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
          />
          <Stack.Screen 
            name="Home" 
            component={Welcome} 
            options={{ headerStyle: { backgroundColor: '#0B020C' } }} 
          />
          <Stack.Screen 
            name="Characters" 
            component={CharactersScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 20,
  },
});

export default App;
