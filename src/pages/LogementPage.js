import React from "react";
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/Footer'
import Collapse from '../components/collapse';
import Carousel from "../components/carousel"
import logements from '../annonces.json';
import RatingCal from "../components/rating";

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
                    <Carousel images={logement.pictures} />
                </div>
                <div className="logement-page_header">
                    <div className="logement-page_title">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                        <div className="logement_tags">
                            {logement.tags.map((tag, i) => (
                                <span key={i}>{tag}</span>
                            ))}
                        </div>
                    </div>
                    <div className="logement-page_owner">
                        <div className="owner_details">
                            <h3>{logement.host.name}</h3>
                            <img src={logement.host.picture} alt="host_img" className="logement-owner_badge"/>
                        </div>
                        <div className="logement-owner_stars">
                            <RatingCal value={logement.rating} />
                        </div>

                    </div>
                </div>
                <div className="logement-page_description_section">
                        <div className="logement-page_description_content">
                            <Collapse title="Description" content={logement.description} />
                        </div>
                    
                        <div className="logement-page_description_content">
                            <Collapse title="Équipements" content={logement.equipments.map((equipment, i) => (
                                    <li key={i}>{equipment}</li>
                            
                            ))} />
                        </div>
                </div>
            </div>   
			<Footer />

        </div>
    );
}
export default Logement;