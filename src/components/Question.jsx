import { useDispatch, useSelector } from 'react-redux';
import { answerQuestion } from '../features/questionnaire/questionnaireSlice.js';
import styles from './Question.module.css';

function Question({ question, number }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.questionnaire.answers[question.id]);
  const result = useSelector((state) => state.questionnaire.result);

  const getClass = (index) => {
    let cls = styles.option;
    if (selected === index) cls += ` ${styles.selected}`;
    // после отправки подсвечиваем правильный и неправильный ответ
    if (result) {
      if (index === question.correct) cls += ` ${styles.correct}`;
      else if (selected === index) cls += ` ${styles.wrong}`;
    }
    return cls;
  };

  return (
    <div className={styles.question}>
      <p className={styles.text}>
        <span className={styles.number}>{number}.</span> {question.text}
      </p>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <button
            key={option}
            type="button"
            className={getClass(index)}
            onClick={() => dispatch(answerQuestion({ questionId: question.id, optionIndex: index }))}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
