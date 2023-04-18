import { User } from '@src/types';
import { shuffleArray, sliceArray } from '@src/utils';

export const getRandomUsers = (
  users: User[] | null,
  numberOfUsersNeeded: number
) => {
  const mixUsers = shuffleArray(users);
  return sliceArray(mixUsers, numberOfUsersNeeded);
};
