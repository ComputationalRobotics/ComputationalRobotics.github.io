import React from 'react';
import './MainSection.css';
const image = process.env.PUBLIC_URL + '/group_photo.jpg';

const MainSection = () => {
    return (
        <div className="main-section">
            <div className="mainsection-tab-container">
                <div className="main-section-content">
                    <div className="maintitle">Welcome to the Harvard Computational Robotics Lab</div>
                    <p>We at the Harvard Computational Robotics Lab study the algorithmic foundations of robot perception, action, and learning. We are broadly interested in estimation and decision-making with performance gurantees.</p>
                    <p><b>Join us</b>: If you are interested in research opportunities at the lab, please contact Heng Yang at hankyang [at] seas [dot] harvard [dot] edu. This year we are particularly looking for a strong candidate in statistics and machine learning.</p>
                </div>
                <div className="image-container">
                    <img src={image} alt="Harvard Computational Robotics Lab" />
                </div>
            </div>
        </div>
    );
};

export default MainSection;


