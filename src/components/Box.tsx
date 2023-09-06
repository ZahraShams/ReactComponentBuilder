import { ComponentProp } from "./ComponentProp";

function Box(props:ComponentProp) {
  const { children, borderSize } = props;
  return <div style={{ border: `${borderSize} solid red` }}>{...children}</div>;
}

export default Box