/* eslint-disable prettier/prettier */
/* eslint-disable no-array-constructor */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {SearchBar} from '@rneui/themed';
import { MAPURLS } from '../Ws36';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Item = ({item, onPress}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

function Search({webviewRef, _state}: any) {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const [state, setState] = useState<boolean>(false);
  const [firstlist, setFirstlist] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setState(current => !current);
  }, [_state]);

  useEffect(() => {
    searchMessage();
    setState(current => !current);
  }, []);

  const onPress = () => {
    setState(current => !current);
  };

  const List = ({_list}: any) => {
    const renderItem = ({item}: any) => {
      return (
        <Item
          item={item}
          onPress={() => {
            sendlatlng(item);
          }}
        />
      );
    };
    return (
      <FlatList
        data={_list}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
        ListEmptyComponent={
          <Text style={[styles.touchable, {fontSize: 18, textAlign: 'center'}]}>
            검색결과가 없습니다
          </Text>
        }
      />
    );
  };

  const searchMessage = () => {
    fetch(`${MAPURLS}/borimap`)
      .then(response => response.json())
      .then(_data => {
        const getData = _data;
        for (let i of getData) {
          const __data = {
            id: i.id,
            title: i.name,
          };
          firstlist.push(__data);
        }
        setList(firstlist);
        setData(getData);
      });
  };

  const filter = (_text: any) => {
    const arr: any[] = [];
    for (let i of data) {
      if (i.tag.includes(_text)) {
        const data_ = {
          id: i.id,
          title: i.name,
        };
        arr.push(data_);
      }
    }
    setList(arr);
  };

  const settext = (text: string) => {
    filter(text);
    setInputText(text);
  };

  const sendlatlng = async (temp: any) => {
    await onPress();
    setTimeout(() => _sendlatlng(temp), 118);
  };

  const _sendlatlng = async (temp: any) => {
    const latlng = new Array();

    for (let i of data) {
      if (temp.id === i.id) {
        const _data = {
          picket: 'location',
        };
        latlng.push(_data);
        latlng.push(i);
      }
    }
    const sendData = JSON.stringify(latlng);
    await webviewRef.current.postMessage(sendData);
  };

  return (
    <Modal
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      onBackButtonPress={() => {
        onPress();
      }}
      deviceWidth={WIDTH}
      deviceHeight={HEIGHT}
      isVisible={state}>
      <View>
        <View>
          <SearchBar
            platform="android"
            containerStyle={{
              width: WIDTH - 120,
              height: 50,
              marginRight: 'auto',
              marginLeft: 'auto',
              borderRadius: 10,
              borderWidth: 2,
              borderColor: 'black',
            }}
            inputStyle={{fontSize: 15}}
            inputContainerStyle={{marginTop: 'auto', marginBottom: 'auto'}}
            leftIconContainerStyle={{}}
            rightIconContainerStyle={{}}
            loadingProps={{}}
            onChangeText={text => {
              settext(text);
            }}
            placeholder="건물번호나 이름을 입력해주세요."
            placeholderTextColor="#888"
          />
        </View>
        <View>
          <List _list={list} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 'auto',
    marginTop: 'auto',
  },
  textInput: {
    height: 50,
    width: WIDTH - 20,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 5,
    opacity: 0.9,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    backgroundColor: 'yellow',
  },
  touchable: {
    backgroundColor: 'white',
    // opacity: 0.9,
    width: WIDTH - 120,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 2,
  },
});

export default Search;
