/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MAPURLS } from '../../App';
import { getData } from '../Utils/LocalStrorage';
import {SystemTime} from '../Utils/SytemTime';

export const LinkSystemChat = ({linkUrl, answer, text}: any) => {
  const [markIcon, setMarkIcon] = useState<string>('bookmark-o');
  const [check, setCheck] = useState<boolean>(true);

  useEffect(()=>{
    console.log(text);
    getBookMarkByID();
  },[]);

  const getBookMarkByID = async ()=>{
    const accountData = await getData('account_info');
    const getBookMark:any[] = await (await axios.post(`${MAPURLS}/bookmark`, {
      'id' : accountData,
    })).data;
    const chatBookMarkTagData = getBookMark.map((value)=>{return value.tag;});
    const chatBookMarkPicketData = getBookMark.map((value) => {return value.picket;});

    if (chatBookMarkTagData.includes(text)) {
      const index = chatBookMarkTagData.indexOf(text);
      if (chatBookMarkPicketData[index] === 'Map'){
        setMarkIcon('bookmark');
        setCheck(false);
      }
      else {
        setMarkIcon('bookmark-o');
        setCheck(true);
      }
    }
    else
    {
      setMarkIcon('bookmark-o');
      setCheck(true);
    }
  };

  const BookMarkSave = async () => {
    if (check === false){
      return;
    }

    setMarkIcon('bookmark');
    const accountData = await getData('account_info');
    console.log(text);
    console.log(accountData);
    await axios.post(`${MAPURLS}/bookmark/createbookmark`, {
        id: accountData,
        tag: text,
        picket: 'Chat',
      });
    setCheck(false);
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
        <TouchableOpacity onPress={() => BookMarkSave()}>
                    <Icon
                    color={'black'}
                      name={markIcon}
                      size={35}
                      style={{marginTop:50, marginLeft:20}} />
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
            Linking.openURL(linkUrl);
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
            이동
          </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <SystemTime />
    </>
  );
};
