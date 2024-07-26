// AddProduct.tsx
import React from 'react';
import {Text, StyleSheet, ScrollView, Image, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Header from '../../Component/Header';

type RootStackParamList = {
  DetailProduct: {product: any};
};

type DetailProductRouteProp = RouteProp<RootStackParamList, 'DetailProduct'>;

const DetailProduct: React.FC = () => {
  const route = useRoute<DetailProductRouteProp>();
  const navigation = useNavigation();
  const {product} = route.params;
  const handleBackPress = () => {
    console.log('Back button pressed');
    navigation.goBack();
    // Handle the back action, e.g., navigate to the previous screen
  };
  return (
    <View style={styles.maincontainer}>
      <Header
        title="Add Product"
        showBackImage={true}
        onBackPress={handleBackPress}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{uri: product.image}} style={styles.image} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <View style={styles.rating}>
          <Text>
            Rating: {product.rating === undefined ? '0' : product.rating.rate}
          </Text>
          <Text>
            Count: {product.rating === undefined ? '0' : product.rating.count}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  category: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DetailProduct;
