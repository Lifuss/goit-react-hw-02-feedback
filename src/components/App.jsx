import React, { Component } from 'react';
import { FeedbackRequest } from './FeedbackRequest/FeedbackRequest';
import { FeedbackStats } from './FeedbackStats/FeedbackStats';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  HandleButton = e => {
    const { value } = e.target;
    this.setState(prev => ({ [value]: prev[value] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState(prev => ({
      total: prev.good + prev.bad + prev.neutral,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(({ good, total }) => {
      if (good && !total) {
        return { positivePercentage: 100 };
      }
      if (good && total) {
        return { positivePercentage: Math.ceil((good / total) * 100) };
      }
    });
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;
    return (
      <div>
        <FeedbackRequest HandleButton={this.HandleButton} />
        <FeedbackStats
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
