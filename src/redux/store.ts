import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode';
import {
  getPasswordResetLinkReducer,
  getProfileReducer,
  getUserMemesReducer,
  loginReducer,
  registerReducer,
  resetPasswordReducer,
} from './reducers/UserReducer';
import {
  getCommentsReducer,
  getMemeReducer,
  getMemesReducer,
} from './reducers/MemeReducer';



const verifyToken = (token: string, lsItem: string): boolean => {
  const currentDate = new Date();
  const { exp } = jwtDecode(token);
  if (exp)
    if (currentDate.getTime() > exp * 1000) {
      localStorage.removeItem(lsItem);
      return false;
    }
  return true;
};



const initialState = {
  auth: {
    isAuthenticated: localStorage.getItem('userInfo')
      ? verifyToken(
          JSON.parse(localStorage.getItem('userInfo') as string).token,
          'userInfo'
        )
      : false,
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo') as string)
      : {},
  },
};
// const middleware = [thunk];
const reducer = combineReducers({
  auth: loginReducer,
  register: registerReducer,
  profileGet: getProfileReducer,
  memesGet: getMemesReducer,
  memeGet: getMemeReducer,
  commentsGet: getCommentsReducer,
  userMemesGet: getUserMemesReducer,
  resetLinkGet: getPasswordResetLinkReducer,
  passwordReset: resetPasswordReducer,
  initialState:initialState
});
export const store = configureStore({
  reducer:reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
