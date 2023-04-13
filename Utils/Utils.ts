import { User } from '../types/User';

export const sliceArray = (
  arr: User[] | null,
  num: number
): User[] | undefined => {
  return arr?.slice(0, num);
};

export const shuffleArray = (array: User[] | null): User[] | null => {
  return array?.sort(() => Math.random() - 0.5) ?? null;
};
