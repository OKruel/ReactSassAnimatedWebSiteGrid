import React from 'react';
import Global from '../assets/svg/global.svg';
import Key from '../assets/svg/key.svg';
import Lock from '../assets/svg/lock.svg';
import MapPin from '../assets/svg/map-pin.svg';
import Presentation from '../assets/svg/presentation.svg';
import Trophy from '../assets/svg/trophy.svg';

const Features = props => (
    <div className='features'>
        <div className='feature'>
            <Global className='feature__icon' />
            <h4 className='heading-4 heading-4--dark'>World's best luxury homes</h4>
            <p className='feature__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className='feature'>
            <Trophy className='feature__icon' />
            <h4 className='heading-4 heading-4--dark'>Only the best properties</h4>
            <p className='feature__text'>Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia.</p>
        </div>
        <div className='feature'>
            <MapPin className='feature__icon' />
            <h4 className='heading-4 heading-4--dark'>All homes in top locations</h4>
            <p className='feature__text'>Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
        </div>
        <div className='feature'>
            <Key className='feature__icon' />
            <h4 className='heading-4 heading-4--dark'>New home in one week</h4>
            <p className='feature__text'>Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='feature'>
            <Presentation className='feature__icon' />
            <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
            <p className='feature__text'>Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus.</p>
        </div>
        <div className='feature'>
            <Lock className='feature__icon' />
            <h4 className='heading-4 heading-4--dark'>Secure payments on nexter</h4>
            <p className='feature__text'>Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
        </div>
    </div>
)

export default Features;
