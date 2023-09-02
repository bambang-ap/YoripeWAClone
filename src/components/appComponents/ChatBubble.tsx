import React from 'react';
import {View, Text} from 'react-native';

import Highlighter from 'react-native-highlight-words';
import {useRecoilValue} from 'recoil';

import {ChatBubbleProps} from '@appTypes/propsType.type';
import {atomMessageSearch} from '@recoils';
import {classNames} from '@utils/index';

export function ChatBubble(chat: ChatBubbleProps) {
  const {id, isYou, message} = chat;

  const {searchText} = useRecoilValue(atomMessageSearch);

  return (
    <View
      className={classNames('w-4/5 flex-row gap-2 my-1 self-start', {
        ['self-end justify-end']: isYou,
      })}>
      <View
        className={classNames('bg-slate-500 rounded-xl p-2 self-end', {
          ['bg-green-600']: isYou,
        })}>
        <Text className="text-white">ID: {id}</Text>
        <Highlighter
          suppressHighlighting
          highlightStyle={{backgroundColor: 'yellow', color: 'black'}}
          searchWords={[searchText]}
          textToHighlight={message}
          className="text-white"
        />
      </View>
    </View>
  );
}
