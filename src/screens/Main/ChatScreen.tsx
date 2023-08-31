import * as React from 'react';
import {Button, View} from 'react-native';

import {useStackNavigation} from 'src/utils/navigators';

import {RootStackList} from '@appTypes/navigators.type';

export default function ChatsScreen() {
  const {navigation: nav} = useStackNavigation();

  return (
    <View className="flex-1">
      <Button
        title="n"
        onPress={() => nav.navigate(RootStackList.Chat, {id: '234567'})}
      />
    </View>
  );
}
