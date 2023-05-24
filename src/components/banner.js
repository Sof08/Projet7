import '../styles/Banner.css'

function Banner() {
    const texte = 'Chez vous, partout et ailleurs'
    return (
        <div className='banner'>
            <span className="text-banner_">{texte}</span>
        </div>
    )
}

export default Banner

