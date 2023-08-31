import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {TUser} from '@appTypes/data.type';
import {RootStackList} from '@appTypes/navigators.type';
import {useStackNavigation} from '@utils/navigators';

export function Bubbles(user: TUser) {
  const {title, image} = user;

  const {navigation} = useStackNavigation();

  function navigate() {
    navigation.navigate(RootStackList.Chat, user);
  }

  return (
    <TouchableOpacity
      onPress={navigate}
      className="py-2 flex-row items-center gap-2">
      <View className="w-10 h-10 rounded-3xl bg-gray-500">
        <Image source={{uri: image}} />
      </View>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
