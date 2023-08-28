import React from 'react';
import './Faq.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import faqsdetails from '../Json/Faqcontent.json';

const Faq = () => {

  

  return (
    <div className='section-wrap faq-wrap'>
      <div className="container">
        
        <h2 className="text-center text-dark fw-bold mb-5">Frequently Asked Questions</h2>
        <div className="row justify-content-center">
            <div className="col-12 col-lg-12">
              <div className="card">
             
                <Accordion>
                {faqsdetails && faqsdetails.map(faqs =>{
                        return(
                    <AccordionItem key={faqs.id}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                              <h5>{faqs.title}</h5>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>{faqs.content}</p>

                            {faqs.extra? <p>{faqs.extra}</p>:""}
                            {faqs.list ?
                                <ul>
                                  <li>User-research report</li>
                                  <li>UX audit report (if revamping an existing design)</li>
                                  <li>User persona</li>
                                  <li>Customer journey maps</li>
                                  <li>Sitemap</li><li>Wireframes</li>
                                  <li>UI sketches</li>
                                  <li>Interactive prototypes</li>
                                  <li>Design systems/style guides</li>
                                </ul>
                                : ""
                            }
                        </AccordionItemPanel>
                    </AccordionItem>
                     )})}
                </Accordion>
               
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faq