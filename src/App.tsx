import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Layout/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Write from './pages/Write';
import Board from './pages/Board';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'login', element: <Login /> },
			{ path: 'write', element: <Write /> },
			{ path: 'board', element: <Board /> },
		],
	},
]);

const App: React.FC = () => {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
};

export default App;
