import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {fontSize: 18, paddingHorizontal: 12, paddingVertical: 12},
  container: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#009690',
  },
  homeContainer: {flex: 1, paddingTop: 10},
  detailsContainer: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 5,
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
  seperator: {
    height: 2,
    width: '100%',
    paddingTop: 15,
  },
});
