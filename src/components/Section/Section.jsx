import { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  title = this.props.title;

  handleAddVote = propertyName => {
    this.setState(prevState => {
      const value = prevState[propertyName];

      return { [propertyName]: value + 1 };
    });
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    return (
      <section>
        <h1>{this.title}</h1>

        <FeedbackOptions
          state={this.state}
          handleAddVote={this.handleAddVote}
        />

        <>
          {!this.countTotalFeedback() ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </>
      </section>
    );
  }
}

export default Feedback;
