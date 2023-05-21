import React from "react";
import Header from '../components/header';
import '../styles/viewone.css';

function Logement(){
    return(
      <div>
        <Header />
      
        <div className="logement-page">
            <div>
                <img src="https://picsum.photos/800/400" className="img_log" alt="" />
            </div>
            <div className="logement-page_header">
                <div className="logement-page_title">
                    <h1>Cozy Loft</h1>
                    <h2>Paris</h2>
                    <div className="logement_tags">
                        <span>Cozy</span>
                        <span>Canal</span>
                        <span>Paris 10</span>
                    </div>
                </div>
                <div className="logement-page_owner">
                    <div className="owner_details">
                        <h3>Alexandre Dumas</h3>
                        <div className="logement-owner_badge"></div>
                    </div>
                    <div className="logement-owner_stars">
                        <span className="on">☆</span>
                        <span className="on">☆</span>
                        <span className="on">☆</span>
                        <span className="off">☆</span>
                        <span className="off">☆</span>
                    </div>

                </div>
            </div>

            <div className="logement-page_description">
                <p>description</p>
                <p>paragraph</p>
            </div>
            <div className="logement-page_description">
                <p>description</p>
                <p>paragraph</p>

            </div>



            

            </div>         
        </div>
    );
}
export default Logement;