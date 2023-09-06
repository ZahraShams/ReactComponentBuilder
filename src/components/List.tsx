
function List({li = []}) {
  return (
    <ul>
      {li.map((i, index) => (
        <div key={index}>{i}</div>
      ))}
    </ul>
  );
}

export default List;   