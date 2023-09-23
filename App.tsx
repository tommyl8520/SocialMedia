 import React, {useState} from 'react';
import {
Text, SafeAreaView, View,
ScrollView, Pressable, FlatList,

} from 'react-native';
import Title from './components/Title/Title.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main';
import UserStory from './components/UserStory/UserStory';
import UserPost from './components/UserPost/UserPost';




 const App = () => {
  //contains all items in story
 const data = [
 {
    firstName: 'Joseph',
    id: 1,
 },

{
    firstName: 'Angel',
    id: 2,
 },
 {
     firstName: 'White',
     id: 3,
  },
  {
      firstName: 'Oliver',
      id: 4,
   },
   {
       firstName: 'James',
       id: 5,
    },
    {
        firstName: 'Adam',
        id: 6,
     },
     {
         firstName: 'Sean',
         id: 7,
      },
      {
          firstName: 'Nicolas',
          id: 8,
       },
       {
           firstName: 'Frederick',
           id: 9,
        },

 ];
 const posts = [
    {
    firstName: 'Allison',
    lastName: 'Becker',
    location: 'anytown, USA',
    likes: 1201,
    comments: 224,
    bookmarks: 55,
    id: 1,
    },
      {
         firstName: 'Jennifer',
         lastName: 'Wilson',
         location: 'anytown, USA',
         likes: 570,
         comments: 22,
         bookmarks: 60,
         id: 2,
         },
          {
             firstName: 'Adam',
             lastName: 'Spera',
             location: 'anytown, USA',
             likes: 100,
             comments: 210,
             bookmarks: 5,
             id: 3,
             },
              {
                 firstName: 'jake',
                 lastName: 'Ball',
                 location: 'anytown, USA',
                 likes: 300,
                 comments: 18,
                 bookmarks: 17,
                 id: 4,
                 },
                  {
                     firstName: 'Nicolas',
                     lastName: 'Becker',
                     location: 'anytown, USA',
                     likes: 201,
                     comments: 24,
                     bookmarks: 5,
                     id: 5,
                     },





 ];
 const pageSizePosts = 2;
 const [postPageNumber, setPostPageNumber] = useState();
 const pageSize = 4;
 const [pageNumber, setPageNumber] = useState(1);
 const [isLoadingPosts, setIsLoadingPosts] = useState(false);
 const [renderedDataPosts, setRenderedDataPosts] = useState(posts.slice(0, pageSize));
 const [isLoading, setIsLoading] = useState(false);
 const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));

 const pagination = (data, pageNumber, pageSize, posts= false) => {
    let startIndex = (pageNumber -1) * pageSize;
    if (startIndex > data.length) {
        return [];
    }
    if(!posts) {

        setPageNumber(pageNumber);
    }
    else {
        setPostPageNumber(pageNumber);

    }
    return data.slice(startIndex, startIndex + pageSize);



 };
     return (
    <SafeAreaView>
    <ScrollView>
    <View
    style= {style.header}>
   <Title title={"Let's Explore"} />
   <Pressable style={ style.messageIcon}>
   <FontAwesomeIcon icon={faEnvelope} color={'#CACDDE'} size={20}  />
   <View style= {style.messageNumberContainer}>


   <Text style={style.messageNumber}>2</Text>

   </View>
   </Pressable>

   </View>

   <View style={style.userStoryContainer}>



    <FlatList
     onMomentScrollBegin={() => setIsLoading(false)}
    onEndReachedThreshold={0.5}
    keyExtractor={item => item.id.toString()}
    onEndReached={() => {
        if (!isLoading) {
            setIsLoading(true);
            setRenderedData(prev => [...prev,
            ...pagination(data, pageNumber + 1, pageSize),
            ]);
            setIsLoading(false);
        }

    }}
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    data={renderedData}
    renderItem={({item}) => <UserStory firstName={item.firstName}

    />}
    />

    </View>
    <View style={style.userPostContainer}>
        <ScrollView vertical={true}>

        <View>
    <FlatList
        scrollEnabled={false}
         onMomentScrollBegin={() => setIsLoadingPosts(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString()}
        onEndReached={() => {
            if (!isLoading) {
                setIsLoadingPosts(true);
                setRenderedDataPosts(prev => [
                ...prev,
                ...pagination(posts, pageNumber + 1, pageSize, true),
                ]);
                setIsLoadingPosts(false);
            }

        }}
        showsVerticalScrollIndicator={false}

        data={renderedDataPosts}
        renderItem={({item}) => (

        <UserPost

        firstName={item.firstName}
        lastName={item.lastName}
        comments={item.comments}
        likes={item.likes}
        bookmarks={item.bookmarks}
        location={item.location}


            />
        )}
     />
     </View>
        </ScrollView>
        </View>

   </ScrollView>

    </SafeAreaView>

    );

 };


 export default App;