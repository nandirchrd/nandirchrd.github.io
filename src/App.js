import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer, Navbar } from './core-ui';
import { Home, Blogs, Blog, Photos, Photo } from './pages';

function App() {
	useEffect(() => {
		// Comp Did Mount
	}, []);
	return (
		<>
			{/* NAVBAR */}
			<Navbar />
			<Routes>
				<Route index path='/' element={<Home />} />
				<Route index path='/blogs' element={<Blogs />} />
				<Route index path='/blogs/:slug' element={<Blog />} />
				<Route index path='/photos' element={<Photos />} />
				<Route index path='/photos/:slug' element={<Photo />} />
				<Route index path='*' element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
