import React from 'react';
import PropTypes from "prop-types";
import {View, Image, Text, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {faComment, faBookmark,faHeart} from '@fortawesome/free-regular-svg-icons';
import style from './style.js';
import UserProfileImage from "../UserProfileImage/UserProfileImage";



const UserPost = props => {

    return (

    <View style={style.userPostContainer}>
     <View style={style.userInformationContainer}>
      <View style={style.userInformation}>
      <UserProfileImage />

    <View style={style.userPostInformation}>
    <Text style={style.name} >
            {props.firstName} {props.lastName}</Text>
                    {props.location && (
                        <Text style={style.location}>{props.location}</Text>

                  ) }

                </View>
           </View>
                   <Pressable>
                     <FontAwesomeIcon icon={faEllipsisH} color={'#79869f'} size={22}/>
                     </Pressable>
       </View>
                <View style={style.post}>
            <Image resizeMode={'cover'}  source={require('../../assets/Images/default_post.png')} />
                </View>
        <View style={style.userPostStats}>
           <Pressable style={style.userPostStatButton}>

            <FontAwesomeIcon icon={faHeart} style={style.userPostStatIcon}/>
            <Text style={style.userPostStatText}>{props.likes}</Text>

              </Pressable>

              <Pressable style={style.userPostStatButton}>

                  <FontAwesomeIcon icon={faComment} style={style.userPostStatIcon}/>
                    <Text style={style.userPostStatText}>{props.likes}</Text>

              </Pressable>

                  <Pressable style={style.userPostStatButton}>

                        <FontAwesomeIcon icon={faBookmark} style={style.userPostStatIcon}/>
                        <Text style={style.userPostStatText}>{props.bookmarks}</Text>

                   </Pressable>

    </View>

    </View>


        );


};

UserPost.propTypes = {
   firstName: PropTypes.string.isRequired,
   lastName: PropTypes.string.isRequired,
   likes: PropTypes.number.isRequired,
   comments: PropTypes.number.isRequired,
   bookmarks: PropTypes.number.isRequired,
   location: PropTypes.string,




};








export default UserPost;