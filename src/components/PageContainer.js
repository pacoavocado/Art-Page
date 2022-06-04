import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Artwork from './pages/Artwork';
import About from './pages/About';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Artwork') {
            return <Artwork />;
        }
        return <Contact />;

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}