import * as React from 'react';
import {Animated, Dimensions, SafeAreaView, View} from 'react-native';

import CallsScreen from './CallsScreen';
import StatusScreen from './StatusScreen';
import ChatsScreen from './ChatScreen';
import MainHeader from '@appComp/Main/Header';
import {useRecoilValue} from 'recoil';
import {atomMenu} from '@recoils';
import {MenuList} from '@appTypes/navigators.type';
import MainMenu from '@appComp/Main/Menu';

export default function MainScreen() {
  return (
    <SafeAreaView>
      <MainHeader />
      <MainMenu />
      <RenderView />
    </SafeAreaView>
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
  }, [menu]);

  return (
    <Animated.View
      className="w-full h-full flex-row"
      style={{width: width * 3, transform: [{translateX: translateX}]}}>
      <View className="flex-1">
        <ChatsScreen />
      </View>
      <View className="flex-1">
        <StatusScreen />
      </View>
      <View className="flex-1">
        <CallsScreen />
      </View>
    </Animated.View>
  );
}
