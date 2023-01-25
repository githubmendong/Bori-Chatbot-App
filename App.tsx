/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Chatting } from './chatbot-src/Chatting';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import { MAPURLS, Ws36 } from './MapForm/Ws36';
import { Text, TouchableOpacity, View } from 'react-native';
import { Tabs } from './Tabs';
import axios from 'axios';
// import { ChatStack, HomeStack, MapStack } from './Stacks';
let GLOBALSTR:boolean;
let SETGBSTR:any;
export const changeGlobalStr = ()=>{
  SETGBSTR(GLOBALSTR = !GLOBALSTR);
};
export let setNumber:React.Dispatch<React.SetStateAction<number>>;
export let number: number;
export let data: string;
export let setData: React.Dispatch<React.SetStateAction<string>>;
// 12
function App() {
  [GLOBALSTR,SETGBSTR] = useState<boolean>(false);
  [data,setData] = useState<string>('none');
  [number, setNumber] = useState<number>(1);
  useEffect(()=>{
    setData(data === 'none' ? 'flex' : 'none');
  },[GLOBALSTR]);
  const [map, setMap] = useState<any[]>([]);

  const getMapData = async ()=>{
    try {
      let getData: any;
      
      getData = (await axios.get(`${MAPURLS}/borimap`)).data
      setMap(getData);
    }
    catch(error) {}
  }

  useEffect(() => {
    getMapData()
  }, [])


  return (
    <View style={{flex:1}}>
    <View style={{flex:1}}>
      {number === 1 ? <Home /> : number === 2 ? <Ws36 map={map}/> : <Chatting />}
    </View>
    <View >
      {data === 'none' ? null : <Tabs setData={setData} setNumber={setNumber} />}
    </View>
    </View>
  );
}

export default App;


// const Tab = createBottomTabNavigator();
{/* <NavigationContainer>
<Tab.Navigator screenOptions={{ headerShown: false }} >
  <Tab.Screen name="Home" component={HomeStack} />
  <Tab.Screen name="Map" component={MapStack} />
  <Tab.Screen name="Chat" component={ChatStack} options={{tabBarStyle:{display:data}}} />
</Tab.Navigator>
</NavigationContainer> */}