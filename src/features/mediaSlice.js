import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  media: null,
};

export const mediaSlice = createSlice({
  name: "media",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    pushCurrentMedia: (state, action) => {
      state.media = action.payload;
    },
  },
});

export const { pushCurrentMedia } = mediaSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMedia = (state) => state.media.media;

export default mediaSlice.reducer;
