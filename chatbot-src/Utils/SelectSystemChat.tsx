/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unreachable */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { BtnSystemChat } from '../ChatForm/BtnSystemChat';
import { DefaultSystemChat } from '../ChatForm/DefaultSystemChat';
import { LinkSystemChat } from '../ChatForm/LinkSystemChat';

import {SystemMealChat} from '../ChatForm/SystemMealChat';
import { CHATURL } from '../Chatting';

export const SelectSystemChat = ({text, ukey, scrollView}: any) => {
  const [answer,setAnswer] = useState<string>('');
  const [keyword,setKeyword] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [state,setState] = useState(true);
  //#region 서버에서 데이터 받는 부분
  const getData = async ()=>{
    const postdata = {
      Q:text,
  };
  let result = await axios.post(`${CHATURL}/boriapp/question/`,postdata);
  console.log(result.data);
  
  setAnswer(result.data.Answer);
  setKeyword(result.data.Keyword);
  setLink(result.data.URL);
  setState(false);
  };
  //#endregion
  
  useEffect(()=>{
    getData();
  },[]);

  return (
    <>
    {state ? 
      <ActivityIndicator color="black" size="large" /> 
      : 
      keyword !== 'None' ? 
        <BtnSystemChat key={ukey} keyword={keyword} answer={answer} /> 
      : 
      link !== 'None' ? 
        <LinkSystemChat linkUrl={link} answer={answer}  text={text} /> 
      : 
        <DefaultSystemChat key={ukey} answer={answer}/>
    }
    {scrollView.scrollToEnd({animated: true})}
    </>
  );
};
