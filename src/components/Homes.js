import React from 'react';
//IMGs
import house1 from '../assets/img/house-1.jpeg';
import house2 from '../assets/img/house-2.jpeg';
import house3 from '../assets/img/house-3.jpeg';
import house4 from '../assets/img/house-4.jpeg';
import house5 from '../assets/img/house-5.jpeg';
import house6 from '../assets/img/house-6.jpeg';
//SVGs
import Heart from '../assets/svg/heart.svg';
import MapPin from '../assets/svg/map-pin.svg';
import Key from '../assets/svg/key.svg';
import Profile from '../assets/svg/profile-male.svg';
import Expand from '../assets/svg/expand.svg';

const Homes = props => (
    <div className='homes'>
        <div className='home'>
            <img src={house1} alt='home1' className='home__img'></img>
            <Heart className='home__like' />
            <h5 className='home__name'>Beautiful Family House</h5>
            <div className='home__location'>
                <MapPin />
                <p>USA</p>
            </div>
            <div className='home__rooms'>
                <Profile />
                <p>5 rooms</p>
            </div>
            <div className='home__area'>
                <Expand />
                <p>325 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
                <Key />
                <p>$1.200.000,00</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
            <img src={house2} alt='home1' className='home__img'></img>
            <Heart className='home__like' />
            <h5 className='home__name'>Modern Glass Villa</h5>
            <div className='home__location'>
                <MapPin />
                <p>Canada</p>
            </div>
            <div className='home__rooms'>
                <Profile />
                <p>6 rooms</p>
            </div>
            <div className='home__area'>
                <Expand />
                <p>450 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
                <Key />
                <p>$275.000,00</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
            <img src={house3} alt='home1' className='home__img'></img>
            <Heart className='home__like' />
            <h5 className='home__name'>Cozy Country House</h5>
            <div className='home__location'>
                <MapPin />
                <p>UK</p>
            </div>
            <div className='home__rooms'>
                <Profile />
                <p>4 rooms</p>
            </div>
            <div className='home__area'>
                <Expand />
                <p>250 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
                <Key />
                <p>$850.000,00</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
            <img src={house4} alt='home1' className='home__img'></img>
            <Heart className='home__like' />
            <h5 className='home__name'>Large Rustical Villa</h5>
            <div className='home__location'>
                <MapPin />
                <p>Portugal</p>
            </div>
            <div className='home__rooms'>
                <Profile />
                <p>6 rooms</p>
            </div>
            <div className='home__area'>
                <Expand />
                <p>325 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
                <Key />
                <p>$1.950.000,00</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
            <img src={house5} alt='home1' className='home__img'></img>
            <Heart className='home__like' />
            <h5 className='home__name'>Majestic Palace House</h5>
            <div className='home__location'>
                <MapPin />
                <p>Germany</p>
            </div>
            <div className='home__rooms'>
                <Profile />
                <p>18 rooms</p>
            </div>
            <div className='home__area'>
                <Expand />
                <p>4230 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
                <Key />
                <p>$9.500.000,00</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
        </div>

        <div className='home'>
            <img src={house6} alt='home1' className='home__img'></img>
            <Heart className='home__like' />
            <h5 className='home__name'>Modern Family Apartment</h5>
            <div className='home__location'>
                <MapPin />
                <p>Italy</p>
            </div>
            <div className='home__rooms'>
                <Profile />
                <p>3 rooms</p>
            </div>
            <div className='home__area'>
                <Expand />
                <p>180 m<sup>2</sup></p>
            </div>
            <div className='home__price'>
                <Key />
                <p>$600.000,00</p>
            </div>
            <button className='btn home__btn'>Contact realtor</button>
        </div>
    </div>
)

export default Homes;