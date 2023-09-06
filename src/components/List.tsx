function List(props:ComponentProp) {
  const { li = [] } = props;
  return (
    <ul>
      {li.map((i, index) => (
        <div key={index}>{i}</div>
      ))}
    </ul>
  );
}

export default List;
