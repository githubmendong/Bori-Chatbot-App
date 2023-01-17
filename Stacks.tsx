/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Chatting } from './chatbot-src/Chatting';
import Home from './Home/Home';
import { Ws36 } from './MapForm/Ws36';


const Stack1 = createNativeStackNavigator();
export const HomeStacks = ()=>{

    return (
      <Stack1.Navigator screenOptions={{ headerShown: false }} >
        <Stack1.Screen name="Home" component={Home} />
        <Stack1.Screen name="MoveMap" component={Ws36} />
        <Stack1.Screen name="Chat" component={Chatting} />
      </Stack1.Navigator>
    );
};

const Stack2 = createNativeStackNavigator();
export const MapStack = ()=>{

    return (
      <Stack2.Navigator screenOptions={{ headerShown: false }} >
        <Stack2.Screen name="MoveMap" component={Ws36} />
        <Stack2.Screen name="Home" component={Home} />
        <Stack2.Screen name="Chat" component={Chatting} />
      </Stack2.Navigator>
    );
};

const Stack3 = createNativeStackNavigator();
export const ChatStack = ()=>{

    return (
      <Stack3.Navigator screenOptions={{ headerShown: false }} >
        <Stack3.Screen name="Chat" component={Chatting} />
        <Stack3.Screen name="MoveMap" component={Ws36} />
        <Stack3.Screen name="Home" component={Home} />
      </Stack3.Navigator>
    );
};

