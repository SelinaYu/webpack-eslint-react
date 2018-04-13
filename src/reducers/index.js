import { combineReducers } from 'redux';

const commonData = (state = null, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.data;
    default:
      return state;
  }
};
export default combineReducers({ commonData });

