import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {Header} from '@appComp/Header';
import {RootStackList} from '@appTypes/navigators.type';
import {Icon} from '@components';
import {useStackNavigation} from '@utils/navigators';

export default function ChatHeader() {
  const {
    route: {params},
    navigation: {goBack, navigate},
  } = useStackNavigation<RootStackList.Chat>();

  function showInfo() {
    navigate(RootStackList.UserInfo, params);
  }

  return (
    <Header>
      <View className="flex-row gap-2 items-center">
        <TouchableOpacity
          onPress={goBack}
          className="flex-row gap-2 items-center">
          <Icon name="arrow-left" />
          <View className="w-10 h-10 rounded-3xl bg-gray-500">
            <Image source={{uri: params.image}} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={showInfo} className="flex-1 h-full">
          <Text>{params.title}</Text>
        </TouchableOpacity>
        <Icon name="search" />
      </View>
    </Header>
  );
}
