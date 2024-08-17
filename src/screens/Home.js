import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import {Items} from '../database/Database';
import SectionHeader from '../components/SectionHeader';
export default function Home() {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  useEffect(() => {
    getDataFromDB();
  }, []);

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];

    for (let index = 0; index < Items.length; index++) {
      // database de bulunan verinin kategorisi product ise bunu productList dizisine ekle
      if (Items[index].category === 'product') {
        productList.push(Items[index]);
      } else {
        // değilse accessoryList dizisine ekle
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.white} barStyle={'dark-content'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 26,
              color: Colors.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            Hi-Fi Shop &amp; Service
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Audio shop on Rustaveli Ave 57.
            {'\n'}This shop offers both products and services
          </Text>
        </View>
        <View style={{padding: 16}}>
          <SectionHeader title={'Products'} count={'41'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
            }}>
            {products.map(data => (
              <ProductCard key={data.id} data={data} />
            ))}
          </View>
        </View>
        <View style={{padding: 16}}>
          <SectionHeader title={'Accessories'} count={'78'} />
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => (
              <ProductCard data={data} key={data.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.white, width: '100%', height: '100%'},
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 16,
  },
});