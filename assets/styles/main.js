import {StyleSheet} from "react-native";

const style = StyleSheet.create({
    header: {
        paddingTop:30,
        paddingLeft:17,
        paddingRight: 26,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',


},
messageIcon: {
    backgroundColor: '#eaedf1',
    padding: 12,
    borderRadius: 100,



},
messageNumberContainer: {

   width:10,
   height:10,
   backgroundColor: '#f35BAC',
   borderRadius:10,
   flex:1,
   flexDirection:'row',
   alignItems:'center',
   justifyContent: 'center',
   position:'absolute',
   right:7,
   top:10,




 },
 messageNumber:
 {
     fontSize:6,
     fontFamily: 'Inter',
     lineHeight: 7,
     fontWeight:'600',
     color: '#ffffff',


 },

 userStoryContainer: {

     paddingHorizontal: 28,
     marginTop: 12,
     height:  100,

 },
 userPostContainer: {

    marginTop: 30,
    height: '100%',
    paddingHorizontal: 24,


 },





});

export default style;