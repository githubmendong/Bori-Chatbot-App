/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import {Image} from '@rneui/base';
import {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export let selectedTab: number;
export let setSelectedTab: (arg0: number) => void;

export const Tabs = ({setNumber}: any) => {
  [selectedTab, setSelectedTab] = useState(2);

  return (
    <View
      style={{
        backgroundColor: '#ebeced',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        onPress={() => {
          setNumber(2);
          setSelectedTab(1);
        }}
        style={{
          paddingHorizontal: selectedTab === 1 ? 70 : 15,
          marginTop: 3,
          borderRadius: 50,
          marginBottom: 3,
          borderWidth: 1,
          backgroundColor: selectedTab === 1 ? '#17263E' : 'white',
          // backgroundColor:"#005826",
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          shadowOffset: {
            width: 10,
            height: 10,
          },

          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/5304/5304955.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setNumber(1);
          setSelectedTab(2);
        }}
        style={{
          paddingHorizontal: selectedTab === 2 ? 70 : 15,
          marginTop: 3,
          borderRadius: 50,
          marginBottom: 3,
          borderWidth: 1,
          marginRight: 20,
          marginLeft: 20,
          backgroundColor: selectedTab === 2 ? '#17263E' : 'white',
          // backgroundColor:'#0e4e96',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          shadowOffset: {
            width: 10,
            height: 10,
          },

          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4481/4481380.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setNumber(3);
          setSelectedTab(3);
        }}
        style={{
          paddingHorizontal: selectedTab === 3 ? 70 : 15,
          marginTop: 3,
          borderRadius: 50,
          marginBottom: 3,
          borderWidth: 1,
          backgroundColor: selectedTab === 3 ? '#17263E' : 'white',
          // backgroundColor:'#B73E3E',
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          shadowOffset: {
            width: 10,
            height: 10,
          },

          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 30,
            height: 30,
          }}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/9292/9292632.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
