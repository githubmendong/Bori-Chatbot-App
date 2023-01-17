/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {SystemTime} from '../Utils/SytemTime';

export const SystemMealChat = () => {
  return (
    <>
      <View
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          marginTop: 30,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/Bori1.png')}
          style={{height: 80, width: 80}}
        />
        <Text style={{fontSize: 20, marginTop: 15}}>보리</Text>
      </View>
      <View>
        <Text style={{marginLeft: 35, fontSize: 50}}>식단</Text>
      </View>
      <SystemTime />
    </>
  );
};
