import React from 'react';
import { Link } from 'react-router-dom';
import MyRouter from './router/index'; 

function App() {
   return (
      <div>
         <Link to="/">Home</Link>
         <Link to="/about-us">About Us</Link>
         <Link to="/contact-us">Contact</Link>
         <MyRouter />
      </div>
   );
}

export default App;
