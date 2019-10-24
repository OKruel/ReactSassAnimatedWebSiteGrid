import React from 'react';
//IMGs
import image1 from '../assets/img/gal-1.jpeg';
import image2 from '../assets/img/gal-2.jpeg';
import image3 from '../assets/img/gal-3.jpeg';
import image4 from '../assets/img/gal-4.jpeg';
import image5 from '../assets/img/gal-5.jpeg';
import image6 from '../assets/img/gal-6.jpeg';
import image7 from '../assets/img/gal-7.jpeg';
import image8 from '../assets/img/gal-8.jpeg';
import image9 from '../assets/img/gal-9.jpeg';
import image10 from '../assets/img/gal-10.jpeg';
import image11 from '../assets/img/gal-11.jpeg';
import image12 from '../assets/img/gal-12.jpeg';
import image13 from '../assets/img/gal-13.jpeg';
import image14 from '../assets/img/gal-14.jpeg';

const Gallery = props => (
    <section className='gallery'>
        <figure className='gallery__item gallery__item--1'>
            <img src={image1} alt='Gallery img 1' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--2'>
            <img src={image2} alt='Gallery img 2' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--3'>
            <img src={image3} alt='Gallery img 3' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--4'>
            <img src={image4} alt='Gallery img 4' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--5'>
            <img src={image5} alt='Gallery img 5' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--6'>
            <img src={image6} alt='Gallery img 6' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--7'>
            <img src={image7} alt='Gallery img 7' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--8'>
            <img src={image8} alt='Gallery img 8' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--9'>
            <img src={image9} alt='Gallery img 9' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--10'>
            <img src={image10} alt='Gallery img 10' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--11'>
            <img src={image11} alt='Gallery img 11' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--12'>
            <img src={image12} alt='Gallery img 12' className='gallery__img' />
        </figure>

        <figure className='gallery__item gallery__item--13'>
            <img src={image13} alt='Gallery img 13' className='gallery__img' />
        </figure>
        
        <figure className='gallery__item gallery__item--14'>
            <img src={image14} alt='Gallery img 14' className='gallery__img' />
        </figure>
    </section>
)

export default Gallery;