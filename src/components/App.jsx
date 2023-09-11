import React, { Component } from 'react';
import Section from './Section/Section';
import {
  countPositiveFeedbackPercentage,
  countTotalFeedback,
} from './Helpers/countFeedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  HandleButton = e => {
    const { value } = e.target;
    this.setState(prev => ({ [value]: prev[value] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(good, total);

    return (
      <Section
        title="Please leave feedback"
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        positivePercentage={positivePercentage}
        HandleButton={this.HandleButton}
      ></Section>
    );
  }
}
