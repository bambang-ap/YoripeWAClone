import * as React from 'react';
import {Text, View} from 'react-native';
import {Icon} from '@components';

export default function ChatHeader() {
  return (
    <View className="flex-row gap-2 flex-1">
      <View className="flex-row gap-2">
        <Icon name="chevron-left" />
        <View className="w-10 h-10 rounded-xl bg-gray-900" />
        <Text>Name</Text>
      </View>
      <Icon name="camera" />
      <Icon name="call" />
      <Icon name="dot" />
    </View>
  );
}
