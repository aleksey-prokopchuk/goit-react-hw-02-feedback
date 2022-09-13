import css from './Feedback.module.css';

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

function Feedback() {
  return (
    <div>
      <p className={css.title}>Please leave feedback</p>
      <div className={css.wraper_btn}>
        <button className={[css.btn, css.good].join(' ')} type="button">
          Good: <span>0</span>
        </button>
        <button className={[css.btn, css.neutral].join(' ')} type="button">
          Neutral: <span>0</span>
        </button>
        <button className={[css.btn, css.bad].join(' ')} type="button">
          Bad: <span>0</span>
        </button>
      </div>

      <p className={css.title}>Statistics</p>
      <p className={css.text}>
        Good: <span className={css.result}>0</span>
      </p>
      <p className={css.text}>
        Neutral: <span className={css.result}>0</span>
      </p>
      <p className={css.text}>
        Bad: <span className={css.result}>0</span>
      </p>
      <p className={css.text}>
        Total: <span className={css.result}>0</span>
      </p>
      <p className={css.text}>
        Positive feedback: <span className={css.result}>0%</span>
      </p>
    </div>
  );
}

export default Feedback;
