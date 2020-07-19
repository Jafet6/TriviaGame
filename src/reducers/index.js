import { combineReducers } from 'redux';
import questionsDataReducer from './questionsDataReducer';
import gravatarReducer from './gravatarReducer';
import apiQuestionsReducer from './apiQuestionsReducer';
import allAnswersReducer from './allAnswersReducer';
import playersInfoReducer from './playersInfoReducer';
import apiCategoriesReducer from './apiCategoriesReducer';
import filtersReducer from './filtersReducer';

const rootReducer = combineReducers({
  questionsDataReducer,
  gravatarReducer,
  apiQuestionsReducer,
  allAnswersReducer,
  playersInfoReducer,
  apiCategoriesReducer,
  filtersReducer,
});

export default rootReducer;
