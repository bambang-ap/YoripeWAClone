import * as React from 'react';
import {Text, View} from 'react-native';

import {Header} from '@appComp/Header';
import {Icon} from '@components';
import {useStackNavigation} from '@utils/navigators';

export default function ChatHeader() {
  const {
    navigation: {goBack},
  } = useStackNavigation();

  return (
    <Header>
      <View className="flex-row gap-2 flex-1 items-center">
        <Icon name="chevron-left" onPress={goBack} />
        <View className="w-10 h-10 rounded-xl bg-gray-900" />
        <Text>Name</Text>
      </View>
      <Icon name="search" />
    </Header>
  );
}
