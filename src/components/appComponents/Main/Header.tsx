import {MenuList} from '@appTypes/navigators.type';
import {atomMenu} from '@recoils';
import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useSetRecoilState} from 'recoil';
import {Icon} from '@components';

export default function MainHeader() {
  return (
    <View className="flex-row justify-between items-center p-4">
      <View className="flex-1">
        <Text>WhatsApp</Text>
      </View>
      <View className="flex-row gap-2">
        <Icon name="camera" />
        <Icon name="search" />
        <Icon name="ellipsis-v" />
      </View>
    </View>
  );
}
