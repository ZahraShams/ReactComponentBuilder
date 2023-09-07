import { ComponentProp } from "./ComponentProp";

function List(props:ComponentProp) {
  const { li = [], nodeKey } = props;
  return (
    <ul id={nodeKey}>
      {li.map((i, index) => (
        <div key={index}>{i}</div>
      ))}
    </ul>
  );
}

export default List;
