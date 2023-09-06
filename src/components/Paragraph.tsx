import { ComponentProp } from "./ComponentProp";

function Paragraph(props:ComponentProp) {
  const { text } = props;
    return <p>{text}</p>;
  }

export default Paragraph