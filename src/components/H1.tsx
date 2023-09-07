import { ComponentProp } from "./ComponentProp";

function H1(props:ComponentProp) {
  let { text, nodeKey } = props;
  
  return <h1 id={nodeKey} style={props}>{text}</h1>;
}

export default H1;
