/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {SystemTime} from '../Utils/SytemTime';

export const SystemErrorChat = () => {
  return (
    <>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../assets/Bori1.png')}
          style={{height: 80, width: 80}}
        />
        <Text style={{fontSize: 20, marginTop: 50}}>보리</Text>
      </View>
      <TouchableOpacity
            activeOpacity = {1}
            style={{
              borderTopRightRadius: 30,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
              backgroundColor: 'white',
              margin: 5,
              borderWidth: 1,
              borderColor: '#c7c7c7',
              shadowOpacity: 0.75,
              shadowRadius: 3.84,
              elevation: 5,
              marginHorizontal: 40,
              marginRight: 150,
              marginLeft: 30,
            }
          }
      >
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 10,
          flexDirection: 'row',
          borderColor: 'black',
          borderWidth: 1,
          borderTopRightRadius: 30,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
        }}>
        <Text>왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈왈.</Text>
      </View>
      </TouchableOpacity>
      <SystemTime />
    </>
  );
};

