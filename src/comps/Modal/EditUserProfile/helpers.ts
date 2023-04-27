import { UserDetail } from "@src/types";

  export const updateUsersWithDetails = (updatedUser: UserDetail | null, usersWithDetail: UserDetail[] | null, selectedUserToEdit: UserDetail | null) => {
    return usersWithDetail?.map((user: UserDetail ) => user.id === selectedUserToEdit?.id ? updatedUser : user);
  }
  