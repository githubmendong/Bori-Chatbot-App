/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  Linking,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MAPURLS } from '../../App';
import styles from '../styles/styles';
const TEMPURLS = `${MAPURLS}/admin/getmainform`;

const IMAGES: string[] = [
  // 'https://i.ibb.co/Q8b0SxG/1.png',
  // 'https://i.ibb.co/QcMHWtR/7.png',
  // 'https://i.ibb.co/4Jkshrd/2.png',
  // 'https://i.ibb.co/kqfbPcJ/3.png',
  // 'https://i.ibb.co/DVcySXf/4.png',
  // 'https://i.ibb.co/NCJKfP2/5.png',
  // 'https://i.ibb.co/GvmZCXx/6.png',
];

const IMAGEURLS: string[] = [
  // 'https://sanhak.wsu.ac.kr/',
  // 'https://www.aacsb.edu/about-us/advocacy/member-spotlight/innovations-that-inspire/2022/solbridge-international-school-of-business',
  // 'https://startup.wsu.ac.kr:444/board/read.jsp?id=233379&code=startupwsu0701',
  // 'https://startup.wsu.ac.kr:444/board/read.jsp?id=233379&code=startupwsu0701',
  // 'https://itedu.wsu.ac.kr:444/page/index.jsp?code=itedu0406',
  // 'https://www.wsu.ac.kr/board/read.jsp?id=233617&code=community0101',
  // 'https://business.wsu.ac.kr:444/board/read.jsp?id=233665&code=business0401',
];

export const MainImg = () => {
  const [imgActive, setImgActive] = useState(0);
  const [temp, setTemp] = useState<boolean>(false);

  // #region 서버에서 데이터 받아오는 코드 (참고)

  const getData = async () => {
    const result = await (await axios.get(TEMPURLS)).data;

    for (let i in result) {
      IMAGES.push(result[i].img);
      IMAGEURLS.push(result[i].imgurl);
    }

    setTemp(current => !current);
  };

  useEffect(() => {
    getData();
  }, []);

  // #endregion

  const onChange = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const nextCurrent: number = Math.floor(
      e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width,
    );
    if (nextCurrent < 0) {
      return;
    }
    setImgActive(nextCurrent);
  };

  return (
    <View>
      <View style={styles.right}>
        <Text style={styles.header}>Woosong University</Text>
        <Text style={styles.rightline} />
      </View>
      <View>
        <ScrollView
          onScroll={(event: any) => onChange(event)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {IMAGES.map(e => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                key={e + 'Touchable'}
                onPress={() => {
                  Linking.openURL(IMAGEURLS[IMAGES.indexOf(e)]);
                }}>
                <Image
                  key={e}
                  resizeMode="stretch"
                  style={styles.mainimg}
                  source={{uri: e}}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.wrapDot}>
          {IMAGES.map((e, index) => (
            <Text
              key={e}
              style={imgActive === index ? styles.dotActive : styles.dot}>
              ●
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
