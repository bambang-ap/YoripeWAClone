import {atom} from 'recoil';

import {MenuList} from '@appTypes/navigators.type';

export const atomMenu = atom<MenuList>({
  key: 'atomMenu',
  default: MenuList.Chats,
});
