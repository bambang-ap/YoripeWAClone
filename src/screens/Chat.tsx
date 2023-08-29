import ChatHeader from '@appComp/Chat/Header';
import MessageBox from '@appComp/Chat/MessageBox';
import Messages from '@appComp/Chat/Messages';
import * as React from 'react';
import {View} from 'react-native';

export default function ChatScreen() {
  return (
    <View className="flex-1">
      <ChatHeader />
      <Messages />
      <MessageBox />
    </View>
  );
}
