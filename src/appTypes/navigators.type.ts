export enum RootStackList {
  Chats = 'Chats',
  Chat = 'Chat',
}

export enum MenuList {
  Chats = 'Chats',
  Status = 'Status',
  Calls = 'Calls',
}

export type RootStackParamList = {
  [RootStackList.Chats]: undefined;
  [RootStackList.Chat]: undefined;
};
