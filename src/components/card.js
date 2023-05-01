import '../styles/card.css'
function Card({ id, cover, title }) { 
	return (
	
        <li key={id} className='logement'>
           <a href={'/annonces/' + id}>
                <div className='logement_title_div'>
                    <img src={cover} alt={title}  className='logement_img'/>
                    <div className='logement_div_effect'></div>
                    <span className='logement_title'>{title}</span>
                </div>

           </a>
       </li>
	);
}
export default Card;