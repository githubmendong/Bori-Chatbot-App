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
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {SearchBar} from '@rneui/themed';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Item = ({item, onPress}: any) => (
  <TouchableOpacity onPress={onPress} style={styles.touchable}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);


function Search({webviewRef, _state, map}: any) {
  const [inputText, setInputText] = useState('');
  const [data, setData] = useState<any[]>([]);
  const [list, setList] = useState<any[]>([]);
  const getData: any = map;
  const [state, setState] = useState<boolean>(false);
  const [firstlist, setFirstlist] = useState<any[]>([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    setState(current => !current);
    setList(firstlist);
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
        style={{marginBottom:60, height: HEIGHT / 2}}
        ListEmptyComponent={
            <Text style={[styles.touchable, {fontSize: 18, textAlign: 'center'}]}>
              검색결과가 없습니다
            </Text>
        }
      />
    );
  };

  const searchMessage = () => {
    for (let i of getData) {
      const __data = {
        id: i.id,
        title: i.name,
      };
      firstlist.push(__data);
    }
    bubbleSort(firstlist);
    setList(firstlist);
    setData(getData);
  };

  function bubbleSort (input:any) {
    const len = input.length;
    let tmp = null;

    for (let a = 0; a < len; a++)
    {
      for (let b = 0; b < len - 1; b++)
      {
        if (input[b].title > input[b + 1].title)
        { 
          tmp = input[b];
          input[b] = input[b + 1];
          input[b + 1] = tmp;
          tmp = null;
        }
      }
    }
  }

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
      isVisible={state}>
        {/* <KeyboardAvoidingView behavior="padding" enabled> */}
      {/* <View> */}
        <View>
        
          <SearchBar
            platform="android"

            containerStyle={{
              shadowColor:'black',
              marginTop:10,
              // width:  350,
              // height: 50 * 1.5,
              marginLeft: 20,
              marginRight: 20,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: 'black',
              // position: 'absolute'

            }}
            inputStyle={{fontSize: 17}}
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

        <View style={{ marginTop:10, borderRadius: 10}}>
          <List _list={list} />
        </View>
      {/* </View> */}
      {/* </KeyboardAvoidingView> */}
      
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom:10}}>
      <TouchableOpacity
          onPress={() => {
            onPress();
          }}
          style={{
            // position: 'absolute',
            width: 200,
            height: 50,
            backgroundColor: '#142239',
            borderRadius: 10,
            borderWidth: 0.6,
            // borderColor: 'white',
            marginTop:20,
            marginBottom: 'auto',
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
          }}>
          <Text style={{color: 'white'}}>뒤로가기</Text>
        </TouchableOpacity>

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
    width: 30,
    borderRadius: 10,
    fontSize: 15,
    marginBottom: 5,
    opacity: 0.9,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    borderWidth: 2,
    backgroundColor: 'yellow',
  },
  touchable: {
    backgroundColor: 'white',
    // opacity: 0.9,
    top:10,
    width:  300,
    height: 60,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: 'black',
    // borderRadius: 15,
    borderWidth: 0.6,
    borderBottomColor:'#888',
    // position:'absolute',
  },
});

export default Search;
