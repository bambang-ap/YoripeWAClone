import * as React from 'react';
import {TextInput, View} from 'react-native';

import {Icon} from '@components';

export default function MessageBox() {
  return (
    <View className="flex-row items-end gap-2 pb-2">
      <View className="min-h-[40px] max-h-24 justify-center px-4 py-2 rounded-3xl flex-1 bg-gray-300">
        <TextInput multiline />
      </View>
      <View className="rounded-3xl h-[40px] w-[40px] items-center justify-center bg-green-700 p-2">
        <Icon name="paper-plane" />
      </View>
    </View>
  );
}