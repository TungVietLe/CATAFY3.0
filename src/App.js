import React, { useEffect, useState, createContext } from 'react';
import './App.scss';
import './Styles/Console.scss';
import './Styles/Landing.scss';
import './Styles/Admin.scss';
import './Styles/Store.scss';
import { Routes, Route } from 'react-router-dom';

//firebase
import { auth } from './firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

//routes
import ConsoleRoutes from './Routes/ConsoleRoutes';
import StoreRoutes from './Routes/StoreRoutes';
import AdminRoutes from './Routes/AdminRoutes';
//Screens
import LandingScreen from './Screens/Landing/LandingScreen';
import LoginPage from './Screens/Landing/Components/LoginPage';
import PricingPage from './Screens/Landing/Components/PricingPage';

export const UserContext = createContext();

function App() {
	const [user, setUser] = useState(null);
	useEffect(() => {
		onAuthStateChanged(auth, (data) => {
			console.count('Auth Rendered');
			setUser(data);
		});
	}, []);

	return (
		<UserContext.Provider value={user}>
			<Routes>
				<Route path="/" element={<LandingScreen />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/pricing" element={<PricingPage />} />
				<Route path="/about" element={<div>about</div>} />
				<Route path="/career" element={<div>career</div>} />

				<Route path="/console/*" element={user ? <ConsoleRoutes /> : <LoginPage />} />
				<Route path="/:storeidURL/*" element={<StoreRoutes />} />
				<Route path="/:storeidURL/admin/*" element={<AdminRoutes />} />
				<Route path="*" element={<div>Not found</div>} />
			</Routes>
		</UserContext.Provider>
	);
}

export default App;
