
import Home from './pages/home';
import About from './pages/about';
import Error from './pages/error';




import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/Home/",
		element: <Home />
	},
	{
		path: "/About/",
		element: <About />
	},
	{
		path: "*",
		element: <Error />
	}


	

]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;