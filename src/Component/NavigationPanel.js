// NavigationPanel.js
import gymcouplepic from '../assets/gymcoup.jpg'
import gymcouplepic2 from '../assets/gymcoup_2.jpg'
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation

const NavigationPanel = () => {
    return (
        <div className="navigationPanel">
            <div className="imagecoup">
                <img className='gymcoup1' src={gymcouplepic} alt="image1" />
            </div>
            <div className='btnofnavpen'>
                <Link to="/exploregym" className="navButton">Explore Gym</Link>
                <Link to="/aboutmembership" className="navButton">About Membership</Link>
                <Link to="/location" className="navButton">Location</Link>
                <Link to="/diet" className="navButton">Diet</Link>
            </div>
            <div className="imagecoup">
                <img src={gymcouplepic2} alt="image2" className="gymcoup2" />
            </div>
        </div>
    );
};

export default NavigationPanel;