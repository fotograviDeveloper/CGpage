import React from 'react';
import './ContactSection.css';

import ContactForm from '../Components/Information/Forms/contactform/Formulariocontact';
import Infoform from '../Components/Information/nosotros/InfoForm';
const ContactSectionForm = () => {
    return(
 <div className='contact-section'>
    <div className='contact-content'> <Infoform ></Infoform><ContactForm></ContactForm  >
</div>
</div>
)};
export default ContactSectionForm;