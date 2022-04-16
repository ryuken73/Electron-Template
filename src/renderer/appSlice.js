import {createSlice} from '@reduxjs/toolkit';
import CONSTANTS from 'renderer/config/constants';
const {DEFAULT_ORDER_BY_TEXT=''} = CONSTANTS
const initialState = {
}

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setLoginId: (state, action) => {
      const {type, payload} = action;
      state.loginId = payload;
    }
  }
})

export const showMessageBoxForDuration = (text, duration=1000, level='success') => async (dispatch, getState) => {
}

export const {
    setLoginId,
} = appSlice.actions;

export default appSlice.reducer;
