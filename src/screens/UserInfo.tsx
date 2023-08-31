import React from 'react';
import {TouchableOpacity} from 'react-native';

import AppScreen from '@appComp/AppScreen';
import {Header} from '@appComp/Header';
import {RootStackList} from '@appTypes/navigators.type';
import {Icon} from '@components';
import {useStackNavigation} from '@utils/navigators';

export default function UserInfoScreen() {
  const {
    route,
    navigation: {goBack},
  } = useStackNavigation<RootStackList.UserInfo>();
  return (
    <AppScreen>
      <Header>
        <TouchableOpacity onPress={goBack}>
          <Icon name="arrow-left" />
        </TouchableOpacity>
      </Header>
    </AppScreen>
  );
}
