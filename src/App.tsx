import './App.css';

import { AppProvider } from './AppContext';
import RenderResult from './screens/RenderResult';
import data1 from '../../data.json';
import data2 from '../../data2.json';

function App() {

  const js = data1;
  const js2 = data2;
  return (
    <>
      <AppProvider  data={js2}>
        <RenderResult />
      </AppProvider>
    </>
  );
}

export default App;
