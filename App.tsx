/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Chatting } from './chatbot-src/Chatting';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import { Ws36 } from './MapForm/Ws36';
import { Text, TouchableOpacity, View } from 'react-native';
import { Tabs } from './Tabs';
import axios from 'axios';
import Bori from './MapForm/K_Map/Bori';


export let setNumber:React.Dispatch<React.SetStateAction<number>>;
export let number: number;

export const MAPURLS = 'https://48e6-220-68-223-111.jp.ngrok.io';
function App() {
  [number, setNumber] = useState<number>(1);

  const [map, setMap] = useState<any[]>([]);

  const getMapData = async ()=>{
    try {
      let getData: any;
      
      getData = (await axios.get(`${MAPURLS}/borimap`)).data;
      setMap(getData);
    }
    catch (error) {}
  };

  useEffect(() => {
    getMapData();
  }, []);


  return (
    <View style={{flex:1}}>
    <View style={{flex:1}}>
      {number === 1 ? <Home /> : number === 2 ? <Ws36 map={map}/> : <Chatting />}
    </View>
    <View ><Tabs  setNumber={setNumber} />
    <Bori/>
    </View>
    </View>
  );
}

export default App;
