import s from "./Options.module.css";

function Options({ updateFeedback, totalFeedback, handleReset }) {
  return (
    <div className={s.buttons}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => handleReset()}>Reset</button>
      )}
    </div>
  );
}

export default Options;
