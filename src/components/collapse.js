import '../styles/about.css';
import arrow from '../assets/Vector.png';
import { useState } from 'react';

function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (
        <>
            <div className="collapse_div">
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)} >
                    {title}
                    <img className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'} src={arrow} alt="Afficher" />
                </h3>
                <div className={toggle ? 'collapse_contenu' : 'collapse_contenu_cache'}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <ul key={index}>{item}</ul>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </>
    )
}
export default Collapse;