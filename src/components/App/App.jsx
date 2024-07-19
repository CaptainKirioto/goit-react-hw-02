import { useState, useEffect } from "react";
import s from "./App.module.css";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification /Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("Feedback");
    if (savedFeedback?.length) {
      return JSON.parse(savedFeedback);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("Feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const handleReset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  let positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <div className={s.wrapper}>
        <Options
          updateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          handleReset={handleReset}
        />

        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            feedback={feedback}
            positiveFeedback={positiveFeedback}
            totalFeedback={totalFeedback}
          />
        )}
      </div>
    </>
  );
}

export default App;
