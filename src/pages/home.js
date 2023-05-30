import Header from '../components/header';
import Banner from '../components/banner';
import ListCard from '../components/ListCard';
import Footer from '../components/Footer';
import image from '../assets/IMG.png';



export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner image={image} text="Chez vous, partout et ailleurs" />
			<ListCard />
			<Footer />
		</div>
	)
}