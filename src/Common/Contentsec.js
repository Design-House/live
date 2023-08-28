import React from 'react';
import Aboutcontent from '../Json/Aboutcontent.json';



const Contentsec = () => {
  return (
    
        <div className="works-content text-left">
           
                {
                  Aboutcontent && Aboutcontent.map(Aboutcontent =>{
                        return(
                        <div className="row" key={Aboutcontent.id} >
                            <div class="col-lg-6 col-sm-12">
                                <div class="w-images">
                                    <img src={Aboutcontent.imgs} alt="" title="" class="img-md-100" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12 position-relative">
                                <div >
                                    <div className="w-header">
                                        <h4>{Aboutcontent.title}</h4>
                                    </div>
                                    <div className="w-content pt-1 mt-3 mb-4">
                                        <p>{Aboutcontent.content}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        )
                    })
                }
                    
                
        </div>
               
  )
}

export default Contentsec