import * as React from 'react';

import AppScreen from '@appComp/AppScreen';
import ChatHeader from '@appComp/Chat/Header';
import MessageBox from '@appComp/Chat/MessageBox';
import Messages from '@appComp/Chat/Messages';

export default function ChatScreen() {
  return (
    <AppScreen>
      <ChatHeader />
      <Messages />
      <MessageBox />
    </AppScreen>
  );
}
