import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type UserId = string;

export interface User {
  name: string;
  email: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = [
  { id: '1', name: 'molu', email: 'molu@gmail.com' },
  { id: '2', name: 'felito', email: 'felito@gmail.com' },
];

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id !== id);
    },
  },
});

export default userSlice.reducer;
export const { deleteUserById } = userSlice.actions;
