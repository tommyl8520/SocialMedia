import React from 'react';
import style from './style';
import {View, Image} from 'react-native';





const UserProfileImage = () => {

return (

     <View style={style.userImageContainer}>
    <Image source={require('../../assets/Images/default_profile.png')} />
     </View>




)


}


export default UserProfileImage;