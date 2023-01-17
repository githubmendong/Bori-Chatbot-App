/* eslint-disable prettier/prettier */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { GBBOOLCH } from '../Chatting';
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  primary: {
    width: 80,
    height: 60,
    backgroundColor: '#f7f7ff',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
  boxst: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
  },
  textsty:{
    fontSize: 10, 
    fontWeight: '900',
    color: '#39407f',
  },
});

export const MenuButtons = ({setText}:any) => {
  return (
    <View style={styles.boxst}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.primary} onPress={()=>{
          setText('학사일정');
          GBBOOLCH();
        }} >
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/3634/3634595.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>학사일정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primary}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6645/6645864.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>맵 이동</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primary}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5770/5770006.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>식단</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.primary}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/6404/6404136.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>장학일정</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primary}>
          <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/5126/5126147.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
            <Text style={styles.textsty}>교내 전화</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primary}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/207/207190.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>도서관이용</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.primary}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2516/2516414.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>등록금</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primary}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/2813/2813245.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>수강신청</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.primary}>
        <ImageBackground
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/9096/9096833.png',
              }} 
                style={{
                  width: 30,
                  height:30,
                }}
              />
          <Text style={styles.textsty}>휴학</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
