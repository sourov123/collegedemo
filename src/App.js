import React from 'react';
import Footer from './Components/Layout/Footer';
import Navbar from './Components/Layout/Navbar';
import { BrowserRouter } from "react-router-dom";
import Routing from './Components/Pages/Routing';

function App() {

  return (
    <BrowserRouter basename={`${process.env.PUBLIC_URL}`}>
      <React.Suspense fallback={<div className='global-loader'><img src={`${process.env.PUBLIC_URL}/assets/images/loader.svg`} className="loader-img" alt="img" /></div>}>
        <Navbar />
        <div className="container-fluid  p-0">
          <Routing />
        </div>
        <Footer />
      </React.Suspense>
    </BrowserRouter>
  )
}
export default App;
