// AddProduct.tsx
import React, {FC, useState} from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  ScrollView,
  View,
} from 'react-native';
import axios from 'axios';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '../../Component/Header';
export type RootStackParamList = {
  AddProduct: undefined;
  DetailProduct: {product: any};
};
type ScreenProps = NativeStackScreenProps<RootStackParamList, 'DetailProduct'>;

const AddProduct: FC<ScreenProps> = props => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleAddProduct = async () => {
    if (!title || !price || !description || !image || !category) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    const newProduct = {
      title,
      price: parseFloat(price),
      description,
      image,
      category,
    };

    try {
      const response = await axios.post(
        'https://fakestoreapi.com/products',
        newProduct,
      );
      if (response.status === 200 || response.status === 201) {
        props.navigation.goBack();
        Alert.alert('Success', 'Product added successfully');
        props.navigation.navigate('DetailProduct', {product: newProduct});
      } else {
        Alert.alert('Error', 'Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      Alert.alert('Error', 'An error occurred while adding the product');
    }
  };
  const handleBackPress = () => {
    console.log('Back button pressed');
    props.navigation.goBack();
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
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter product title"
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter product price"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter product description"
          multiline
        />

        <Text style={styles.label}>Image URL</Text>
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={setImage}
          placeholder="Enter product image URL"
        />

        <Text style={styles.label}>Category</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter product category"
        />

        <Button title="Add Product" onPress={handleAddProduct} />
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
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
});

export default AddProduct;
