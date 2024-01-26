const Statistics = (props) => {
  console.log(props);
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const avg = total / 3;
  const positive = good / total;

  return (
    <div>
      <h1>Statistics</h1>

      <p>No feedback given</p>
      <p>good : {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad : {bad}</p>
      <p>total :{total}</p>
      <p>average :{avg}</p>
      <p>positive :{positive} %</p>
    </div>
  );
};

export default Statistics;
