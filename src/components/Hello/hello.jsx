const Hello = (props) => {
  const { name, age } = props;
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - age;
  };
  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you are born in {bornYear()}</p>
    </div>
  );
};

export default Hello;
