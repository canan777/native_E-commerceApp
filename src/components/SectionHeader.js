import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../themes/Colors';

export default function SectionHeader({title, count}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: 18,
            color: Colors.black,
            fontWeight: '500',
            letterSpacing: 1,
          }}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            color: Colors.black,
            opacity: 0.5,
            marginLeft: 10,
          }}>
          {count}
        </Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 14,
            color: Colors.blue,
            fontWeight: '400',
          }}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
}