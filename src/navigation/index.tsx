import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeStackNavigator from './homeStack';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
