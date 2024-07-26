import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface HeaderProps {
  title: string;
  showBackImage: boolean;
  onBackPress: () => void;
}

const Header: React.FC<HeaderProps> = ({title, showBackImage, onBackPress}) => {
  return (
    <View style={styles.headerContainer}>
      {showBackImage && (
        <TouchableOpacity onPress={onBackPress}>
          <Image
            source={require('../../src/Images/back.png')}
            style={styles.backImage}
          />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backImage: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },
  title: {
    flex: 1,
    fontSize: 18,
    marginStart: 15,
    fontWeight: 'bold',
  },
});

export default Header;
