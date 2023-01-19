/* eslint-disable no-lone-blocks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */

import {useState} from 'react';
import {
  Alert,
  Dimensions,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { storeData } from './localStrorage';
//import { containsKey, getData, removeData, storeData } from "./localStrorage";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const GuideModal = () => {
  const date = new Date();
  const [modalVisible, setVisible] = useState(true);

  const setModalVisible = (visible: boolean) => {
    setVisible(visible);
  };

  return (
    <View style={modalstyles.centeredView}>
      <Modal
        animationType="fade"
        presentationStyle="overFullScreen"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={modalstyles.centeredView}>
          {/* 모달을 감싸기위한 뷰 */}
          <View style={modalstyles.modalView}>
            <View style={modalstyles.modalTopView}>
              <View>
                <Pressable
                  style={[modalstyles.button30day]}
                  onPress={() => {
                    storeData('day',  date.getDay() + 1);
                    storeData('hours',  date.getHours());
                    storeData('minutes',  date.getMinutes());
                    storeData('seconds',  date.getSeconds());
                    setModalVisible(!modalVisible);
                    }}>
                  <Text style={modalstyles.textStyle}>
                    하루동안 다시 보지 않기
                  </Text>
                </Pressable>
              </View>
              <View>
                <Pressable
                  style={[modalstyles.buttonout]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={modalstyles.textStyle}>닫기</Text>
                </Pressable>
              </View>
            </View>
            <View style={modalstyles.imageView}>
              <ImageBackground
                source={{
                  uri: 'https://i.ibb.co/jDn6kf3/ASd.png',
                }}
                resizeMode="cover"
                style={modalstyles.image}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalstyles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 60,
    alignItems: 'center',
  },
  modalTopView: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between',
  },

  imageView: {
    width: WIDTH - 70,
    height: HEIGHT - 140,
    marginTop: 10,
    marginBottom: 95,
    borderRadius: 30,
  },
  button30day: {
    borderRadius: 15,
    borderWidth: 2.5,
    borderColor: '#17263e',
    backgroundColor: '#17263e',
    padding: 10,
    elevation: 2,
  },
  buttonout: {
    borderRadius: 15,
    borderWidth: 2.5,
    marginLeft: 110,
    borderColor: '#17263e',
    backgroundColor: '#17263e',
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    justifyContent: 'center',
    flex: 1,
    borderRadius: 40,
  },
});
