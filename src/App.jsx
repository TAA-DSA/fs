import Header from "./components/Header/header";
import Content from "./components/Content/content";
import Total from "./components/Total/total";

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];
  //One way using reduce method
  // const totalExercise = parts.reduce(
  //   (total, parts) => total + parts.exercises,
  //   0
  // );

  //Another using forEach method
  let totalExercise = 0;
  parts.forEach((parts) => {
    totalExercise += parts.exercises;
  });

  return (
    <div>
      <Header course={course} />
      {parts.map((parts, index) => (
        <div key={index}>
          <Content name={parts.name} exercises={parts.exercises} />
        </div>
      ))}
      <Total exercises={totalExercise} />;
    </div>
  );
};

export default App;
