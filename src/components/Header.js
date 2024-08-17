import { View, Text,TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors } from '../themes/Colors'
import { useNavigation } from '@react-navigation/native'

export default function Header() {
    const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
    <TouchableOpacity>
       <Entypo 
       name="shopping-bag" 
       style={{
        fontSize: 18,
        color: Colors.backgroundMedium,
        backgroundColor: Colors.backgroundLight,
        padding: 12,
        borderRadius: 10,
       }} 
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() =>navigation.navigate('MyCart')}>
      <MaterialCommunityIcons 
      name="cart" 
      style={{
        fontSize: 18,
        color: Colors.backgroundMedium,
        padding: 12,
        borderRadius: 10,
        borderWidht: 1,
        borderColor: Colors.backgroundLight,
       }} 
       />
    </TouchableOpacity>
  </View>
  )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 16,
      },
});