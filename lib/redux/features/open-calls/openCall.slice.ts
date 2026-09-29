// src/lib/redux/features/open-calls/openCallDraftSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface OpenCallDraft {
  payload: {
    title: string;
    description: string;
    discipline: string;
    isPaid: boolean;
    applicationFee: number;
    deadline: string;
    isOffline: boolean;
    location: string;
    contactEmail: string;
    applyFormLink: string;
    howToApply: string;
  } | null;

  posterImage: File | null;
  optionalImage: File | null;

  listing: {
    packageId: string;
    packageName: string;
    price: number;
    credits: number;
    currency: string;
  } | null;
}

const initialState: OpenCallDraft = {
  payload: null,
  posterImage: null,
  optionalImage: null,
  listing: null,
};

const openCallDraftSlice = createSlice({
  name: "openCallDraft",
  initialState,
  reducers: {
    saveOpenCallDraft: (
      state,
      action: PayloadAction<{
        payload: OpenCallDraft["payload"];
        posterImage: File;
        optionalImage: File | null;
        listing: OpenCallDraft["listing"];
      }>,
    ) => {
      state.payload = action.payload.payload;
      state.posterImage = action.payload.posterImage;
      state.optionalImage = action.payload.optionalImage;
      state.listing = action.payload.listing;
    },
    clearOpenCallDraft: () => initialState,
  },
});

export const { saveOpenCallDraft, clearOpenCallDraft } = openCallDraftSlice.actions;
export default openCallDraftSlice.reducer;