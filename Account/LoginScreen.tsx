/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image,  Text,  TextInput, TouchableOpacity, View} from 'react-native';
import { MAPURLS, setNumber } from '../App';
import { getData, storeData } from '../chatbot-src/Utils/LocalStrorage';
export const LoginScreen = () => {
  const [id, setID] = useState<string>('');
  const [pw, setPW] = useState<string>('');
  const [state, setState] = useState<boolean>(false);

  const checkLocal = async ()=>{
    const data = await getData('account_info');
    if (data === undefined){
      setState(true);
      return;
    }
    else {
      setNumber(1);
      setState(true);
    }
  };

  const login = async ()=>{
    const isEnableLogin = await (await axios.post(`${MAPURLS}/account/login`, {
      'id':id,
      'pw':pw,
    })).data;

    if (isEnableLogin === false){
      Alert.alert('', '정보를 다시 입력해주세요.', [
        {
          text: 'Ok',
          onPress: () => {},
          style: 'cancel',
        },
      ]);
    } else {
      storeData('account_info', id);
      setNumber(1);
    }
  };

  useEffect(()=>{
    checkLocal();
  },[]);

  return (
    <>
      {state === false ? 
    <ActivityIndicator color="black" size="large" /> 
    : 
    <>
    <View style={{
      alignItems: 'center',
      }}>
        <Image
        source={{uri:'https://wsggbucket.s3.ap-northeast-2.amazonaws.com/Bori1.png'}}
        style={{height: 150, width: 150,marginTop: 50}}
        />
        <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
        }}>
          BORI
        </Text>
        <TextInput
        onChangeText={(value: string)=>{ setID(value); }}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          width: 300,
          height: 50,
          marginTop: 40,
        }}
        placeholder = "ID"
        />
        <TextInput
        onChangeText={(value: string)=>{ setPW(value); }}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          height: 50,
          width: 300,
          marginTop: 20,
        }}
        secureTextEntry={true}
        placeholder = "PASSWORD"
        />
        <TouchableOpacity 
        onPress={()=>{login();}}
        style={{
          marginTop: 50,
          borderRadius:5,
          width: 300,
          height: 50,
          backgroundColor: '#544fc1',
        }}>
          <Text style={{
            textAlign: 'center',
            marginTop: 15,
            fontWeight: 'bold',
            color: 'white',
          }}>
            Login
          </Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Text style={{fontWeight:'bold'}}>
            저희 보리 앱이 처음이시라구요?
          </Text>
          <TouchableOpacity onPress={()=>{setNumber(4);}} ><Text style={{color:'blue',fontWeight:'bold'}}> 회원가입하기</Text></TouchableOpacity>
        </View>
    </View>
  </>}
    </>
  );
};
