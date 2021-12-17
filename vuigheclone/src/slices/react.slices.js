import { createSlice } from "@reduxjs/toolkit";

const reactSlice = createSlice({
  name: "reactSlice",
  initialState: { anime: [] },
  reducers: {
    addLike(state, action) {
      const anime = state.anime.find(
        (anime) => anime.films.alias == action.payload
      );
      anime.like++;
    },

    addFollow(state, action) {
      const anime = state.anime.find(
        (anime) => anime.films.alias == action.payload
      );
      anime.follow++;
    },

    unLike(state, action) {
      const anime = state.anime.find(
        (anime) => anime.films.alias == action.payload
      );
      anime.like--;
    },

    unFollow(state, action) {
      const anime = state.anime.find(
        (anime) => anime.films.alias == action.payload
      );
      anime.follow++;
    },
  },
});
export default reactSlice.reducer;
export const { addLike, unLike, addFollow, unFollow } = reactSlice.actions;
