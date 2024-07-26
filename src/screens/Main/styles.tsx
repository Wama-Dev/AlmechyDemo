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
  smallText: {
    color: '#000',
    fontSize: 14,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginStart: 10,
    marginEnd: 10,
  },
  mageStyle: {
    height: 80,
    width: 80,
  },
  pagerView: {
    flex: 1,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorView: {
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorDotsView: {
    height: 15,
    width: 15,
    margin: 5,
    borderRadius: 50,
  },
});

export default styles;
