import { ComponentProp } from "./ComponentProp";

function Box(props:ComponentProp) {
  const { children, borderSize, nodeKey } = props;
  return <div id={nodeKey} style={{ border: `${borderSize} solid red` }}>{...children}</div>;
}

export default Box