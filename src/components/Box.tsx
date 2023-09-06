import React from 'react'

function Box({ children,borderSize  }) {
  return <div style={{ border: `${borderSize} solid red` }}>{...children}</div>;
}

export default Box