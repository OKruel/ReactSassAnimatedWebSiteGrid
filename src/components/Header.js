import React from 'react';
//IMGs
import logo from '../assets/img/logo.png';
import bbcLogo from '../assets/img/logo-bbc.png';
import biLogo from '../assets/img/logo-bi.png';
import forbesLogo from '../assets/img/logo-forbes.png';
import techLogo from '../assets/img/logo-techcrunch.png'

const Header = props => (
    <div className='header'>
        <img src={logo} alt='Nexter Logo' className='header__logo'></img>
        <h3 className='heading-3'>Your own home:</h3>
        <h1 className='heading-1'>The ultimate personal freedom</h1>
        <button className='btn header__btn'>View our properties</button>
        <div className='header__seenon-text'>As seen on</div>
        <div className='header__seenon-logos'>
            <img src={bbcLogo} alt='BBC logo'></img>
            <img src={forbesLogo} alt='Forbes logo'></img>
            <img src={techLogo} alt='Tech logo'></img>
            <img src={biLogo} alt='BI logo'></img>
        </div>

    </div>
)

export default Header;