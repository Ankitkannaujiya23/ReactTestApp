import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import AlertDataSlice from "./storeSlices/AlertDataSlice";
import UserSlice from "./storeSlices/UserStoreSlice";

const allReducer=combineReducers({
    AlertDataSlice,
    UserSlice,
});

const store=configureStore({
    reducer:allReducer
});

export default store;
