/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import {Button, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import KMap from './K_Map/KMap';
import Direction from './K_Map/Direction';

export const MAPURL = 'https://3e8b-220-68-223-111.jp.ngrok.io';

export const Ws36 = (map:any)=>{
  const webviewRef:any = useRef();

  return (    
    <View style={{flex: 1}}>
      <KMap webviewRef={webviewRef} map={map}/>
      <Direction webviewRef={webviewRef}></Direction>
    </View>
  );
};
