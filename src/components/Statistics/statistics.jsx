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
          <table>
            <tr>
              <td>good </td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>netural </td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>all</td>
              <td>{total}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{avg}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positive}</td>
            </tr>
          </table>
        </>
      )}
    </div>
  );
};

export default Statistics;
