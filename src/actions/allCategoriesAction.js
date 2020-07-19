import apiCategoryRequest from '../service/apiCategoryRequest';

export const API_CATEGORIES_REQUEST = 'API_CATEGORIES_REQUEST';
export const API_CATEGORIES_RECEIVE_SUCCESS = 'API_CATEGORIES_RECEIVE_SUCCESS';
export const API_CATEGORIES_RECEIVE_FAILURE = 'API_CATEGORIES_RECEIVE_FAILURE';

const apiRequestAction = () => ({
  type: API_CATEGORIES_REQUEST,
});

const apiRequestSuccess = (categoriesArr) => ({
  type: API_CATEGORIES_RECEIVE_SUCCESS,
  categoriesArr,
});

const apiRequestFailure = (error) => ({
  type: API_CATEGORIES_RECEIVE_FAILURE,
  error,
});

export function getCategoriesRequest() {
  return (dispatch) => {
    dispatch(apiRequestAction());

    return apiCategoryRequest()
      .then(
        (categories) => dispatch(apiRequestSuccess(categories.trivia_categories)),
        (error) => dispatch(apiRequestFailure(error.message)),
      );
  };
}
