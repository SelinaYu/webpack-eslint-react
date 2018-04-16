// For Example
import mockData from 'Mock/mockData';
export const getData = params => {
  return async (dispatch, getState) => {
    const ret = await mockData.list;
    if (ret) {
      dispatch({
        type: 'GET_DATA',
        data: ret,
      });
    }
    return Promise.resolve(ret);
  };
};

// export const getData = (data) => ({
//   type: 'GET_DATA',
//   data: data
// });
