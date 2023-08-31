import * as React from 'react';

import FAIcon from 'react-native-vector-icons/FontAwesome5';

import {IconProps} from '@appTypes/propsType.type';

export function Icon({name}: IconProps) {
  return <FAIcon name={name} />;
}
