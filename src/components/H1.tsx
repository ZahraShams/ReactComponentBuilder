import { ComponentProp } from "./ComponentProp";

function H1(props:ComponentProp) {
  let { text } = props;
  return <h1 style={props}>{text}</h1>;
}

export default H1;
