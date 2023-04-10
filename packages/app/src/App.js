import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';

// CSS
import './app.css';

const App = () => {
	// MF
	const HomePage = React.lazy(() => import('HomeApp/HomeApp'));
	const ContactPage = React.lazy(() => import('ContactApp/ContactApp'));

	return (
		<Router>
			<div>
				<Navbar color="light" light expand="md">
					<Nav className="mr-auto" navbar>
						<NavItem>
							<Link to="/">Home</Link>
						</NavItem>

						<NavItem>
							<Link to="/contact">Contact</Link>
						</NavItem>
					</Nav>
				</Navbar>
				<Routes>
					<Route
						index
						element={
							<React.Suspense fallback={<div>Loading...</div>}>
								<HomePage />
							</React.Suspense>
						}
					/>
					<Route
						path="/contact"
						element={
							<React.Suspense fallback={<div>Loading...</div>}>
								<ContactPage />
							</React.Suspense>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
