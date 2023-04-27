import { ROUTES } from '@src/routes';
import { User, UserDetail } from '@src/types';
import axios from 'axios';

const { BASE_URL, USERS } = ROUTES;

const fetchUserDetails = async (
  users: User[]
): Promise<UserDetail[] | null> => {
  try {
    const userDetails = await Promise.all(
      users.map((user) =>
        axios
          .get(`${BASE_URL}${USERS}/${user.login}`)
          .then((response) => response.data)
      )
    );
    return userDetails;
  } catch (error) {
    console.log('Error fetching user details:', error);
    return null;
  }
};

export default fetchUserDetails;
