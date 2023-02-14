/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, ImageBackground,  Text,  TextInput, TouchableOpacity, View} from 'react-native';
import { MAPURLS, setNumber } from '../App';
export const SignUpScreen = () => {
  const [checkColor, setCheckColor] = useState<string>('#544fc1');
  const [check, setCheck] = useState<boolean>(false);
  const [id, setID] = useState<string>('');
  let password:string = '';
  let checkPassword:string = '';

  const checkID = async ()=>{
    if (check === true){
      return;
    }
    console.log(id);
    
    const getCheckResult = await (await axios.post(`${MAPURLS}/account/duplicateInspection`, {
      'id': id,
    })).data;

    if (getCheckResult === true){
      setCheck(true);
      setCheckColor('grey');
    }
    else {
      Alert.alert('', '이미 존재하는 ID', [
        {
          text: 'Ok',
          onPress: () => {},
          style: 'cancel',
        },
      ]);
    }    
  };

  const singUp = async ()=>{
    console.log(check);
    if (check === false){
      Alert.alert('', '아이디 중복 확인을 해주세요.', [
        {
          text: 'Ok',
          onPress: () => console.log('Ok'),
          style: 'cancel',
        },
      ]);
    }
    
    if (password !== checkPassword){
      Alert.alert('', '비밀번호가 일치하지 않습니다.', [
        {
          text: 'Ok',
          onPress: () => console.log('Ok'),
          style: 'cancel',
        },
      ]);
    }
    console.log("id" + id);
    const data = await axios.post(`${MAPURLS}/account/createAccount`,{
      'id': id,
      'pw': password,
    });
    console.log(data.data);
    setNumber(0);
  };

  return (
    <>
    <TouchableOpacity
    onPress={()=>{setNumber(0);}}
    style={{
      margin: 5,
    }}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/7629/7629334.png',
              }}
                style={{
                  width: 30,
                  height:30,
                }}
              />
        </TouchableOpacity>
    <View style={{
      alignItems: 'center',
      }}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 30,
        }}>
          BORI
        </Text>
        <View style={{
          flexDirection: 'row',
        }}>
        <TextInput 
        onChangeText={(text:string)=>{setID(text);}}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          width: 230,
          height: 50,
          marginTop: 40,
        }}
        placeholder = "ID"
        />
        <TouchableOpacity 
        onPress={()=>{checkID();}}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          width: 60,
          height: 50,
          marginLeft: 10,
          backgroundColor: checkColor,
          marginTop: 40,
        }}>
          <Text style={{
            alignSelf: 'center',
            marginTop: 12,
            color: 'white',
            fontWeight: 'bold',
          }}>
            중복확인
          </Text>
        </TouchableOpacity>
        </View>
        <TextInput 
        onChangeText={(text:string)=>{password = text;}}
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
        <TextInput 
        onChangeText={(text:string)=>{checkPassword = text;}}
        style={{
          borderColor: 'black',
          borderWidth: 1,
          borderRadius: 5,
          height: 50,
          width: 300,
          marginTop: 20,
        }}
        secureTextEntry={true}
        placeholder = "CHECK PASSWORD"
        />
        <TouchableOpacity 
        onPress={()=>{singUp();}}
        style={{
          marginTop: 40,
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
            Sign up
          </Text>
        </TouchableOpacity>
    </View>
  </>
  );
};
