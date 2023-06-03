import React, {useState} from 'react';

import './App.css';


function App() {

  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="wrapper">
        <div className="card">
          <div className="cardbody">
            <h2>Counter App</h2>
            <p>{count}</p>
            <button onClick={()=>setCount(count +1)}>Increament</button>
            <button onClick={()=>setCount(count -1)}>Decreament</button>
            <button onClick={()=>setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
