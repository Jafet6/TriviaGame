import { FILTER } from '../actions/filtersAction';

const INITIAL_STATE = {
  filter: {
    category: '',
    difficulty: '',
    type: '',
  },
};

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER:
      return {
        ...state,
        filter: action.filters,
      };
    default:
      return state;
  }
};

export default filtersReducer;
