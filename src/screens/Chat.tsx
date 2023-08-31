import * as React from 'react';
import {View} from 'react-native';

import ChatHeader from '@appComp/Chat/Header';
import MessageBox from '@appComp/Chat/MessageBox';
import Messages from '@appComp/Chat/Messages';

export default function ChatScreen() {
  return (
    <View className="flex-1">
      <ChatHeader />
      <Messages />
      <MessageBox />
    </View>
  );
}
