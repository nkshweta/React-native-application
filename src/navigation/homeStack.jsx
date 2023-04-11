import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const HomeStack = createNativeStackNavigator();
// File Showing the application's first page which holds both serach bar, list of all the series listed in API And the details of the selected TV series as screens.  

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>      
      <HomeStack.Screen name="TV Series" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;