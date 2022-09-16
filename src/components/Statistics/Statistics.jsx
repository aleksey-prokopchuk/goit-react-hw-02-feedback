import PropTypes from 'prop-types';

import css from './Statistics.module.css';

function Statistics(props) {
  const { result } = css;
  const {
    good,
    neutral,
    bad,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = props;

  return (
    <>
      <h2>Statistics</h2>

      <p>
        Good: <span className={result}>{good}</span>
      </p>

      <p>
        Neutral: <span className={result}>{neutral}</span>
      </p>

      <p>
        Bad: <span className={result}>{bad}</span>
      </p>

      <p>
        Total: <span className={result}>{countTotalFeedback}</span>
      </p>

      <p>
        Positive feedback:{' '}
        <span className={result}>{countPositiveFeedbackPercentage}%</span>
      </p>
    </>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
