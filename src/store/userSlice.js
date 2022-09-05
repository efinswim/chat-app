import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  currentChat: null,
  status: null,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://630cbb5f53a833c53433623a.mockapi.io/users');

      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = 'LOADING';
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'RESOLVED';
      state.userList = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'REJECTED';
      state.error = action.payload;
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
