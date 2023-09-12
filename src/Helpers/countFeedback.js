export const countTotalFeedback = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  return total;
};

export const countPositiveFeedbackPercentage = (good, total) => {
  let positivePercentage = 0;
  if (good && !total) {
    return (positivePercentage = 100);
  }
  if (good && total) {
    return (positivePercentage = Math.ceil((good / total) * 100));
  }
  return positivePercentage;
};
