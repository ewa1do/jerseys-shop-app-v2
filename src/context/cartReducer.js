import { types } from '../types/types';

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case types.add:
      return {};

    default:
      return state;
  }
};
