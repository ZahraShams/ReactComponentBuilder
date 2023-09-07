import { ComponentProp } from "./ComponentProp";

function Paragraph(props:ComponentProp) {
  const { text, nodeKey } = props;
    return <p id ={nodeKey}>{text}</p>;
  }

export default Paragraph