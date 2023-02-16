/* eslint-disable prettier/prettier */

import AsyncStorage from '@react-native-async-storage/async-storage';


// {key:value} 형태로 데이터를 로컬에 캐시로 저장
export const storeData = async (key: string, value: any) => {
    try {
      const stringValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, stringValue);
    } catch (e: any) {
      console.error(e.message);
    }
  };

// key를 전달받아 key와 매칭되는 value를 찾음
export const getData = async (key: string) => {
    try {
    const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const data = JSON.parse(value);
        return data;
      }
    } catch (e: any) {
      console.log(e.message);
    }
  };

// getData와 비슷하지만 JsonString으로 변환하지 않고 문자열을 그대로 리턴
export const getOriginData = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
    } catch (e: any) {
      console.log(e.message);
    }
};

// key와 매칭되는 value를 제거
export const removeData = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e: any) {
      console.error(e.message);
    }
  };

// 키가 로컬에 저장되어 있는지 확인
export const containsKey = async (key: string) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys.includes(key);
    } catch (e: any) {
      console.error(e.message);
    }
  };
