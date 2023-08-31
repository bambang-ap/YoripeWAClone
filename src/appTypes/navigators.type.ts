export enum RootStackList {
  Chats = 'Chats',
  Chat = 'Chat',
  UserInfo = 'UserInfo',
}

export enum MenuList {
  Chats = 'Chats',
  Status = 'Status',
  Calls = 'Calls',
}

export type RootStackParamList = {
  [RootStackList.Chats]: undefined;
  [RootStackList.Chat]: {id: string};
  [RootStackList.UserInfo]: {id: string};
};
