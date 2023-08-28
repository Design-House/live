import React from 'react';
import { useEffect } from 'react';
import Innerbanner from '../Common/Banners/Innerbanner';
import Contactform from './Contactform';
import InnerImageBanner from '../Common/Banners/InnerImageBanner';
import './Contact.css'




const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const  data ={
    pageTitle: "Contact",
    pageHeading: "How can we help you?",
    pageContent: "If you would like more information about our services, please fill out our contact form below and a Design House team member will contact you at the earliest.",
  };

  const dataNew ={ 
    classTitle: "banner-contact"
  };

  document.title = "Contact";

  return (
    <div className='contact'>
      <div className='container'>
            <Innerbanner data={data} />
            
       </div>

       <InnerImageBanner  data={dataNew}/>
       <Contactform />
    </div>
  )
}

export default Contact