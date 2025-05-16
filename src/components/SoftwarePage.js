import React from 'react';
import './SoftwarePage.css'; // We'll create this later

// Updated dummy data for software projects
const softwareProjects = [
  {
    id: 1,
    name: 'XM (conveX bundle adjustMent)',
    description: 'A scalable and initialization-free solver for global bundle adjustment, leveraging learned depth and GPU-accelerated convex optimization. The package implements both XM and a full structure from motion (SfM) pipeline powered by XM, achieving substantial speed up compared to existing solvers.',
    url: 'https://github.com/ComputationalRobotics/XM-code' // Replace with actual URL
  },
  {
    id: 2,
    name: 'SPOT (Sparse Polynomial Optimization Toolbox)',
    description: 'A lightweight, high-performance, sparse Moment-SOS Hierarchy conversion package for global optimization of polynomial optimization problems (POP). SPOT is written in C++, with MATLAB and Python interfaces.',
    url: 'https://github.com/ComputationalRobotics/SPOT' // Replace with actual URL
  },
  {
    id: 3,
    name: 'CRISP (Robust Contact-Implicit motion planning with Sequential convex Programming)',
    description: 'A C++ library developed to efficiently solve contact-implicit motion planning problems, using a customized trust region Sequential Convex Programming (SCP) algorithm.',
    url: 'https://github.com/ComputationalRobotics/CRISP' // Replace with actual URL
  },
  // Add more software projects here
];

const SoftwarePage = () => {
  return (
    <div className="software-page">
      <div className="software-container">
        <h1 className="page-title">Software</h1>
        {/* <p className="page-subtitle">Placeholder Subtitle: e.g., Research Group Name, University</p> */}
        <hr className="divider" />
        <ul className="software-list">
          {softwareProjects.map((software) => (
            <li key={software.id} className="software-item">
              <a href={software.url} target="_blank" rel="noopener noreferrer" className="software-name">
                {software.name}
              </a>: {software.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SoftwarePage; 