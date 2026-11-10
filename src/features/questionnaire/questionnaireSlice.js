import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Какой хук хранит состояние в функциональном компоненте?',
      options: ['useState', 'useRef'],
      correct: 0,
    },
    {
      id: 2,
      text: 'Что возвращает createSlice?',
      options: ['Только reducer', 'Reducer и actions'],
      correct: 1,
    },
    {
      id: 3,
      text: 'Каким хуком получить данные из Redux store?',
      options: ['useSelector', 'useEffect'],
      correct: 0,
    },
    {
      id: 4,
      text: 'Каким хуком отправить action в Redux?',
      options: ['useContext', 'useDispatch'],
      correct: 1,
    },
    {
      id: 5,
      text: 'Можно ли в reducer из createSlice «мутировать» state?',
      options: ['Да, благодаря Immer', 'Нет, никогда'],
      correct: 0,
    },
  ],
  answers: {}, // { [questionId]: индекс выбранного варианта }
  result: null, // { correct, total } после отправки
};

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const { questionId, optionIndex } = action.payload;
      state.answers[questionId] = optionIndex;
      state.result = null; // ответ изменили — старый результат уже неактуален
    },
    submitAnswers: (state) => {
      const correct = state.questions.filter(
        (q) => state.answers[q.id] === q.correct
      ).length;
      state.result = { correct, total: state.questions.length };
    },
    resetQuestionnaire: () => initialState,
  },
});

export const { answerQuestion, submitAnswers, resetQuestionnaire } = questionnaireSlice.actions;
export default questionnaireSlice.reducer;
