import * as React from 'react';
import {TextInput, View} from 'react-native';

import {Icon} from '@components';

export default function MessageBox() {
  return (
    <View className="flex-row bg-green-500">
      <View className="p-2 rounded-lg flex-1">
        <TextInput />
      </View>
      <Icon name="plane" />
    </View>
  );
}
