import Header from '../components/header'
import Banner from '../components/banner'
import ListCard from '../components/ListCard'
import Footer from '../components/Footer'




export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<ListCard />
			<Footer />
		</div>
	)
}