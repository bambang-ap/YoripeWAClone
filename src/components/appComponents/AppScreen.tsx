import React from 'react';
import {PropsWithChildren} from 'react';
import {SafeAreaView, View} from 'react-native';

export default function AppScreen({children}: PropsWithChildren) {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 px-2">{children}</View>
    </SafeAreaView>
  );
}
