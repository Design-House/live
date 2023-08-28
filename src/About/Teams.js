import React from 'react';
import tms from '../Json/Teamscontent.json';

const Teams = () => {
  return (
    <div className="team section-wrap">
                <div className="container"> 
                    <div className="section-head pb-5 mb-3 text-center" >
                        <h2>The People</h2>
                    </div>
                    <div className="people">
                        <div className="row">
                        {tms && tms.map(Teams =>{
                        return(
                                <div className="col-lg-3 col-md-4 col-sm-6" key={Teams.id} >
                                    <img src={Teams.tmImg}   alt="" title="" className="people-img" /> <br/>
                                    <b className="people-name">{Teams.tmName}</b>
                                    <p className="role-txt">{Teams.tmRole}</p>
                                </div>
                              )
                        })}
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Teams