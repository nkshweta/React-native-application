import React from 'react';
import {useRoute} from '@react-navigation/native';
import {WebView} from 'react-native-webview';

// This screen Shows the details of the selected TV series by showingh the website of the selected show.

const DetailScreen = () => {
  const route = useRoute();
  const {item} = route.params;

  return <WebView originWhitelist={['*']} source={{uri: item.show.url}} />;
};

export default DetailScreen;
