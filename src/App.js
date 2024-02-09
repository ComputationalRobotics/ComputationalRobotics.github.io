import React from 'react'; // Importing the React library
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importing BrowserRouter for SPA routing, Routes for route definitions, Route for a single route
import Header from './components/Header'; // Importing Header component to be placed at the top of every page
import HomePage from './components/HomePage'; // Importing HomePage component for the root path
import PeoplePage from './components/PeoplePage'; // Importing PeoplePage component for '/people' path
import ResearchPage from './components/ResearchPage'; // Importing ResearchPage component for '/research' path
import ContactPage from './components/ContactPage'; // Importing ContactPage component for '/contact' path
import PublicationsPage from './components/PublicationsPage'; // Importing PublicationsPage component for '/publications' path
import Footer from './components/Footer'; // Importing Footer component to be placed at the bottom of every page


// Importing the main stylesheet for styling the app
import './App.css';

// Defining the main App component
function App() {
  return (
    // Router component to wrap around the application and enable routing
    <Router>
      <Header /> {/* Placing the Header component that will appear across all routes*/}
      <main> {/* This main tag will wrap the Routes and allow for the sticky footer */}
        <Routes> 
          <Route path="/people" element={<PeoplePage />} />
        {/*  <Route path="/research" element={<ResearchPage />} /> */}
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

