/* eslint-disable prettier/prettier */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

export const SuggestedSearch = ({topSearch, suggestedAddChatting}: any) => {
  return (
    <ScrollView
    horizontal={true}
    >
    <View
    style={{
      backgroundColor: '#f7f6f7',
      paddingVertical: 5,
    }}>
      {false ? (
        <ActivityIndicator color="white" size={20} />
      ) : (
        <View style={{alignItems: 'center', alignContent: 'center' ,flexDirection: 'row'}}>
          <View style={{marginBottom:40}} />
          <TouchableOpacity
            style={{
              padding: 2,
              paddingHorizontal: 40,
              marginTop: 5,
              marginBottom: 5,
              marginRight: 5,
              borderRadius: 8,
              backgroundColor: '#4b518a',
              borderWidth: 1,
              borderColor: '#c7c7c7',
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              shadowOffset: {
                width: 10,
                height: 10,
              },
              elevation: 5,
              alignItems: 'center',
            }}
            onPress={() => {
              suggestedAddChatting(topSearch[0]);
            }}>
            <Text style={{fontSize: 15,color : '#f7f6f7'}}>{topSearch[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 40,
              margin: 5,
              borderRadius: 8,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#c7c7c7',
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              shadowOffset: {
                width: 10,
                height: 5,
              },
              alignItems: 'center',
              elevation: 5,
            }}
            onPress={() => {
              suggestedAddChatting(topSearch[1]);
            }}>
            <Text style={{fontSize: 15}}>{topSearch[1]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingHorizontal: 40,
              margin: 5,
              borderRadius: 8,
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: '#c7c7c7',
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              shadowOffset: {
                width: 10,
                height: 10,
              },
              alignItems: 'center',
              elevation: 5,
            }}
            onPress={() => {
              suggestedAddChatting(topSearch[2]);
            }}>
            <Text style={{fontSize: 15}}>{topSearch[2]}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
      </ScrollView>
  );
};
