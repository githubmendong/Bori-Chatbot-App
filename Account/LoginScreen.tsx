/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image,  Text,  TextInput, TouchableOpacity, View} from 'react-native';
import { setNumber } from '../App';
export const LoginScreen = () => {
  return (
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
        <TextInput style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          width: 300,
          height: 50,
          marginTop: 40,
        }}
        placeholder = "ID"
        />
        <TextInput style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          height: 50,
          width: 300,
          marginTop: 20,
        }}
        placeholder = "PASSWORD"
        />
        <TouchableOpacity style={{
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
          <TouchableOpacity onPress={()=>{setNumber(3);}} ><Text style={{color:'blue',fontWeight:'bold'}}> 회원가입하기</Text></TouchableOpacity>
        </View>
    </View>
  </>
  );
};
