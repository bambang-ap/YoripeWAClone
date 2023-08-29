import * as React from 'react';
import {Animated, Dimensions, View} from 'react-native';

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
    <View className='flex-1'>
      <MainHeader />
      <MainMenu />
      <RenderView />
    </View>
  );
}

function RenderView() {
  const menu = useRecoilValue(atomMenu);
  const {width} = Dimensions.get('screen');

  const animValue = React.useRef(new Animated.Value(0)).current;

  const translateX = animValue.interpolate({
    inputRange: [0, 1, 2],
    get outputRange() {
      return this.inputRange.map((range: number) => -(width * range));
    },
  });

  React.useEffect(() => {
    const index = Object.values(MenuList).findIndex(val => val === menu);
    Animated.timing(animValue, {
      duration: 500,
      toValue: index,
      useNativeDriver: true,
    }).start();
  }, [menu]);

  return (
    <Animated.View style={{width: width * 3, transform: [{translateX}]}}>
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
