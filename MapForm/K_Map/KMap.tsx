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

export let _temp: string;
export let setTemp: any;

function KMap({webviewRef}: any) {
  const [state, setState] = useState<boolean>(true);
  const [name, setName] = useState<string>();
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  [_temp, setTemp] = useState<string>('');

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
          setData(getData);
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
    const d_title: string = _temp;
    if (d_title !== '') {
      send_screen(d_title);
    }
    setTemp('');
  }, [_temp]);

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

  return (
    <>
      <WebView
        onMessage={handleOnMessage}
        source={{uri: 'file:///android_asset/kakaomap.html'}}
        ref={handleSetRef}
        allowFileAccess={true}
        onLoadEnd={sendMessage}
      />
      <S webviewRef={webviewRef} _state={state} />
      <Screen _state={open} _name={name} />
    </>
  );
}

export default KMap;
