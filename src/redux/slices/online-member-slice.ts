// slices/online-member-slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialStateProps = {
  members: {
    id: string;
  }[];
};

const InitialState: InitialStateProps = {
  members: [],
};

export const OnlineTracking = createSlice({
  name: 'online',
  initialState: InitialState,
  reducers: {
    onOnline: (state, action: PayloadAction<InitialStateProps>) => {
      const list = state.members.find((data) =>
        action.payload.members.find((payload) => data.id === payload.id)
      );

      if (!list) state.members = [...state.members, ...action.payload.members];
    },
    onOffline: (state, action: PayloadAction<InitialStateProps>) => {
      state.members = state.members.filter((member) =>
        action.payload.members.find((m) => member.id !== m.id)
      );
    },
  },
});

export const { onOffline, onOnline } = OnlineTracking.actions;
export default OnlineTracking.reducer;
