import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Header} from '@appComp/Header';
import {UserImage} from '@appComp/UserImage';
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
          <View>
            <UserImage {...params} />
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
