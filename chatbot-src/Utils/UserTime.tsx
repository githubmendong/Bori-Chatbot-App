/* eslint-disable prettier/prettier */

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const UserTime = () => {
  const [ampm, setAmPm] = useState<string>('오후');
  const date: Date = new Date();
  useEffect(() => {
    setAmPm(() => {
      return date.getHours() >= 12 ? '오후' : '오전';
    });
  }, []);
  return (
    <>
      <Text style={{marginLeft: 35, marginTop: 10, marginBottom: 10, fontSize:10}}>
        {ampm}
        {` ${date.getHours() >= 12 ? date.getHours() - 12 : date.getHours()}`}:
        {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
      </Text>
    </>
  );
};
