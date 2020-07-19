import {
  API_CATEGORIES_REQUEST,
  API_CATEGORIES_RECEIVE_SUCCESS,
  API_CATEGORIES_RECEIVE_FAILURE,
} from '../actions/allCategoriesAction';

const INITIAL_STATE = {
  categories: [],
  errorMessage: '',
  loading: false,
};

const apiCategoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case API_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case API_CATEGORIES_RECEIVE_SUCCESS:
      return {
        ...state,
        categories: action.categoriesArr,
        loading: false,
      };
    case API_CATEGORIES_RECEIVE_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default apiCategoriesReducer;
