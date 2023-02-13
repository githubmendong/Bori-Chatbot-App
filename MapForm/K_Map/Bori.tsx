/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable keyword-spacing */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from '@rneui/base';
import { DialogLoading } from '@rneui/base/dist/Dialog/Dialog.Loading';
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
import { MAPURLS } from '../../App';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function Bori() {
  const [visible, setVisible] = useState(false);
  const [store, setStore] = useState<any>([]);
  const ModalView = () => {
    setVisible(current => !current);
  };

  const Item = ({item}: any) => (
    <View style={styles.list}>
      <Text style={styles.text}>{item.tag}</Text>
      <TouchableOpacity>
        <Icon name="trash-o" size={25} color="white" onPress={()=>{DeleteBookmark(item);}} style={{marginTop:'auto', marginBottom:'auto' }} />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    LoadBookmark();
  }, [visible]);

  const LoadBookmark = async () => {
    try {
        let getData: any;
        
        getData = await (await axios.post(`${MAPURLS}/bookmark`,
       {
        'id' : '염원',
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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <>
      {visible ? (
        <View>
          <Modal visible={visible}>
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.header}>Book Mark</Text>
                <TouchableOpacity style={{top: 20}} onPress={ModalView}>
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 100,
                      overflow: 'visible',
                      borderWidth: 3,
                    }}
                    source={{
                      uri: 'https://mblogthumb-phinf.pstatic.net/20160817_259/retspe_14714118890125sC2j_PNG/%C7%C7%C4%AB%C3%F2_%281%29.png?type=w800',
                    }}
                  />
                </TouchableOpacity>
              </View>
              <FlatList
                data={store}
                renderItem={({item}) => <Item item={item} />}
                keyExtractor={item => item.id}
              />
            </View>
          </Modal>
        </View>
      ) : (
        <View style={{position: 'absolute', bottom: 50, right: 20}}>
          <TouchableOpacity onPress={ModalView}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 100,
                overflow: 'visible',
                borderWidth: 3,
              }}
              source={{
                uri: 'https://t1.daumcdn.net/cfile/tistory/99BB433359E8C2BF32',
              }}
            />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

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

export default Bori;
