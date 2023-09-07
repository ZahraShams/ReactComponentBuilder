import { ComponentProp } from "./ComponentProp";

function H2(props:ComponentProp) {
  let { text, styles, nodeKey } = props;
  return <h2 id={nodeKey} style={props}>{text}</h2>;
}

export default H2;   