import React from 'react';
import './MainSection.css';
const image = process.env.PUBLIC_URL + '/group_photo_rockport_MA.JPG';

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="mainsection-tab-container">
                <div className="main-section-content">
                    <div className="maintitle">Welcome to the Harvard Computational Robotics Group!</div>
                    <p>We are a group of researchers and students who are broadly interested in the intersection of <b>theory</b> and <b>practice</b>, particularly computational algorithms that are robust, efficient, offer strong performance guarantees, and supercharge the next generation of intelligent systems.</p>

                    <p>We are proud to be part of <a href='https://seas.harvard.edu/'>Harvard School of Engineering and Applied Sciences</a> and <a href='https://seas.harvard.edu/robotics'>Harvard Robotics</a>.</p>
                    
                </div>
                <div className="image-container">
                    <figure className="group-photo">
                        <img src={image} alt="Harvard Computational Robotics Lab in Rockport, MA" />
                        <figcaption>Rockport, MA 2026</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default MainSection;

