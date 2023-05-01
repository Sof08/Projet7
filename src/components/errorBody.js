import '../styles/error.css';

function ErrorPage() {
	return (
        <div className="errorDiv">
            <h1 className="errorTitle">404</h1>
            <span className="errorText">Oups! La page que vous demandez n'existe pas.</span>
            <a href='/' className='errorLink'> Retourner sur la page d’accueil</a>
        </div>
    )
}
export default ErrorPage;