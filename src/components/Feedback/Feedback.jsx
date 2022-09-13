import { Component } from 'react';

import css from './Feedback.module.css';
import Button from './Button';
import Notification from '../Notification/Notification';

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

  // Відсоток позитивних голосів
  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    // const { good, neutral, bad } = this.state;

    return (
      <div>
        <p className={css.title}>Please leave feedback</p>

        {/* Рендер батонів */}
        <Button
          css={css}
          state={this.state}
          handleAddVote={this.handleAddVote}
        />

        <>
          {!this.countTotalFeedback() ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <>
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
            </>
          )}
        </>
      </div>
    );
  }
}

export default Feedback;
