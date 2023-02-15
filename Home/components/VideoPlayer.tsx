/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';
import Video from 'react-native-video';
import styles from '../styles/styles';

export const VideoPlayer = () => {
  return (
    <View>
      <Video
        source={{
          uri: 'https://wsggbucket.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20230112_151355885.mp4',
        }}
        style={styles.wrap}
        paused={false} // 재생/중지 여부
        fullscreen={false}
        resizeMode={'cover'}
        repeat={true} //반복 재성 여부
        controls={false}
      />
    </View>
  );
};
