import { configureStore } from '@reduxjs/toolkit';
import questionnaireReducer from './features/questionnaire/questionnaireSlice.js';

const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
});

export default store;
