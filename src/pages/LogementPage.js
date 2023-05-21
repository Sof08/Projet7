import React from "react";
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Collapse from '../components/collapse';
import logements from '../annonces.json';
import Error from './error';
import '../styles/viewone.css';

function Logement(){
    const { id } = useParams()
    const logement = logements.find(logement => logement.id === id)
    if (logement === undefined) { 
        return <Error />
    }
    return(
      <div>
            <Header />
            <div className="logement-page">
                <div>
                    <img src="https://picsum.photos/800/400" className="img_log" alt="" />
                </div>
                <div className="logement-page_header">
                    <div className="logement-page_title">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                        <div className="logement_tags">
                            {logement.tags.map((tag, i) => (
                                <span>{tag}</span>
                            ))}
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
                <div className="logement-page_description_section">
                        <div className="logement-page_description_content">
                            <Collapse title="Description" content={logement.description} />
                        </div>
                    
                        <div className="logement-page_description_content">
                            <Collapse title="Équipements" content={logement.equipments.map((equipment, i) => (
                                    <li>{equipment}</li>
                            
                            ))} />
                        </div>
                </div>
            </div>         
        </div>
    );
}
export default Logement;