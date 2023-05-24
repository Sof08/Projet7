import '../styles/footer.css'
import logo_footer from '../assets/logo_footer.png'

function Footer (){
    return(
        <footer className='footer'>
            <img src={logo_footer} alt='logo-kasa' className='logo_footer' />
            <p className='footer_p'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;