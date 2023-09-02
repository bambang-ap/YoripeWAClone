import * as React from 'react';
import {RefreshControl, TouchableOpacity, View} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {Icon} from 'src/components/base/Icon';

import {ChatBubble} from '@appComp/ChatBubble';
import {TChat} from '@appTypes/data.type';
import {useListChats} from '@query';

export default function Messages() {
  const ref = React.useRef<FlashList<TChat>>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const {data, isFetchingNextPage, hasNextPage, fetchNextPage} = useListChats();

  const dataList = data?.pages
    .map((page, index) =>
      page?.data?.data?.data.map(chat => {
        // Prevent duplication of id, so keyExtractor will not encounter same key
        // Of course in production data this is unnecessary
        return {...chat, id: `PAGE${index}-${chat.id}`};
      }),
    )
    .flat();

  function loadMore() {
    if (hasNextPage) fetchNextPage();
  }

  function scrollToDown() {
    ref.current?.scrollToIndex({index: 0, animated: true});
  }

  return (
    <View className="flex-1">
      {isScrolled && (
        <TouchableOpacity
          className="justify-center items-center absolute rounded-full bg-slate-800 p-2 bottom-2 right-3 z-10"
          onPress={scrollToDown}>
          <Icon name="chevron-down" className="text-white" />
        </TouchableOpacity>
      )}
      <FlashList
        inverted
        ref={ref}
        data={dataList}
        estimatedItemSize={69}
        onEndReached={loadMore}
        onEndReachedThreshold={0}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ChatBubble {...item} />}
        refreshControl={<RefreshControl refreshing={isFetchingNextPage} />}
        onScroll={({
          nativeEvent: {
            contentOffset: {y},
          },
        }) => setIsScrolled(y > 0)}
      />
    </View>
  );
}
