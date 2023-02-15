/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import { Chatting } from './chatbot-src/Chatting';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import { Ws36 } from './MapForm/Ws36';
import { Tabs } from './Tabs';
import axios from 'axios';
import { LoginScreen } from './Account/LoginScreen';
import { SignUpScreen } from './Account/SignUpScreen';
import {View} from 'react-native';


export let setNumber:React.Dispatch<React.SetStateAction<number>>;
export let number: number;

export const MAPURLS = 'http://ec2-43-200-123-255.ap-northeast-2.compute.amazonaws.com:3000';
function App() {
  [number, setNumber] = useState<number>(0);
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
      {number === 1 ? <Home /> : number === 2 ? <Ws36 map={map}/> : number === 0 ? <LoginScreen/> : number === 4 ? <SignUpScreen/> :  <Chatting />}
    </View>
    <View >
      {number === 0 || number === 4 ? null : <Tabs  setNumber={setNumber} />}
    </View>
    </View>
  );
}

export default App;
