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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { ChatStack, HomeStack, MapStack } from './Stacks';
let GLOBALSTR:boolean;
let SETGBSTR:any;
export const changeGlobalStr = ()=>{
  SETGBSTR(GLOBALSTR = !GLOBALSTR);
};

const Stack1 = createNativeStackNavigator();
export const HomeStack = ()=>{

    return (
      <Stack1.Navigator screenOptions={{ headerShown: false }} >
        <Stack1.Screen name="Home1" component={Home} />
        <Stack1.Screen name="MoveMap1" component={Ws36} />
        <Stack1.Screen name="Chat1" component={Chatting} />
      </Stack1.Navigator>
    );
};

const Stack2 = createNativeStackNavigator();
export const MapStack = ()=>{

    return (
      <Stack2.Navigator screenOptions={{ headerShown: false }} >
        <Stack2.Screen name="MoveMap2" component={Ws36} />
        <Stack2.Screen name="Home2" component={Home} />
        <Stack2.Screen name="Chat2" component={Chatting} />
      </Stack2.Navigator>
    );
};

const Stack3 = createNativeStackNavigator();
export const ChatStack = ()=>{

    return (
      <Stack3.Navigator screenOptions={{ headerShown: false }} >
        <Stack3.Screen name="Chat3" component={Chatting} />
        <Stack3.Screen name="MoveMap3" component={Ws36} />
        <Stack3.Screen name="Home3" component={Home} />
      </Stack3.Navigator>
    );
};

function App() {
  [GLOBALSTR,SETGBSTR] = useState<boolean>(false);
  const [data,setData] = useState<any>('flex');

  useEffect(()=>{
    setData(data === 'none' ? 'flex' : 'none');
  },[GLOBALSTR]);

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Map" component={MapStack} />
      <Tab.Screen name="Chat" component={ChatStack} options={{tabBarStyle:{display:data}}} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

// 
