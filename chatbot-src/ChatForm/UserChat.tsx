/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {MenuButtons} from '../Utils/MenuButtons';
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
