import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
  //   console.log(props);
  const { state, handleAddVote } = props;
  return (
    <div className={css.wraper_btn}>
      {Object.keys(state).map(key => (
        <button
          className={css.btn}
          type="button"
          key={key}
          onClick={() => handleAddVote(`${key}`)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  state: PropTypes.object.isRequired,
  handleAddVote: PropTypes.func.isRequired,
};
