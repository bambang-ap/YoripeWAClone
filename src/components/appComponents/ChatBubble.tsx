import React from 'react';
import {View, Text} from 'react-native';

import {TChat} from '@appTypes/data.type';
import {classNames} from '@utils/index';

export function ChatBubble(chat: TChat) {
  const {id, isYou, message} = chat;

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
        <Text className="text-white">{message}</Text>
      </View>
    </View>
  );
}
