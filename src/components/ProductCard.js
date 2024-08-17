import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import React from 'react';
import {Colors} from '../themes/Colors';
import {useNavigation} from '@react-navigation/native';

export default function ProductCard({data}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{width: '48%', marginVertical: 14}}
      onPress={() => navigation.navigate('ProductInfo', {productID: data.id})}>
      <View style={styles.cart}>
        {data.isOff && (
          <View style={styles.bgOffset}>
            <Text style={styles.textOffPercent}>{data.offPercentage}%</Text>
          </View>
        )}
        <Image
          source={data.productImage}
          style={styles.cartImage}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.productText}>{data.productName}</Text>

      <Text style={{color: Colors.black, opacity: 0.7}}>
        {data.productPrice} ₺
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  cart: {
    backgroundColor: Colors.backgroundLight,
    position: 'relative',
    height: 100,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cartImage: {
    width: '80%',
    height: '80%',
  },
  textOffPercent: {
    fontSize: 12,
    color: Colors.white,
  },
  bgOffset: {
    backgroundColor: Colors.green,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '20%',
    height: '24%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  productText: {
    fontSize: 12,
    color: Colors.black,
    fontWeight: '600',
    marginVertical: 2,
  },
});