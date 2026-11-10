import { useDispatch, useSelector } from 'react-redux';
import Question from './components/Question.jsx';
import Result from './components/Result.jsx';
import {
  submitAnswers,
  resetQuestionnaire,
} from './features/questionnaire/questionnaireSlice.js';
import styles from './App.module.css';

function App() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questionnaire.questions);
  const answers = useSelector((state) => state.questionnaire.answers);
  const result = useSelector((state) => state.questionnaire.result);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Анкета по Redux</h1>
      <p className={styles.progress}>
        Отвечено: {answeredCount} из {questions.length}
      </p>

      <div className={styles.questions}>
        {questions.map((question, index) => (
          <Question key={question.id} question={question} number={index + 1} />
        ))}
      </div>

      <div className={styles.actions}>
        <button
          className={styles.submit}
          onClick={() => dispatch(submitAnswers())}
          disabled={!allAnswered}
        >
          Отправить ответы
        </button>
        {result && (
          <button className={styles.reset} onClick={() => dispatch(resetQuestionnaire())}>
            Пройти заново
          </button>
        )}
      </div>

      <Result />
    </div>
  );
}

export default App;
