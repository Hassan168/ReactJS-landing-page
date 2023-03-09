import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import {BsFillPlayCircleFill} from 'react-icons/bs';
import { Button } from '@mui/material';

const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>

        <div>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food is an Important Part Of A Balanced Diet
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
                elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
            </p>
            <p className='primary-text'>
                Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
                facilisis at fringilla quam.
            </p>

            <div className='about-button-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'>
                    <BsFillPlayCircleFill /> Watch Video
                </button>
            </div>
        </div>

    </div>
    
  )
}

export default About