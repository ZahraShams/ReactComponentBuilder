import './App.css';

import { AppProvider } from './AppContext';
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

export default App;
