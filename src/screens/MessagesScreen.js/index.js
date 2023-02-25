import React from "react";
import { FlatList, View } from "react-native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {
    Card, 
    Container, 
    UserInfo, 
    UserImgWrapper, 
    UserImg,
    TextSection,
    MessageText,
    PostTime,
    UserInfoText,
    UserName,

} from './styles'
import ChatScreen from "../ChatScreen";

const Stack = createNativeStackNavigator();

const Messages = [
    {
      id: '1',
      userName: 'Daniel Paiva',
      userImg: require('../../assets/users/Daniel.jpg'),
      messageTime: '4 mins ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
      id: '2',
      userName: 'Eloisa S2',
      userImg: require('../../assets/users/Eloisa.jpg'),
      messageTime: '2 hours ago',
      messageText:
        'Hey there, this is my test for a post of my social app in React Native.',
    },
    {
        id: '3',
        userName: 'Micael Magno',
        userImg: require('../../assets/users/Micael.jpg'),
        messageTime: '2 hours ago',
        messageText:
          'Hey there, this is my test for a post of my social app in React Native.',
      },
  ];

const MessagesScreen = ({navigation}) => {
    return (
        <>
        <Container>
            <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
                <Card onPress={()=> navigation.navigate('Chat', {userName: item.userName})}>
                 <UserInfo>
                    <UserImgWrapper>
                        <UserImg source={item.userImg} />
                    </UserImgWrapper>
                    <TextSection>
                        <UserInfoText>
                            <UserName>{item.userName}</UserName>
                            <PostTime>{item.messageTime}</PostTime>
                        </UserInfoText>
                        <MessageText>{item.messageText}</MessageText>
                    </TextSection>
                 </UserInfo>
                </Card>
            )}
            />
        </Container>
        </>
        
    );
}
  
export default MessagesScreen;