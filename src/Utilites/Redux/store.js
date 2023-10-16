import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import * as API from "../Services/index"
import * as SLICE from "./slices/index";
import storage from 'redux-persist/lib/storage';
// import { storageSession } from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  [API.AuthApi.AuthApi.reducerPath]: API.AuthApi.AuthApi.reducer,
  [API.userApi.userApi.reducerPath]: API.userApi.userApi.reducer,
  authSlice: SLICE.authslice,
  toastSlice: SLICE.toastslice,
  userSlice:  SLICE.userSlice              // left side is key name 
})

const appReducer = (state, action) => {
  if (action.type === 'CLEAR_STATE') {
    state = undefined;
  }
  return rootReducer(state, action);
};

// for local storage 

const persistConfig = {
  key: 'root',
  storage,
}

// for session storage 

// const persistConfig = {
//   key: 'root',
//   storageSession,
// }

const persistedReducer = persistReducer(persistConfig, appReducer)

const store = configureStore({
  reducer : persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
  }).concat(API.AuthApi.AuthApi.middleware,API.userApi.userApi.middleware)
});

setupListeners(store.dispatch);

export const RootState = store.getState;

export const AppDispatch = ()=>  store.dispatch;

export const persistor = persistStore(store)

export default store;
