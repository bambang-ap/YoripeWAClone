import {FontAwesome5IconProps} from 'react-native-vector-icons/FontAwesome5';

export type IconProps = Pick<FontAwesome5IconProps, 'onPress'> & {
  /**
   * find icon name on https://fontawesome.com/v5/search
   */
  name: string;
};
