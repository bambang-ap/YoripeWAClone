import {PropsWithChildren} from 'react';

import {FontAwesome5IconProps} from 'react-native-vector-icons/FontAwesome5';

import {TUser} from './data.type';

export type IconProps = Pick<FontAwesome5IconProps, 'onPress' | 'className'> & {
  /**
   * find icon name on https://fontawesome.com/v5/search
   */
  name: string;
};

export type AppScreenProps = PropsWithChildren<{className?: string}>;

export type UserBubblesProps = {users: TUser[]};

export type UserImageProps = TUser & {sizeClassName?: string};
