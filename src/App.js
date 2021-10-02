import './App.css';
import { useState } from 'react';
import Users from './components/Users/Users';

function App() {
  const [famillar, setFamillar] = useState(false);

  return (
    <div className="App">
      <h1>Is Famillar: {famillar.toString()}  </h1>

      <button onClick={() => setFamillar(!famillar)} >Toggle Friend</button>
      <Users famillar={famillar} ></Users>

    </div>
  );
}

export default App;
