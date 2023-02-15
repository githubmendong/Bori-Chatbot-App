/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import {UserTime} from '../Utils/UserTime';

export const UserChat = ({text}: any) => {
  return (
    <View
      style={{
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        marginVertical: 10,
      }}>
      <View
        style={{
          paddingHorizontal: 10,
          backgroundColor: '#39407f',
          padding: 8,
          borderTopLeftRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          borderTopRightRadius: 5,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
        <Text style={{color:'white'}}>{text}</Text>
      </View>
      <UserTime />
    </View>
  );
};
