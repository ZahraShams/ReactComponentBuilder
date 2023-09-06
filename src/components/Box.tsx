
function Box(props) {
  const { children, borderSize } = props;
  return <div style={{ border: `${borderSize} solid red` }}>{...children}</div>;
}

export default Box