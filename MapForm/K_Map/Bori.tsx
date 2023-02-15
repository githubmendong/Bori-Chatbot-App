/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Text} from '@rneui/base';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MAPURLS, setNumber } from '../../App';
import { setKeyword } from '../../chatbot-src/ChatForm/BtnSystemChat';
import { getOriginData, removeData } from '../../chatbot-src/Utils/LocalStrorage';
import { setSelectedTab } from '../../Tabs';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const Bori = ()=> {
  const [visible, setVisible] = useState(false);
  const [store, setStore] = useState<any>([]);
  const ModalView = () => {
    setVisible(current => !current);
  };

  const logout = async ()=>{
    await removeData('account_info');
    setNumber(0);
    setSelectedTab(2);
  };

  const moveActivity = async (keyword: string, picket: string)=>{
    if (picket === 'Map'){
      await setKeyword(keyword);
      setNumber(2);
      setSelectedTab(1);
    }
    else {
      await setKeyword(keyword);
      setNumber(3);
      setSelectedTab(3);
    }
  };

  const Item = ({item}: any) => (
    <TouchableOpacity onPress={()=>{moveActivity(item.tag, item.picket);}} key={item.tag}>
    <View style={styles.list} key={item.tag}>
      <Text style={styles.text}>{item.tag} - {item.picket}</Text>
      <TouchableOpacity >
        <Icon name="trash-o" size={25} color="white" onPress={()=>{DeleteBookmark(item);}} style={{marginTop:'auto', marginBottom:'auto' }} />
      </TouchableOpacity>
    </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    LoadBookmark();
  }, [visible]);

  const LoadBookmark = async () => {
    try {
        let getData: any;
        const accountData = (await getOriginData('account_info'))?.replace(/"/g,'');

        getData = await (await axios.post(`${MAPURLS}/bookmark`,
       {
        'id' : accountData,
       })).data;
        setStore(getData);
      }
      catch (error) {}
    };
const DeleteBookmark = async (item:any) => {
    await (await axios.post(`${MAPURLS}/bookmark/deletebookmark`,
       {
        'pkid' : item.pkid,
       })).data;
    LoadBookmark();
};

  return (
    <>
      {visible ? (
        <View>
          <Modal visible={visible}>
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.header}>Bori : Book Mark</Text>
                <TouchableOpacity style={{top: 20}} onPress={ModalView}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      // borderRadius: 100,
                      overflow: 'visible',
                      borderWidth: 3,
                      marginLeft:20,
                    }}
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/512/189/189254.png',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={store}
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={item => item.tag}
              />
            </View>
          </Modal>
        </View>
      ) : (
        <>
        <View style={{position: 'absolute', bottom: 60, right: 20}}>
          <TouchableOpacity onPress={ModalView}>
            <Image
              style={{
                width: 40,
                height: 40,
                overflow: 'visible',
                borderWidth: 3,
              }}
              source={{
                uri: 'https://i.ibb.co/wWN2wtc/bookmark.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{position: 'absolute', bottom: 10, right: 20}}>
          <TouchableOpacity onPress={logout}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                overflow: 'visible',
                borderWidth: 3,
              }}
              source={{
                uri: 'https://i.ibb.co/YZKPQyy/login.png',
              }}
            />
          </TouchableOpacity>
        </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(50,50,50,1)',

  },
  list: {
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginLeft: 10,
    width: WIDTH - 20,
    height:HEIGHT / 13,
    color: 'white',
    backgroundColor: 'rgba(50,50,50,1)',
    flexDirection: 'row',
  },
  header: {
    padding: 20,
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
    width: WIDTH - 80,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    color: 'white',
    width: WIDTH - 90,
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop:'auto',
    marginBottom:'auto',
  },
});

