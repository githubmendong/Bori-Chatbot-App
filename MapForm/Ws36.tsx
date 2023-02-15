/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {View} from 'react-native';
import React, {useRef} from 'react';
import KMap from './K_Map/KMap';
import Direction from './K_Map/Direction';

export const Ws36 = (map:any)=>{
  const webviewRef:any = useRef();

  return (
    <View style={{flex: 1}}>
      <KMap webviewRef={webviewRef} map={map}/>
      <Direction webviewRef={webviewRef} />
    </View>
  );
};
