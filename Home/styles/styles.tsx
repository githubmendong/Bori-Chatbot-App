/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../color/color';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeced',
  },

  logo: {
    // width: WIDTH,
    height: 50,
    color: '#ebeced',
    fontSize: 25,
    paddingTop: 7,
    fontWeight: '600',
    fontFamily: 'PyeongChangPeace-Bold',
  },

  logocenter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.darkblue,
  },

  green: {
    width: 20,
    height: 20,
    backgroundColor: '#005826',


  },

  blue: {
    width: 20,
    height: 20,
    backgroundColor: '#0e4e96',

    top: 30,
  },

  red: {
    width: 20,
    height: 20,
    backgroundColor: '#b82841',

  },

  rightline: {
    width: 180,
    height: 0.9,
    backgroundColor: 'black',
    bottom: 20,
    right: 10,
  },

  leftline: {
    width: 180,
    height: 0.9,
    backgroundColor: 'black',
    bottom: 20,
    left: 15,
  },

  centerline: {
    width: 180,
    height: 0.9,
    backgroundColor: 'black',
    bottom: 20,
    left: 3,
  },

  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.5,
  },

  wrapDot: {
    position: 'absolute',
    bottom: -5,
    flexDirection: 'row',
    alignSelf: 'center',
  },

  dotActive: {
    margin: 3,
    color: theme.darkblue,
    fontSize: 20,
  },

  dot: {
    margin: 3,
    color: 'white',
    fontSize: 20,
  },

  mainimg: {
    flexDirection: 'row',
    width: WIDTH,
    height: HEIGHT * 0.8,
    borderRadius:30,
  },

  img: {
    width: WIDTH * 0.95,
    height: HEIGHT * 0.5,
    // width: 170,
    // height: 130,
    // resizeMode: 'center',
    marginTop: 5,
    left: '2.5%',
    borderRadius: 10,
  },
  header0_5: {
    backgroundColor: 'black',
    width:1,
    height:230,
    marginTop:50,
    marginBottom:20,
  },
  header0_4: {
    backgroundColor: 'black',
    width:1,
    height:300,
    marginBottom:100,
  },
  header0_3: {
    color: '#243763',
    fontSize:20,
    fontWeight: '600',
    backgroundColor : '#C1C6D6',
    marginBottom: 30,
    paddingLeft:20,
    paddingRight:20,
  },

  header0_2: {
    color: '#243763',
    fontSize:24,
    fontWeight: '600',
    
    paddingLeft:20,
    paddingRight:20,
    marginBottom:60,
  },

  header0_1: {
    color: '#243763',
    fontSize: 30,
    fontWeight: '900',
    marginTop:20,  
    marginBottom: 0,
    paddingLeft:20,
    paddingRight:20,
  },

  header: {
    color: 'black',
    fontSize: 30,
    // fontWeight: '600',
    paddingTop: 70,
    paddingLeft: 15,
    marginBottom: 30,
    paddingRight: 10,
  },

  header2: {
    color: 'black',
    fontSize: 30,
    // fontWeight: '600',
    paddingTop: 130,
    paddingLeft: 15,
    marginBottom: 20,
    paddingRight: 10,
  },

  left: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  right: {justifyContent: 'flex-end', alignItems: 'flex-end'},
  center0_1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ebeced',
    marginTop:30,

  },

  center: {
    justifyContent: 'center',
    alignItems: 'center',


  },

  title: {
    color: 'black',
    paddingTop: 5,
    fontSize: 18,
    fontWeight: '800',
    paddingRight: 15,
    paddingLeft: 10,
  },

  content: {
    paddingTop: 5,
    fontSize: 13.5,
    lineHeight: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  notice: {
    backgroundColor: theme.darkblue,
    color: '#ebeced',
    marginTop: 20,
    paddingLeft: 5,
    width: WIDTH * 0.95,
    height: HEIGHT * 0.6,
    left: '2.5%',
    borderRadius: 10,
    marginBottom: -50,
  },

  look: {
    width: 170,
    height: 35,
    backgroundColor: theme.darkblue,
    color: 'white',
    borderRadius: 50,
    marginTop: 10,
    paddingTop: 7,
    paddingLeft: 50,
    marginBottom:20,
  },

  noticelook: {
    width: 170,
    height: 35,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 50,
    paddingTop: 7,
    paddingLeft: 50,
  },

  snsimg: {
    flexDirection: 'row',
    width: WIDTH,
    height: HEIGHT * 0.35,
  },

  up: {
    height: HEIGHT * 0.1,
    marginTop: 7,
    color: 'black',
    fontWeight: '600',
    bottom: 3,
  },

  bottom: {
    height: HEIGHT * 0.25,
    //height: 180,
    width: WIDTH,
    backgroundColor: theme.darkblue,
    marginTop: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  bottomtext: {
    marginTop: 10,
    color: '#ebeced',
  },



  //폼 컬러

  formcolor:{

    backgroundColor:'#ECECEC',
    // height:30
  },



  
});

export default styles;
