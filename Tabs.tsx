/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Chatting } from './chatbot-src/Chatting';
import Home from './Home/Home';
import { Ws36 } from './MapForm/Ws36';


export const Tabs = ()=>{
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }} >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Map" component={Ws36} />
          <Tab.Screen name="Chat" component={Chatting} options={{tabBarStyle:{display:'none'}}} />
        </Tab.Navigator>
        </NavigationContainer>
    );
};
