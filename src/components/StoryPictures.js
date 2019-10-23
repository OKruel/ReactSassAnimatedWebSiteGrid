import React from 'react';
import story1 from '../assets/img/story-1.jpeg';
import story2 from '../assets/img/story-2.jpeg';

const StoryPictures = props => (
    <div className='story__pictures'>
        <img src={story1} alt='Couple with a new house' className='story__img--1'></img>
        <img src={story2} alt='new house' className='story__img--2'></img>
    </div>
)

export default StoryPictures;