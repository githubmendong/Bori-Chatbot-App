/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import axios from 'axios';
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Image,
  Linking,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {MAPURLS} from '../../App';
import styles from '../styles/styles';
import {MainImg} from './MainImg';
import {Sns} from './Sns';
import {VideoPlayer} from './VideoPlayer';

const moveTop = (SCROLLREF: ScrollView) => {
  SCROLLREF.scrollTo({x: 0, y: 0, animated: true});
};

let SCROLLREF: ScrollView;

const stringArray: string[] = [];

const IMG: string[] = [];

const IMGURL: string[] = [];

const HEADER_HEIGHT = 50;

export const Scroll = () => {
  const [temp, setTemp] = useState<boolean>(false);
  const [offset, setOffset] = useState(0);
  const [scrollUp, setScrollUp] = useState(true);

  const animationRef = useRef(new Animated.Value(0)).current;

  const translateY = animationRef.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -HEADER_HEIGHT],
  });

  const onScroll = (event: any) => {
    const currentOffset = event.nativeEvent.contentOffset.y;
    setScrollUp(offset >= currentOffset);
    setOffset(currentOffset);
  };

  useEffect(() => {
    Animated.timing(animationRef, {
      toValue: scrollUp ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [animationRef, scrollUp]);

  const getData = async () => {
    const result = await (await axios.get(`${MAPURLS}/admin/getsubform`)).data;

    for (let i in result) {
      stringArray.push(result[i].title);
      stringArray.push(result[i].description);
      IMG.push(result[i].img);
      IMGURL.push(result[i].imgurl);
    }

    setTemp(current => !current);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: HEADER_HEIGHT,
          transform: [{translateY: translateY}],
        }}>
        <View style={styles.logocenter}>
          <Text style={styles.logo}>WOOSONG UNIVERSITY</Text>
        </View>
      </Animated.View>
      <Animated.ScrollView
        onScroll={onScroll}
        style={{
          transform: [{translateY: translateY}],
        }}
        scrollEventThrottle={16}
        bounces={false}
        stickyHeaderHiddenOnScroll={true}
        ref={(ref: any) => {
          SCROLLREF = ref;
        }}>
        <View>
          <VideoPlayer />
        </View>

        <View>
          <MainImg />
        </View>
        <View style={styles.center}>
          <Text style={styles.header0_5} />
          <Text style={styles.green} />
        </View>

        <View style={styles.formcolor}>
          <View style={styles.left}>
            <Text style={styles.header}>News</Text>
            <Text style={styles.leftline} />
            <Text style={styles.title}>{stringArray[0]}</Text>
            <Text style={styles.content}>{stringArray[1]}</Text>
          </View>
          <View>
            <Image style={styles.img} source={{uri: IMG[0]}} />
          </View>
          <TouchableOpacity onPress={() => Linking.openURL(IMGURL[0])}>
            <View style={styles.center}>
              <Text style={styles.look}>자세히 보기</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.right}>
          <Text style={styles.header}>News</Text>
          <Text style={styles.rightline} />
          <Text style={styles.title}>{stringArray[2]}</Text>
          <Text style={styles.content}>{stringArray[3]}</Text>
        </View>
        <View>
          <Image style={styles.img} source={{uri: IMG[1]}} />
        </View>
        <TouchableOpacity onPress={() => Linking.openURL(IMGURL[1])}>
          <View style={styles.center}>
            <Text style={styles.look}>자세히 보기</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.center}>
          <Text style={styles.header0_5} />
          <Text style={styles.blue} />
        </View>

        <View style={styles.left}>
          <Text style={styles.header}>Notice</Text>
          <Text style={styles.leftline} />
          <Text style={styles.title}>{stringArray[4]}</Text>
          <Text style={styles.notice}>{stringArray[5]}</Text>
        </View>

        <View>
          <TouchableOpacity onPress={() => Linking.openURL(IMGURL[2])}>
            <View style={styles.center}>
              <Text style={styles.noticelook}>자세히 보기</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.center}>
          <Text style={styles.header0_5} />
          <Text style={styles.red} />
        </View>

        <View style={styles.right}>
          <Text style={styles.header2}>자랑스러운 우송</Text>
          <Text style={styles.rightline} />
          <Text style={styles.title}>{stringArray[6]}</Text>
          <Text style={styles.content}>{stringArray[7]}</Text>
        </View>
        <View>
          <Image style={styles.img} source={{uri: IMG[3]}} />
        </View>
        <TouchableOpacity onPress={() => Linking.openURL(IMGURL[3])}>
          <View style={styles.center}>
            <Text style={styles.look}>자세히 보기</Text>
          </View>
        </TouchableOpacity>

        <View>
          <Sns />
        </View>

        <View style={styles.bottom}>
          <Text style={styles.bottomtext}>
            (34606) {'\n'}
            대전광역시 동구 동대전로 171 우송대학교{'\n'}
            Tel. 042.630.9600 {'\t\t'}Fax. 042.631.2346{'\n'}
            {'\n'}Copyright (C) 2023 Woosong BT36 GG{'\n'}All free rights
            reserved.
          </Text>
          <TouchableOpacity
            style={{
              marginLeft: 40,
              backgroundColor: '#b82841',
              padding: 1,
              width: 70,
              height: 100,
            }}
            onPress={() => {
              moveTop(SCROLLREF);
            }}>
            <View style={styles.center}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 12,
                  fontWeight: '500',
                }}>
                위로가기
              </Text>
            </View>
            <Image
              source={{
                uri: 'https://i.ibb.co/rcxSjQC/Kakao-Talk-20230112-135025159.png',
              }}
              style={styles.up}
            />
          </TouchableOpacity>
        </View>
      </Animated.ScrollView>
    </View>
  );
};