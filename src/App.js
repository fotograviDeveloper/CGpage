import React from 'react';
//import Navbar from './Components/Navbar/navbar';
import Principal from './Components/principal';
import  ContactPage from './Components/Contacto';
import Error404 from './Components/error404';
import Footer from '../src/Components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import ServiciosPage from './Components/Pages/Servicios';
import NosotrosPage from '../src/Pages/Nosotros';
function App() {
  return (
    <div className="App">
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Principal/>} />
<Route path='/abaut' element={< ContactPage/>} />
<Route path='/Servicios' element={ <ServiciosPage/>}/>
<Route path='/*' element={< Error404/>} />
<Route path='/Nosotros' element={<NosotrosPage/>} />
</Routes>

<Footer />
</BrowserRouter>
    </div>
  );
}

export default App;
