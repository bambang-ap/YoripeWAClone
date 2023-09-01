import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

import {TUser} from '@appTypes/data.type';
import {API_HOST} from '@constants';

export function useListUsers() {
  return useQuery(['list-users'], () =>
    axios.get<ApiResponse<TUser[]>>(`${API_HOST}/users`),
  );
}
