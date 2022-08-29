export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async function(_, { rejectWithValue }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

      if (!response.ok) {
        throw new Error('Server Error');
      }

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)