import * as React from 'react';

import AppScreen from '@appComp/AppScreen';
import ChatHeader from '@screenComp/Chat/Header';
import MessageBox from '@screenComp/Chat/MessageBox';
import Messages from '@screenComp/Chat/Messages';

export default function ChatScreen() {
  return (
    <AppScreen>
      <ChatHeader />
      <Messages />
      <MessageBox />
    </AppScreen>
  );
}
