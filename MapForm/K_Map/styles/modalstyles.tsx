/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export{modalstyles};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const modalstyles = StyleSheet.create({
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      marginTop: 15,
      marginBottom: 15,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor : 'black',
      borderWidth : 2,
      borderRadius: 20,
      padding: 5,
      width: width - 50,
      height: height - 100,
    },
    modalTopView: {
      width: '100%',
    },
    buttonOutView: {
      margin: 7,
      flexDirection: 'row',
    },
    imageView: {
      //아마 사진바뀌면 수정할 필요있음
      width: width - 50,
      height: height - 400,
    },
    CloseStyle: {
      color: '#02183c',
      marginTop:5,
      marginRight:5,
      fontSize: 15,
      fontWeight: 'bold',
    },
    BulidingNumText: {
      fontSize: 40,
      color: 'black',
      fontWeight: 'bold',
      width:200,
    },
    AddressText: {
      fontSize: 20,
      color: 'black',
      fontWeight: 'bold',
      width: width-250,
    },
    BulidingNameText: {
      fontWeight: 'bold',
      width:180,
      fontSize: 25,
      color: 'black',
    },
    FloorText: {
      marginBottom: 5,
      fontSize: 15,
      color: 'black',
      textAlign: 'left',
      marginLeft: 11,
    },
    description_text: {
      marginBottom: 5,
      fontSize: 15,
      color: 'black',
      textAlign: 'left',
      marginRight:20,
    },
    image: {
      width: width - 240,
      height: height - 580,
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 15,
      borderWidth:2,
    },
    phonbtn: {
      textAlign: 'right',
      alignItems: 'flex-end',
    },
    FloorAndDepartmentText: {
      marginBottom: 5,
      fontSize: 23,
      color: 'black',
      textAlign: 'left',
      marginLeft: 11,
      fontWeight: 'bold',
    },
  });
  
