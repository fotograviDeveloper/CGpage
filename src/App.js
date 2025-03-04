import React from 'react';
//import Navbar from './Components/Navbar/navbar';
import Principal from './Pages/principal';
import  ContactPage from './Components/Contacto';
import Error404 from './Components/Error/error404';
import Footer from '../src/Components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Contactopg from './Pages/contactopg';
import ServiciosPage from './Pages/Servicios';
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
<Route path='/contacto' element={ <Contactopg/>}/>
<Route path='/*' element={< Error404/>} />
<Route path='/Nosotros' element={<NosotrosPage/>} />
</Routes>

<Footer />
</BrowserRouter>
    </div>
  );
}

export default App;
