/* eslint-disable prettier/prettier */
/* eslint-disable semi */

/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

let sampleData = ['W1','W2','W3','도서관','우송관','W1 위치 알려줘','W2 위치 알려줘','W3 위치 알려줘','도서관 위치 알려줘','우송관 위치 알려줘',
                  'W1 설명해줘','W2 설명해줘','W3 설명해줘','도서관 설명해줘','우송관 설명해줘'];
let Akey = 0;
export const AutoComplete = ({text, ukey, addChattings}: any | string) => {
  text = text.toUpperCase()
  const [autoComplete, setAutoComplete] = useState<string[]>(['1234']);
  useEffect(() => {
    let data: string[] = [];
    sampleData.some((value: string) => {
      if (value.includes(text)) {
        data.push(value);
      }
    });
    setAutoComplete(data);
  }, [text]);
//2
  return (
    <>
    <ScrollView horizontal={true}>
    <View style={{alignItems: 'center', alignContent: 'center' ,flexDirection: 'row'}}>
    <View style={{marginBottom:40}} />
    <View style={{alignItems: 'center', flexDirection: 'row'}}>
          {autoComplete.map(value => {
            return (
              <TouchableOpacity
                onPress={() => {
                  addChattings(value);
                }}
                key={ukey + Akey++}
                style={{
                  paddingHorizontal: 10,
                  borderRadius: 20,
                  backgroundColor: 'white',
                  marginBottom: 5,
                  borderWidth: 1,
                  borderColor: '#c7c7c7',
                  margin: 5,
                }}>
                <Text key={Akey++} style={{fontSize: 15}}>
                  {value}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
    </View>
    </ScrollView>
    </>
  );
};
