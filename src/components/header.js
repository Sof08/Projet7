import '../styles/header.css'
import Logo from '../assets/LOGO.png'


function Header (){
	return (
        <header>
            <nav className="navbar">
                <div>
                    <img src={Logo} alt="Logo" className="logo_nav" />
                </div>
                <div className="navlink">
                    <ul className="list-inline">
                        <li className='accueilpage'><a href="/">Accueil</a></li>
                        <li className='apropospage'><a href="/about">A Propos</a></li>
                    </ul>
                </div>
            </nav>
        </header>
	)
}
export default Header;