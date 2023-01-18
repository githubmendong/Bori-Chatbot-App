/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import { Text, TouchableOpacity, View } from 'react-native';


export const Tabs = ({ setData, setNumber }:any)=>{
  return (
    <View style={{alignItems: 'center', alignContent: 'center' ,flexDirection: 'row'}}>
      <TouchableOpacity
      onPress={()=>{setNumber(1); setData('flex');}}
      style={{
        padding: 2,
        paddingHorizontal: 40,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        borderRadius: 8,
        backgroundColor: '#4b518a',
        borderWidth: 1,
        borderColor: '#c7c7c7',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        elevation: 5,
        alignItems: 'center',
      }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{setNumber(2); setData('flex');}}
      style={{
        padding: 2,
        paddingHorizontal: 40,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        borderRadius: 8,
        backgroundColor: '#4b518a',
        borderWidth: 1,
        borderColor: '#c7c7c7',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        elevation: 5,
        alignItems: 'center',
      }}
      >
        <Text>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{setNumber(3);}}
      style={{
        padding: 2,
        paddingHorizontal: 40,
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        borderRadius: 8,
        backgroundColor: '#4b518a',
        borderWidth: 1,
        borderColor: '#c7c7c7',
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        elevation: 5,
        alignItems: 'center',
      }}
      >
        <Text>Chat</Text>
      </TouchableOpacity>
    </View>
  )
};
