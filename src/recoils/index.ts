import {MenuList} from '@appTypes/navigators.type';
import {atom} from 'recoil';

export const atomMenu = atom<MenuList>({
  key: 'atomMenu',
  default: MenuList.Chats,
});
