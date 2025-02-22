import React from 'react';
import Navbar from './assets/components/Navbar';
import Work from "./assets/components/Work";
import Stripes from "./assets/components/stripes";
import Products from "./assets/components/Products";

function App(){
  return (
    <div className='w-full h-full font-["satoshi"] bg-zinc-900 text-white'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
    </div>
  )
}

export default App;