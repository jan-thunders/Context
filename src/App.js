import React from 'react';
import Hello from "./Component/Hello"
import Hii from './Component/Hii';
import CricketerProvider from './context/CricketerProvider';

function App() {
  return (
    <div> 
        {/* <Hii />  */}
        <Hello />
      
      
      {/* <CricketerProvider> 
         <Hii />
        <Hello />
      </CricketerProvider> */}


    </div>
  );
}

export default App;
