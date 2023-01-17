/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-array-constructor */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, {useEffect, useState} from 'react';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import Icon from 'react-native-vector-icons/AntDesign';
import {URL} from '../Ws36';
import {POSTDATA} from '../../chatbot-src/Chatting';

function Search({webviewRef, state}: any) {
  const [list, setList] = useState<any[]>([]);
  const [firstlist, setFirstList] = useState<any[]>([]);
  const [_state, setState] = useState<boolean>(true);
  const [data, setData] = useState<any[]>([]);
  const [text, setText] = useState<string>('');
  const searchlist: any[] = [];

  useEffect(() => {
    const text = POSTDATA;
    if (text != '') {
      for (let i of data) {
        if (i.tag.includes(text)) {
          sendlatlng(i);
        }
      }
    }
  }, [POSTDATA]);

  useEffect(() => {
    searchMessage();
  }, []);

  useEffect(() => {
    setState(current => !current);
  }, [state]);

  const searchMessage = () => {
    fetch(`${URL}/borimap`)
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

  const changetext = (temp: string) => {
    setText(temp);
    keywordSearch(temp);
  };
  const set = () => {
    setList(firstlist);
  };

  const keywordSearch = (temp: string) => {
    try {
      for (let i of data) {
        if (i.tag.includes(temp)) {
          const data_ = {
            id: i.id,
            title: i.name,
          };
          searchlist.push(data_);
        }
      }
      setList(searchlist);
    } catch (error) {}
  };

  const sendlatlng = async (temp: any) => {
    try {
      setText(temp.title);
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
    } catch (error) {}
  };

  const send = async (temp: any) => {
    try {
      const latlng = new Array();

      for (let i of data) {
        if (temp === i.name) {
          const _data = {
            picket: 'location',
          };
          latlng.push(_data);
          latlng.push(i);
        }
      }
      const sendData = JSON.stringify(latlng);
      await webviewRef.current.postMessage(sendData);
    } catch (error) {}
  };

  return (
    <>
      {_state ? (
        <AutocompleteDropdown
          suggestionsListContainerStyle={{opacity: 0.5}}
          textInputProps={{
            placeholder: '학과명이나 건물정보를 입력해주세요',
          }}
          ChevronIconComponent={<Icon name="down" size={20} color="black" />}
          ClearIconComponent={<Icon name="close" size={20} color="black" />}
          emptyResultText="검색 결과가 없습니다."
          onClear={() => set()}
          showChevron={true}
          closeOnBlur={true}
          closeOnSubmit={true}
          clearOnFocus={false}
          useFilter={false}
          onOpenSuggestionsList={() => set()}
          onChangeText={_text => changetext(_text)}
          onSelectItem={item => sendlatlng(item)}
          onSubmit={() => {
            send(text);
          }}
          dataSet={list}
        />
      ) : null}
    </>
  );
}
export default Search;
