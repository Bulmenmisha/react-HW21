import { useSelector } from 'react-redux';
import styles from './Result.module.css';

function Result() {
  const result = useSelector((state) => state.questionnaire.result);

  if (!result) return null;

  const { correct, total } = result;
  const message =
    correct === total ? 'Отлично! 🎉' : correct >= total / 2 ? 'Хороший результат 👍' : 'Стоит повторить тему 📚';

  return (
    <div className={styles.result}>
      <p className={styles.score}>
        Правильных ответов: {correct} из {total}
      </p>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default Result;
