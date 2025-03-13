import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRealms as fetchRealmsAPI } from "../../services/realmService";

export const fetchRealms = createAsyncThunk("realms/fetchRealms", async () => {
   const response = await fetchRealmsAPI();
   return response;
});

const realmSlice = createSlice({
   name: "realms",
   initialState: {
      realms: [],
      status: "idle",
      error: null
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchRealms.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchRealms.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.realms = action.payload;
         })
         .addCase(fetchRealms.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
         });
   },
});

export default realmSlice.reducer;
