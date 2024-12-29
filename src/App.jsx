import './App.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import Question from './Components/Question';
import Letter from './Components/Letter';

function App() {
	const router = createHashRouter([
		{
			path: "/", element: <><Home/></>
		},
		{
			path: "/question", element: <><Question/></>
		},
		{
			path: "/letter", element: <><Letter/></>
		}
	]);
	return (
		<RouterProvider router = {router} />
	);
}

export default App;
