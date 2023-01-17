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
  TouchableOpacity
} from 'react-native';
import {MenuButtons} from '../Utils/MenuButtons';
import {SystemTime} from '../Utils/SytemTime';

export const IntroSystemChat = ({setText}:any) => {
  return (
    <>
      <View
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          flexDirection: 'row',
          marginTop: 15,
        }}>
        <Image
          style={{height: 110, width: 110}}
          source={require('../assets/Bori2.png')}
        />
        <View style={{
          borderColor: '#f7f6f7', 
          borderWidth: 1, 
          borderRadius: 15,
          backgroundColor: '#f7f7ff',
          shadowColor: 'black',
        shadowOffset: {
          width: 20,
          height: 20,
        },
        shadowOpacity: 1,
        elevation: 10,
      }}>
          <Text style={{fontSize: 20, margin: 10,  color: 'black', fontWeight: '900'}}>보리</Text>
          <Text style={{marginTop: 30, fontSize: 15, margin: 10, color: 'black', fontWeight: '500' }}>
            안녕하세요😀저는 우송대학교{'\n'}
            챗봇 보리예요!{'\n'}
            궁금한 것을 물어보세요!{'\n'}
            {'\n'}
            ✔홈페이지 공지사항{'\n'}
            ✔도서관{'\n'}
            ✔Myiweb {'\n'}
            ✔e-class{'\n'}
            최선을 다해 답변해드릴게요😏{'\n'}
            {'\n'}
          </Text>
        </View>
      </View>
      <TouchableOpacity
      activeOpacity = {1}
      style={{
        borderRadius: 20,
        backgroundColor: 'white',
        margin: 5,
        borderWidth: 1,
        borderColor: '#c7c7c7',
        shadowColor: 'black',
        shadowOffset: {
          width: 20,
          height: 20,
        },
        shadowOpacity: 1,
        elevation: 10,
        marginHorizontal: 40,
      }
    
    }
      >
        <MenuButtons setText={setText} />
      </TouchableOpacity>
      <SystemTime />
    </>
  );
};
