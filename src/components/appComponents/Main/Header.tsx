import {MenuList} from '@appTypes/navigators.type';
import {atomMenu} from '@recoils';
import * as React from 'react';
import {Button, View} from 'react-native';
import {useSetRecoilState} from 'recoil';

export default function MainHeader() {
  return (
    <View className="flex-row justify-between">
      <View className="flex-1"></View>
      <View className="flex-row gap-2">
        <Button title="Camera" />
        <Button title="Search" />
        <Button title="Dots" />
      </View>
    </View>
  );
}
