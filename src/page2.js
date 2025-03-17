import React from 'react';
import { View,Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const Page2 = ({navigation}) => {
    return (
            <View styles={styles.view}>
            <Text styles={styles.bodyText.Text}>Welcome to page2</Text>
            <Button title='Go to Home' onPress={() => navigation.navigate('Home')}/>
            <Button title='Go to previous' onPress={() => navigation.goback()}/>
            <Button title='Go to first page' onPress={() => navigation.popToTop()}/>
            <Button title='Load Sreen Again' onPress={() => navigation.push('Page2')}/>
        </View>
        );

};
const styles = StyleSheet.create({
    view:{
      flex:1,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
    },

    bodyText:{
        fontSize:20,
    },
});
export default Page2;