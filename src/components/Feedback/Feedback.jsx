import s from "./Feedback.module.css";

function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className={s.feedback}>
      <ul className={s.feedbackList}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
      </ul>
      <ul className={s.feedbackSummary}>
        <li>Total: {totalFeedback}</li>
        <li>Positive: {positiveFeedback}%</li>
      </ul>
    </div>
  );
}

export default Feedback;
