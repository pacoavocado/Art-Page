import React from 'react'

function NavBar({currentPage, handlePageChange}) {
    return (
      <>
        <ul class='nav'>
            <li className='nav-item'>
                <a href='#Home' onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
            </li>
        </ul>
            <li className='nav-item'>
                <a href='#About' onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About</a>
            </li>
            <li className='nav-item'>
                <a href='#Artwork' onClick={() => handlePageChange('Artwork')} className={currentPage === 'Artwork' ? 'nav-link active' : 'nav-link'}>Artwork</a>
            </li>
            <li className='nav-item'>
                <a href='#Contact' onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact</a>
            </li>
      </>  
    )

}

export default NavBar;
