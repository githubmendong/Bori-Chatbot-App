/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, {useEffect, useState} from 'react';

import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MAPURLS, setNumber } from '../../App';
import {setTemp} from '../../MapForm/K_Map/KMap';
import { setSelectedTab } from '../../Tabs';
import { getData } from '../Utils/LocalStrorage';
// import { NAVIGATIONDATA } from '../Chatting';
import {SystemTime} from '../Utils/SytemTime';

let KEYWORD:string = '';
export const setKeyword = (text: string): void=>{
  KEYWORD = text;
};

export const getKeyword = (): string=>{
  return KEYWORD;
};

export const BtnSystemChat = ({keyword, answer}: any) => {
  const moveActivity = async ()=>{
    await setKeyword(keyword);
    setNumber(2);
    setSelectedTab(1);
  };

  const BookMarkSave = async () => {
    const accountData = await getData('account_info');
    await axios.post(`${MAPURLS}/bookmark/createbookmark`, {
        id: accountData,
        tag: keyword,
        picket: 'Chat',
      });
  };

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
        <TouchableOpacity onPress={()=>{BookMarkSave();}}>
        <View style={{
            marginLeft: 10,
            marginTop: 40,
            paddingVertical: 15,
            paddingHorizontal: 10,
            backgroundColor: '#39407f',
            borderRadius: 30,
            }}>
          <Text style={{color:'white'}}>북마크</Text>
        </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        activeOpacity={1}
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
          marginLeft: 30,
        }}>
        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            borderColor: 'black',
            borderWidth: 1,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>        
        <Text style={{fontSize:15,lineHeight:24, color: 'black'}}>
          {answer}
        </Text>
        <TouchableOpacity 
        onPress={()=> {
          moveActivity();
        }}
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          borderColor: '#544fc1',
          borderWidth: 2,
          marginTop: 30,
          paddingTop: 5,
          paddingBottom: 5,
        }}>
          <Text 
          style={{
            alignItems: 'center',
            textAlign: 'center',
            color: '#544fc1',
          }}
          >
            지도로 가기
          </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <SystemTime />
    </>
  );
};
