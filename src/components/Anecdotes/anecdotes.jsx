import { useState } from "react";
// Anecdote component
const Anecdotes = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  //generate random number
  const randomNumber = Math.floor(Math.random() * anecdotes.length);

  //assign the random number to selected - state
  const handleClick = () => {
    setSelected(randomNumber);
  };

  //object with key as anecdote and value is vote initialized as 0

  const obj = {};
  for (const key in anecdotes) {
    obj[key] = 0;
  }

  //State to manage the vote count
  const [vote, setVote] = useState(obj);

  const handleVote = () => {
    let copy = { ...vote };
    copy[selected] += 1;
    setVote(copy);
    console.log(copy);
  };

  //Ex 1.14 final version show the highest vote
  //anecdote

  let voteObj = Object.values(vote);

  let maxValue = Math.max(...voteObj);

  let maxKey = voteObj.indexOf(maxValue);

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes.</p>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdotes</button>
      </div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxKey]}</p>
    </div>
  );
};

export default Anecdotes;
