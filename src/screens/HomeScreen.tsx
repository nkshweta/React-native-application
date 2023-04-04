import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, FlatList, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../components/styles';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch('http://api.tvmaze.com/search/shows?q=postman')
      .then((response: any) => response.json())
      .then((responseJson: any) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text: string) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the data from masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item: any) {
        // Applying filter for the inserted text in search bar
        const itemData =
          item && item.show.name
            ? item.show.name.toUpperCase()
            : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const renderListItems = (item: any) => {
    var item = item.item;
    return (
      <Pressable
        onPress={() =>
          navigation.navigate('Details', {
            name: item && item.show && item.show.name ? item.show.name : '',
          })
        }>
        <View style={styles.container}>
          <Text style={styles.item}>Name: {item.show.name}</Text>
          <Text style={styles.item}>Genre: {item.show.genres}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.homeContainer}>
      <TextInput
        style={styles.searchBar}
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search TV series Here."
      />
      <View style={styles.seperator} />
      <FlatList data={filteredDataSource} renderItem={renderListItems} />
    </View>
  );
};

export default HomeScreen;
