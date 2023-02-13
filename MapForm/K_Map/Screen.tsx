/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {color, Image} from '@rneui/base';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Modal,
  Text,
  Pressable,
  View,
  Linking,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MAPURLS} from '../../App';
import {modalstyles} from './styles/modalstyles';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const Screen = ({_state, _name, map}: any) => {
  const [state, setState] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const list: any = map;
  const [text, setText] = useState<any[]>([]);
  const [description, setDescription] = useState<any[]>([]);
  const name: string = _name;

  useEffect(() => {
    setState(current => !current);
  }, [_state]);

  useEffect(() => {
    showdata();
  }, [state]);

  const onPress = () => {
    setState(current => !current);
  };

  const BookMarkSave = async () => {
    await axios.post(`${MAPURLS}/bookmark/createbookmark`, {
        id: '염원',
        tag: text[0],
        picket: 'Map',
      })
  };

  const showdata = () => {
    for (let d of list) {
      if (d.name === name) {
        setData(d);
        setText(d.name.split(' '));
        const str = d.description;
        setDescription(str.split('@'));
      }
    }
  };

  const Screen_View = (a: number) => {
    const desc_arr = description[a].split('#');
    return (
      <View key={a} style={{flexDirection: 'row', marginBottom: 10}}>
        <Text
          style={{
            ...modalstyles.FloorText,
            width: desc_arr[0].length < 4 ? 40 : 70,
          }}>
          - {desc_arr[0]}
        </Text>
        <View>{description_view(desc_arr)}</View>
      </View>
    );
  };

  const description_view = (desc_arr: Array<String>) => {
    let d_arr = [];
    for (let i = 1; i < desc_arr.length; i++) {
      const tel_arr = desc_arr[i].split('$');
      d_arr.push(
        <View key={i} style={{flexDirection: 'row'}}>
          <Text style={modalstyles.description_text}>{tel_arr[0]}</Text>
          <Pressable
            style={modalstyles.phonbtn}
            onPress={() => Linking.openURL(`tel:042${tel_arr[1]}`)}>
            <Text style={{color: 'blue'}}>{tel_arr[1]}</Text>
          </Pressable>
        </View>,
      );
    }
    return d_arr;
  };

  function _Screen() {
    let arr: any = [];
    for (let ab = 0; ab < description.length; ab++) {
      arr.push(Screen_View(ab));
    }
    return arr;
  }

  return (
    <>
      {state ? (
        <View style={modalstyles.centeredView}>
          <Modal
            animationType="none"
            presentationStyle="overFullScreen"
            transparent={true}
            visible={state}>
            <View style={modalstyles.centeredView}>
              {/* 모달을 감싸기위한 뷰 */}
              <View style={modalstyles.modalView}>
                <View style={modalstyles.modalTopView}>
                  <View style={modalstyles.buttonOutView}>
                    <View style={{alignItems: 'flex-start', flex: 1}}>
                      <Text style={modalstyles.BulidingNumText}>{text[0]}</Text>
                    </View>
                    <View style={{alignItems: 'flex-end', flex: 1}}>
                      <Pressable onPress={() => onPress()}>
                        <Text style={modalstyles.CloseStyle}>✖️</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={{uri: data.imgname}}
                    style={modalstyles.image}
                  />
                  <View>
                    <Text style={modalstyles.BulidingNameText}>{text[1]}</Text>
                    <Text style={modalstyles.AddressText}>{data.address}</Text>
                  </View>
                </View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                  }}></Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={modalstyles.FloorAndDepartmentText}>
                    층별 시설 및 학과
                  </Text>
                  <Pressable onPress={() => BookMarkSave()}>
                    <Icon
                      name="bookmark-o"
                      size={35}
                      style={{marginLeft: WIDTH - 270}}></Icon>
                  </Pressable>
                </View>
                {/* ------------------------------------------------------------------------------------------- */}
                <ScrollView style={{borderWidth: 1, borderRadius: 20}}>
                  {_Screen()}
                </ScrollView>
                {/* ------------------------------------------------------------------------------------------- */}
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </>
  );
};
