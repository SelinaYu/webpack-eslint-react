// For Example
import mockData from 'mock/mockData';

export const getData = (data) => ({
  type: 'GET_DATA',
  data: mockData
});
