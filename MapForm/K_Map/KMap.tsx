/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable keyword-spacing */
/* eslint-disable no-array-constructor */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useCallback, useEffect, useState} from 'react';
import {Alert, Dimensions, Linking, SectionList, Text} from 'react-native';
import WebView from 'react-native-webview';
import {PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Bori from './Bori';
import {Screen} from './Screen';
import Search from './Search';
import {getKeyword, setKeyword} from '../../chatbot-src/ChatForm/BtnSystemChat';

export let _temp: string;
export let setTemp: any;

function KMap({webviewRef, map}: any) {
  const AR_LINK = 'gg://ar';
  const AR_WEB_LINK = 'https://www.instagram.com/weon.yeom';
  const [state, setState] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const data: any = map.map;
  [_temp, setTemp] = useState<string>('');
  const handleOnMessage = (e: any) => {
    if (e.nativeEvent.data === 'true' || e.nativeEvent.data === 'false') {
      const _state = e.nativeEvent.data;
      setState(_state);
    } else if (e.nativeEvent.data === 'ar') {
      AR();
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
      const list = new Array();

      list.push({
        picket: 'marker',
      });

      for (let temp of data) {
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

  const AR = useCallback(async () => {
    // 만약 어플이 설치되어 있으면 true, 없으면 false
    const supported = await Linking.canOpenURL(AR_LINK);

    if (supported) {
      // 설치되어 있으면
      await Linking.openURL(AR_LINK);
    } else {
      // 앱이 없으면
      await Linking.openURL(AR_WEB_LINK);
    }
  }, []);

  const send_screen = async (d_title: any) => {
    const latlng = new Array();
    for (let i of data) {
      if (i.tag.includes(d_title)) {
        const _data = {
          picket: 'location',
        };
        latlng.push(_data);
        latlng.push(i);
      }
    }
    console.log(latlng);

    const sendData = JSON.stringify(latlng);
    await webviewRef.current.postMessage(sendData);
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

  useEffect(() => {
    const d_title: string = getKeyword();
    console.log(d_title);
    if (d_title !== '') {
      setTimeout(() => send_screen(d_title), 1000);
    }
    setKeyword('');
  }, [_temp]);

  return (
    <>
      <WebView
        onMessage={handleOnMessage}
        source={{uri: 'file:///android_asset/kakaomap.html'}}
        ref={handleSetRef}
        allowFileAccess={true}
        onLoadEnd={sendMessage}
      />
      <Screen _state={open} _name={name} map={data} />
      <Search webviewRef={webviewRef} _state={state} map={data} />
    </>
  );
}

export default KMap;
