/* eslint-disable prettier/prettier */
/* eslint-disable no-return-assign */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Scroll } from './components/Scroll';
import { BackHandler, PermissionsAndroid, ToastAndroid } from 'react-native';
import { Bori } from '../MapForm/K_Map/Bori';

const Home = () => {
  const toastWithDurationHandler = () => {
    ToastAndroid.show("'뒤로' 버튼을  한번 더 누르시면 종료됩니다.", ToastAndroid.SHORT);
  };

  let time = 0; // 맨트 노출 시간
  const onAndroidBackPress = () => {
      time += 1;
        toastWithDurationHandler(); // 뒤로가기 토스트 바
      if (time === 1) {
        setTimeout(() => time = 0, 2000);
      }
      else if (time === 2) {
        BackHandler.exitApp(); // 어플 종료
        return false;
      }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onAndroidBackPress);
    };
  }, []);

  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ]);
  }, []);
  return (
    <>
    <Scroll/>
    <Bori/>
    </>
  );
};

export default Home;
