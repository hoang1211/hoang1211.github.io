import {
  createSlice,
  createAsyncThunk,
  configureStore,
} from "@reduxjs/toolkit";
import { db } from "../firebase-config";
import { getDatabase, ref, child, get, onValue } from "firebase/database";

const getData = createAsyncThunk(
  "getData",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    const dbRef = ref(db);
    return get(child(dbRef, `films`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          return fulfillWithValue(snapshot.val());
        }
      })
      .catch((error) => rejectWithValue(error));

    //     get(child(dbRef, `films`))
    // .then((snapshot) => {
    //   if (snapshot.exists()) {
    //       console.log(snapshot.val());
    //   } else {
    //     console.log("no data");
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
  }
);

const filmSlice = createSlice({
  name: "filmsSlice",
  initialState: {
    status: "idle",
    error: null,
    films: [],
  },
  reducers: {},

  extraReducers: (builder) =>
    builder.addCase(getData.fulfilled, (state, action) => {
      state.status = "succeded";
      state.films = action.payload;
    }),
});

export default filmSlice.reducer;
export { getData };


