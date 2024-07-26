import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  titleText: {
    color: '#000',
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  mageStyle: {
    height: 80,
    width: 80,
  },
});

export default styles;
