import { configureStore } from "@reduxjs/toolkit";
import realmReducer from "./slices/realmSlice";

const store = configureStore({
   reducer: {
      realms: realmReducer,
   },
});

export default store;
