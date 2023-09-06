import { useApp } from '../AppContext';

function Button(props) {
  const { onOpenModals } = useApp();
  const { text, actionOnComponentKey } = props;

  const handleOnClick= ()=>{
    onOpenModals(actionOnComponentKey);


  }

    return <button onClick={handleOnClick}>{text}</button>;
  }

export default Button