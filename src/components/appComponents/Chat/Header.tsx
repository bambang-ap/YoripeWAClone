import * as React from 'react';
import {Text, View} from 'react-native';

import {useStackNavigation} from '@utils/navigators';

import {Icon} from '@components';

export default function ChatHeader() {
  const {
    navigation: {goBack},
  } = useStackNavigation();

  return (
    <View>
      <View className="flex-row gap-2 bg-slate-500 items-center">
        <View className="flex-row gap-2 flex-1 items-center">
          <Icon name="chevron-left" onPress={goBack} />
          <View className="w-10 h-10 rounded-xl bg-gray-900" />
          <Text>Name</Text>
        </View>
        <Icon name="camera" />
        <Icon name="call" />
        <Icon name="dot" />
      </View>
    </View>
  );
}
