import './App.css'

import { AppProvider, useApp, AppContext } from './AppContext';
import RenderResult from './screens/RenderResult';

function App() {

 


  return (
    <>
      <AppProvider>
        <RenderResult />
      </AppProvider>
    </>
  );
}

export default App
