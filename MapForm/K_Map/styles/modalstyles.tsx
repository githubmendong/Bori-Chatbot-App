/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dimensions, StyleSheet } from 'react-native';
import { shadow } from 'react-native-paper';
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
      backgroundColor: '#F7F6F7',
      borderColor : '#132239',
      borderWidth : 2,
      borderRadius: 10,
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
      borderRadius: 5, 
      backgroundColor: '#202D43',
      width:50,
      height:30,
      color : '#ffffff',
      fontWeight: '600',
      marginTop:7,
      marginRight:5,
      fontSize: 15,
      shadow:5,
      textAlign: 'center',
      textAlignVertical:'center',
    },
    BulidingNum: {
      alignItems: 'flex-start',
      flex: 1,  
      fontSize: 100,
    },
    // header0_5: {
    //   flex:1,
    //   backgroundColor: 'black',      
    //   height:1,
    //   marginTop:50,
    //   marginBottom:20,
    // },
    BulidingNumText: {
      fontSize: 70,
      // height:200,
      marginTop:-20,
      color: '#202D43',
      fontWeight: '300',
      width:180,
    },
    AddressText: {
      fontSize: 20,
      color: 'black',
      fontWeight: '300',
      shadow:5,
      width: width-250,
      marginTop: 10,   
    },
    BulidingNameText: {
      // marginLeft:10,
      fontWeight: 'bold',
      top:-20,
      // width:300,
      fontSize: 30,
      borderRadius: 5,
      backgroundColor:'#202D43',
      color: 'white',      
      textAlign: 'center',
      textAlignVertical:'center',
    },
    FloorText: {
      marginBottom: 5,
      width:60,
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
      height: height - 530,
      marginLeft: 10,
      marginRight: 10,      
      borderRadius: 15,
      // borderWidth:2,
      shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
    },
    phonbtn: {
      textAlign: 'right',
      alignItems: 'flex-end',
    },
    FloorAndDepartmentLine: {
      top:-10,
      height:1,
     
      backgroundColor:'#202D43',
      marginBottom: 5,
      fontSize: 20,
      color: 'white',
      textAlignVertical:'center',
    },
    FloorAndDepartmentText: {
      top:-10,
      borderRadius: 5,
      // backgroundColor:'#202D43',
      marginBottom: 5,
      fontSize: 20,
      color: '#202D43',
      fontWeight: '500',
      textAlign: 'center',
      textAlignVertical:'center',
    },
  });
  
