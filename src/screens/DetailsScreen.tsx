import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {styles} from '../components/styles';

const DetailScreen = () => {
  const route = useRoute();
  const {name} = route.params;
  return (
    <View style={styles.homeContainer}>
      <View style={styles.detailsContainer}>
        <Text style={styles.item}>Name: {name}</Text>
      </View>
    </View>
  );
};

export default DetailScreen;
