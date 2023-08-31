import * as React from 'react';

import {FlashList} from '@shopify/flash-list';

import {Bubbles} from '@appComp/Bubbles';
import {TUser} from '@appTypes/data.type';

export default function ChatsScreen() {
  const data: TUser[] = [
    {
      id: '123',
      title: 'Udin',
      image:
        'https://cdn.icon-icons.com/icons2/2859/PNG/512/avatar_face_girl_female_woman_profile_smiley_happy_people_icon_181665.png',
    },
  ];

  return (
    <FlashList
      data={data}
      estimatedItemSize={50}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Bubbles {...item} />}
    />
  );
}
