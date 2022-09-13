import { Component } from 'react';

import css from './Feedback.module.css';
// import Button from './Button';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleAddVote = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];
      // console.log('Проперти', { [propertyName]: value + 1 });
      return { [propertyName]: value + 1 };
    });
  };

  // Загальна кількість голосів
  countTotalFeedback() {
    console.log();

    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  }

  // Відсоток позитивних голосів у %
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    // console.log(this.state);
    return (
      <div>
        <p className={css.title}>Please leave feedback</p>
        {/* Рендер батонів */}
        {/* <Button
          css={css}
          state={this.state}
          handleAddVote={this.handleAddVote}
        /> */}
        <div className={css.wraper_btn}>
          <button
            className={[css.btn, css.good].join(' ')}
            type="button"
            onClick={() => this.handleAddVote('good')}
          >
            Good
          </button>
          <button
            className={[css.btn, css.neutral].join(' ')}
            type="button"
            onClick={() => this.handleAddVote('neutral')}
          >
            Neutral
          </button>
          <button
            className={[css.btn, css.bad].join(' ')}
            type="button"
            onClick={() => this.handleAddVote('bad')}
          >
            Bad
          </button>
        </div>
        <>
          {!this.countTotalFeedback() ? (
            <div>There is no feedback</div>
          ) : (
            <div>
              <p className={css.title}>Statistics</p>
              <p className={css.text}>
                Good: <span className={css.result}>{this.state.good}</span>
              </p>
              <p className={css.text}>
                Neutral:{' '}
                <span className={css.result}>{this.state.neutral}</span>
              </p>
              <p className={css.text}>
                Bad: <span className={css.result}>{this.state.bad}</span>
              </p>
              <p className={css.text}>
                Total:{' '}
                <span className={css.result}>{this.countTotalFeedback()}</span>
              </p>
              <p className={css.text}>
                Positive feedback:{' '}
                <span className={css.result}>
                  {this.countPositiveFeedbackPercentage()}%
                </span>
              </p>
            </div>
          )}
        </>
      </div>
    );
  }
}

// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

export default Feedback;
