/* eslint-disable prettier/prettier */
/* eslint-disable no-array-constructor */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */

import {useCallback, useEffect, useState} from 'react';
import {Linking} from 'react-native';
import WebView from 'react-native-webview';
import Geolocation from 'react-native-geolocation-service';
import {Screen} from './Screen';
import Search from './Search';
import {getKeyword, setKeyword} from '../../chatbot-src/ChatForm/BtnSystemChat';

export let _temp: string;
export let setTemp: any;

function KMap({webviewRef, map}: any) {
  const AR_LINK = 'ggapp://action?data=0';
  const AR_LINK_QR = 'ggapp://action?data=1';
  const [state, setState] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [a, setA] = useState<boolean>(false);
  const data: any = map.map;
  [_temp, setTemp] = useState<string>('');
  const handleOnMessage = (e: any) => {
    if (e.nativeEvent.data === 'true' || e.nativeEvent.data === 'false') {
      const _state = e.nativeEvent.data;
      setState(_state);
    } else if (e.nativeEvent.data === 'ar') {
      AR();
    }
    else if (e.nativeEvent.data === 'qr') {
      QR();
    }
    else {
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
      setA(true);

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

  const QR = useCallback(async () => {
    try {
      await Linking.openURL(AR_LINK_QR);
    } catch (error) {
      console.log(error);
    }
  },[]);

  const AR = useCallback(async () => {
    try {
      await Linking.openURL(AR_LINK);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const send_screen = async (d_title: any) => {
    const latlng = new Array();
    for (let i of data) {
      if ((i.name.split(' '))[0] === d_title) {
        const _data = {
          picket: 'location',
        };
        latlng.push(_data);
        latlng.push(i);
      }
    }

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
    if (a)
    {
      const d_title: string = getKeyword();
      console.log(d_title);
      if (d_title !== '') {
        setTimeout(() => send_screen(d_title), 1000);
      }
      setKeyword('');
    }
  }, [a]);

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
