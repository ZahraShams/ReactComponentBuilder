import { useApp } from '../AppContext';

function Link(props) {
  const { onOpenModals } = useApp();
  const { text, actionOnComponentKey, key } = props;

  const handleOnClick= ()=>{
    onOpenModals(actionOnComponentKey);
  }
  return <a  onClick={handleOnClick}>{text}</a>;
}

export default Link