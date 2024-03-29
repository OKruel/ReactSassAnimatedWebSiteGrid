import React from 'react';

import realtor1 from '../assets/img/realtor-1.jpeg';
import realtor2 from '../assets/img/realtor-2.jpeg';
import realtor3 from '../assets/img/realtor-3.jpeg';

const Realtors = props => (
    <div className='realtors'>
        <h3 className='heading-3'>Top 3 realtors</h3>
        <div className='realtors__list'>
            <img src={realtor1} alt='realtor 1' className='realtors__img'></img>
            <div className='realtors__details'>
                <h4 className='heading-4 heading-4--light'>Erik Feinman</h4>
                <p className='realtors__sold'>245 houses sold</p>
            </div>

            <img src={realtor2} alt='realtor 2' className='realtors__img'></img>
            <div className='realtors__details'>
                <h4 className='heading-4 heading-4--light'>Kim Brown</h4>
                <p className='realtors__sold'>212 houses sold</p>
            </div>

            <img src={realtor3} alt='realtor 3' className='realtors__img'></img>
            <div className='realtors__details'>
                <h4 className='heading-4 heading-4--light'>Tobey Ramsey</h4>
                <p className='realtors__sold'>198 houses sold</p>
            </div>
        </div>
    </div>
)

export default Realtors;