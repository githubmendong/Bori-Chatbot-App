/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable keyword-spacing */
/* eslint-disable no-array-constructor */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useEffect, useState} from 'react';
import {Alert, Dimensions, SectionList, Text} from 'react-native';
import WebView from 'react-native-webview';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Bori from './Bori';
import {Screen} from './Screen';
import {URL} from '../Ws36';
import S from './S';

function KMap({webviewRef}: any) {
  const [state, setState] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const handleOnMessage = (e: any) => {
    if (e.nativeEvent.data === 'true' || e.nativeEvent.data === 'false') {
      const _state = e.nativeEvent.data;
      setState(_state);
    } else {
      const _str = e.nativeEvent.data;
      setOpen(current => !current);
      setName(_str);
    }
  };
  /** 웹뷰 ref */
  const handleSetRef = (_ref: any) => {
    webviewRef.current = _ref;
  };

  const sendMessage = async () => {
    try {
      let getData: any;

      await fetch(`${URL}/borimap`)
        .then(response => response.json())
        .then(data => {
          getData = data;
        });

      const list = new Array();

      list.push({
        picket: 'marker',
      });

      for (let temp of getData) {
        list.push(temp);
      }

      const sendData = JSON.stringify(list);
      await webviewRef.current.postMessage(sendData);
    } catch (error) {}
  };

  const send = async (latitude: any, longitude: any) => {
    try {
      const sendLoction = JSON.stringify([
        {
          picket: 'me',
        },
        {
          lat: latitude,
          lng: longitude,
        },
      ]);
      await webviewRef.current.postMessage(sendLoction);
    } catch (error) {}
  };

  useEffect(() => {
    const _watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        send(latitude, longitude);
      },
      error => {
        console.log(error);
      },
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
      },
    );
    return () => {
      if (_watchId) {
        Geolocation.clearWatch(_watchId);
      }
    };
  });

  return (
    <>
      <WebView
        onMessage={handleOnMessage}
        source={{uri: 'file:///android_asset/kakaomap.html'}}
        ref={handleSetRef}
        allowFileAccess={true}
        onLoadEnd={sendMessage}
      />
      {/* <Search webviewRef={webviewRef} state={state}/> */}
      <S webviewRef={webviewRef} _state={state} />
      {/* <Bori state={state}/> */}
      <Screen _state={open} _name={name} />
    </>
  );
}

export default KMap;
