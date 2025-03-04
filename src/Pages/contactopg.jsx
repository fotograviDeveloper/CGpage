import React from 'react';
//import ContactSectionForm from '../Sections/ContactSection';
import BackButton from '../Components/Botones/Atrasbtn';
import './contactopg.css'
import Formulariocontact from '../Components/Information/Forms/contactform/Formulariocontact'
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component


/**
 * 
 */
const Contactopg = () => {
    return <div>
        <div className='botonCenter'><BackButton text="Volver Atrás" className="custom-back-button"/></div>
<div className='form02'><Formulariocontact></Formulariocontact></div>
     
    </div>;
}


// #endregion

export default Contactopg;