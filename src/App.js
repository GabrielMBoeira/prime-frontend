import React from 'react';
import MyRouter from './router/index'; 
import Navbar from './components/Navbar';

function App() {
   return (
      <div className='main'>
         <Navbar />
         <MyRouter />
      </div>
   );
}

export default App;
