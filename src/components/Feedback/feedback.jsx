import { useState } from "react";

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    console.log("Button initated");
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    console.log("Button initated");
  };

  const handleBad = () => {
    setBad(bad + 1);
    console.log("Button initated");
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGood}>good</button>
      <button onClick={handleNeutral}>neutral</button>
      <button onClick={handleBad}>bad</button>
      <p>good: {good}</p>
      <p>neutral: {neutral}</p>
      <p>bad: {bad}</p>
    </div>
  );
};

export default Feedback;
