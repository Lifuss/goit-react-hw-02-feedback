import { FeedbackRequest } from 'components/FeedbackRequest/FeedbackRequest';
import { FeedbackStats } from 'components/FeedbackStats/FeedbackStats';
import React from 'react';
import PropTypes from 'prop-types';

const Section = ({
  title,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  HandleButton,
}) => {
  return (
    <section>
      <h1>{title}</h1>
      <FeedbackRequest HandleButton={HandleButton} />
      <h2>Statistics</h2>
      <FeedbackStats
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        positivePercentage={positivePercentage}
      />
    </section>
  );
};

Section.propTypes = {
  HandleButton: PropTypes.func,
  title: PropTypes.string,
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};

export default Section;
