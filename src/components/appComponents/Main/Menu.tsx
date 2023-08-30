import {MenuList} from '@appTypes/navigators.type';
import {atomMenu} from '@recoils';
import * as React from 'react';
import {Button, View} from 'react-native';
import {useSetRecoilState} from 'recoil';

export default function MainMenu() {
  const listMenu = Object.values(MenuList);
  const setMenu = useSetRecoilState(atomMenu);

  return (
    <View className="flex-row justify-between">
      {listMenu.map(menu => {
        return (
          <View key={menu} className="flex-1">
            <Button title={menu} onPress={() => setMenu(menu)} />
          </View>
        );
      })}
    </View>
  );
}
