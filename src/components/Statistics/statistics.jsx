const Statistics = (props) => {
  console.log(props);
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const avg = total / 3;
  const positive = good / total;
  //conditional render
  //only show the values when there is a click
  return (
    <div>
      <h1>Statistics</h1>
      {(good === 0) & (neutral === 0) & (bad === 0) ? (
        <p>No feedback given</p>
      ) : (
        <>
          <p>good : {good}</p>
          <p>neutral : {neutral}</p>
          <p>bad : {bad}</p>
          <p>all :{total}</p>
          <p>average :{avg}</p>
          <p>positive :{positive} %</p>
        </>
      )}
    </div>
  );
};

export default Statistics;
