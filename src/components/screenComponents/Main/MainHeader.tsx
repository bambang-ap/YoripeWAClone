import * as React from 'react';
import {Text} from 'react-native';

import {Header} from '@appComp/Header';
import {Icon} from '@components';

export default function MainHeader() {
  return (
    <Header>
      <Text className="flex-1">WhatsApp</Text>
      <Icon name="camera" />
      <Icon name="search" />
      <Icon name="ellipsis-v" />
    </Header>
  );
}
