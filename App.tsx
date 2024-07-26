import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Main from './src/screens/Main';
import OTPVerification from './src/screens/OTPVerification';
import AddProduct from './src/screens/AddProduct';
import DetailProduct from './src/screens/DetailProduct ';
const Stack = createNativeStackNavigator();

const App: React.FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'Splash'}
        component={Splash}
      />

      <Stack.Screen
        options={{headerShown: false}}
        name={'OTPVerification'}
        component={OTPVerification}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'Main'}
        component={Main}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'AddProduct'}
        component={AddProduct}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'DetailProduct'}
        component={DetailProduct}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
