export const FeedbackRequest = ({ HandleButton }) => {
  return (
    <div>
      <h2>title</h2>
      <button onClick={HandleButton} value="good">
        Good
      </button>
      <button onClick={HandleButton} value="neutral">
        Neutral
      </button>
      <button onClick={HandleButton} value="bad">
        Bad
      </button>
    </div>
  );
};
