import './App.css';

import { AppProvider } from './AppContext';
import RenderResult from './screens/RenderResult';
import data1 from '../data.json';
import data2 from '../data2.json';

function App() {
/* I temporarily used same files statically for required JSON structure

I modified data2.json according to project requirement related to : adding behavior to components

*/
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
