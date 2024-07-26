/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect, FC} from 'react';
import {View, SafeAreaView, StatusBar, Animated} from 'react-native';
import styles from './styles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
export type RootStackParamList = {
  OTPVerification: undefined;
};
type ScreenProps = NativeStackScreenProps<RootStackParamList>;

const Splash: FC<ScreenProps> = props => {
  const [loadingProgress, setloadingProgress] = useState(new Animated.Value(0));
  const imageScale = {
    transform: [
      {
        scale: loadingProgress.interpolate({
          inputRange: [0, 10, 100],
          outputRange: [1, 0.8, 70],
        }),
      },
    ],
  };
  const startAnimation = () => {
    Animated.timing(loadingProgress, {
      toValue: 100,
      duration: 4000,
      useNativeDriver: true,
    }).start(() => {
      console.log('Animation DONE');
      // props.navigation.navigate('Introduction');
      props.navigation.reset({
        index: 0,
        routes: [{name: 'OTPVerification'}],
      });
    });
  };
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar
        backgroundColor={'#FFFFFF'}
        barStyle="dark-content"
        translucent
        hidden={true}
      />
      <View style={styles.sectionContainer}>
        <Animated.Image
          style={[styles.mageStyle, imageScale]}
          source={require('../../Images/demo.png')}
        />
      </View>
    </SafeAreaView>
  );
};
export default Splash;
