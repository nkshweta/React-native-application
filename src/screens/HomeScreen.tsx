import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../components/styles';
import {API_FOR_DATA} from '../components/util';

// This screen  shows the saerch bar and the list of all the series by default. User can filter the listbased on the name search..

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [wishList, setWishList] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    fetch(API_FOR_DATA)
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
        const itemShowName =
          item && item.show.name
            ? item.show.name.toUpperCase()
            : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemShowName.indexOf(textData) > -1;
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

  const updateWishList = (showId: string) => {
    var currentWishList = wishList;
    if (showId) {
      // Get the selected show from masterDataSource and update wishList..
      const newData = masterDataSource.filter(function (item: any) {
        return item && item.show && item.show.id && item.show.id === showId;
      });
      if (!currentWishList.includes(newData[0])) {
        currentWishList.push(newData[0]);
        setWishList(currentWishList);
      }
    }
  };

  const renderListItems = (item: any) => {
    var item = item.item;
    return (
      <View style={styles.container}>
        <View>
          <Pressable
            onPressIn={() => {
              updateWishList(item.show.id);
            }}>
            <Text style={styles.item}>Name: {item.show.name}</Text>

            <Image
              source={require('../images/wishlist.png')}
              style={styles.imageView}
            />
          </Pressable>
        </View>
        <View style={styles.detailsLink}>
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                item: item,
              });
              // Set search text to blank
              // Update FilteredDataSource with masterDataSource
              setFilteredDataSource(masterDataSource);
              setSearch('');
            }}>
            <Text style={styles.subItemText}>Click here for details..</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  function renderShows(showlist: any) {
    var shownames = '';
    for (const show of showlist) {
      shownames = shownames + '\n' + show.show.name;
    }
    return shownames;
  }

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
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert(
            'Show names from the Wish list....',
            renderShows(wishList),
          );
        }}>
        <Text style={styles.buttonText}>Wishlist</Text>
      </TouchableOpacity>
      <FlatList data={filteredDataSource} renderItem={renderListItems} />
    </View>
  );
};

export default HomeScreen;
