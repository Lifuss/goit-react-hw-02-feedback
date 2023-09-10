import PropTypes from 'prop-types';

export const FeedbackStats = ({
  good,
  bad,
  neutral,
  positivePercentage,
  total,
}) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

FeedbackStats.propTypes = {
  good: PropTypes.number,
  bad: PropTypes.number,
  neutral: PropTypes.number,
  positivePercentage: PropTypes.number,
  total: PropTypes.number,
};
