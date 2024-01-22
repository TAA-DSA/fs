const Content = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
};

export default Content;
