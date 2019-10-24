import React from 'react';

const Footer = props => (
    <div className='footer'>
        <ul className='nav'>
            <li className='nav__item'><a href='#' className='nav__link'>Find the home of your dreams</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Request proposal</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Download home planner</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Contact us</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Submit your property</a></li>
            <li className='nav__item'><a href='#' className='nav__link'>Come work with us</a></li>
        </ul>
        <p className='copyright'>
            &copy; 2019 by Olavo Kruel. Project made with React and Sass. Created only for portfolio purposes. 
        </p>
    </div>
)

export default Footer;