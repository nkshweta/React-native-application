import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  item: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  subItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontStyle: 'normal',
    lineHeight: 16,
    letterSpacing: 0,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  detailsLink: {
    paddingLeft: 10,
    paddingBottom: 5,
  },
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
  imageView: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    width: 150,
    backgroundColor: 'grey',
    paddingBottom: 20,
    marginLeft: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFFFFF',
  },
});
