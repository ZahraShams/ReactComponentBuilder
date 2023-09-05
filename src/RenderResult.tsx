import { useApp } from './AppContext';

function RenderResult() {

    const {elementTree} = useApp();

  return (
    <>{elementTree}</>
  )
}

export default RenderResult