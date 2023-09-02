import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import axios from 'axios';

import {TChat, TUser} from '@appTypes/data.type';
import {API_HOST} from '@constants';

export function useListUsers() {
  return useQuery(['list-users'], () =>
    axios.get<ApiResponse<TUser[]>>(`${API_HOST}/users`),
  );
}

export function useListChats() {
  return useInfiniteQuery({
    queryKey: ['list-chats'],
    async queryFn({pageParam = 1}) {
      const chats = await axios.get<ApiResponsePagination<TChat>>(
        `${API_HOST}/chats/${pageParam}`,
      );

      return chats;
    },
    getNextPageParam: (lastPage, allPages) => {
      const [a, b] = [
        allPages.reduce((count, page) => count + page.data.data.data.length, 0),
        lastPage.data.data.totalCount,
      ] as const;

      return a < b;
    },
  });
}
