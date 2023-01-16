/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Chatting } from './chatbot-src/Chatting';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home/Home';
import { useEffect, useState } from 'react';
import { Ws36 } from './MapForm/Ws36';
// ㅌ체스트
let GLOBALSTR:boolean;
let SETGBSTR:any;
export const changeGlobalStr = ()=>{
  SETGBSTR(GLOBALSTR = !GLOBALSTR);
};

function App() {
  [GLOBALSTR,SETGBSTR] = useState<boolean>(false);
  const [data,setData] = useState<any>('flex');

  useEffect(()=>{
    setData(data === 'none' ? 'flex' : 'none');
    console.log(data);
  },[GLOBALSTR]);

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Map" component={Ws36} />
      <Tab.Screen name="Chat" component={Chatting} options={{tabBarStyle:{display:data}}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
