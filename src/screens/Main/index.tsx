/* eslint-disable @typescript-eslint/no-shadow */
// ProductList.tsx
import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Button,
} from 'react-native';
import axios from 'axios';
import {Product} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../../Component/Header';
export type RootStackParamList = {
  AddProduct: undefined;
  DetailProduct: {product: any};
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailProduct'>;

const Main: FC<ScreenProps> = props => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>(
          'https://fakestoreapi.com/products',
        );
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const OpenDetails = (item: any) => {
    props.navigation.navigate('DetailProduct', {product: item});
  };
  const getTotalPrice = (): number => {
    return products.reduce((total, product) => total + product.price, 0);
  };
  const handleBackPress = () => {
    console.log('Back button pressed');
    // Handle the back action, e.g., navigate to the previous screen
  };
  return (
    <View style={styles.productMainConatiner}>
      <Header
        title="Product List"
        showBackImage={false}
        onBackPress={handleBackPress}
      />
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => OpenDetails(item)}>
            <Image source={{uri: item.image}} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.title}>
        Total Price of All Products: ${'' + getTotalPrice().toFixed(2)}
      </Text>
      <Button
        title="Add product"
        onPress={() => props.navigation.navigate('AddProduct')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  productMainConatiner: {
    flex: 1,
    width: '100%',
  },
  productContainer: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  productDescription: {
    fontSize: 12,
    color: '#555',
  },
});

export default Main;
