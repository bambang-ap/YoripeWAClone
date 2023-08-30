import {IconProps} from '@appTypes/propsType.type';
import * as React from 'react';
import FAIcon from 'react-native-vector-icons/FontAwesome5';

export function Icon({name}: IconProps) {
  return <FAIcon name={name} />;
}
