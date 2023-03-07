import React, { useState, useEffect, useCallback } from "react";
import {View} from "react-native"
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import {PaperPlaneRight, CaretCircleDoubleDown } from 'phosphor-react-native';

const ChatScreen = ()=> {

    const [messages, setMessages] = useState([]);

     useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
    }, []);

    const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, []);

    const scrollToBottomComponent = () =>{
        return(
            <CaretCircleDoubleDown size={32} weight="thin" />
        );
    }
    const renderSend = (props) => {
        return(
            <Send {...props}>
                <View>
                <PaperPlaneRight 
                size={32} 
                weight="fill" 
                color="#2e64e5"
                style={{marginBottom: 6, marginRight:5}} />
                </View>
            </Send>
        );
    }

    const renderBubble = (props) => {
        return(
        <Bubble
        {...props}
        wrapperStyle={{
            right: {
                backgroundColor: '#2e64e5'
            }
        }}
        textStyle={{
            right: {
                color: '#fff'
            }
        }}
        />
        );
    }

    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
        _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
        />
    );
}
  
export default ChatScreen;