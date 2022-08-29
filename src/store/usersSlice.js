import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  status: null,
  error: null,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch('https://630cbb5f53a833c53433623a.mockapi.io/users');
      console.log(response)
      if (!response.ok) {
        throw new Error('Server error');
      }

      const data = await response.json();

      //dispatch(setUsers(data))

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.status = 'LOADING';
      console.log(action.payload);
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'RESOLVED';
      console.log(action.payload);
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'REJECTED';
      console.log(action.payload);
      state.error = action.payload
    }
  },
});

export const { setUsers } = usersSlice.actions

export default usersSlice.reducer;
