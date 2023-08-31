import * as React from 'react';
import {Animated, Dimensions} from 'react-native';

import {useRecoilValue} from 'recoil';

import AppScreen from '@appComp/AppScreen';
import {MenuList} from '@appTypes/navigators.type';
import {atomMenu} from '@recoils';
import MainHeader from '@screenComp/Main/MainHeader';
import MainMenu from '@screenComp/Main/MainMenu';

import CallsScreen from './CallsScreen';
import ChatsScreen from './ChatScreen';
import StatusScreen from './StatusScreen';

export default function MainScreen() {
  return (
    <AppScreen>
      <MainHeader />
      <MainMenu />
      <RenderView />
    </AppScreen>
  );
}

function RenderView() {
  const menu = useRecoilValue(atomMenu);
  const {width} = Dimensions.get('screen');

  const animValue = React.useRef(new Animated.Value(0)).current;

  const translateX = animValue.interpolate({
    inputRange: [0, 1, 2],
    get outputRange() {
      return this.inputRange.map((val: number) => -(val * width));
    },
  });

  React.useEffect(() => {
    const index = Object.values(MenuList).findIndex(val => val === menu);
    Animated.timing(animValue, {
      duration: 250,
      toValue: index,
      useNativeDriver: true,
    }).start();
  }, [menu, animValue]);

  return (
    <Animated.View
      className="w-full h-full flex-row"
      style={{width: width * 3, transform: [{translateX}]}}>
      <ChatsScreen />
      <StatusScreen />
      <CallsScreen />
    </Animated.View>
  );
}
