import React from 'react';
import './SoftwarePage.css'; // We'll create this later

// Updated dummy data for software projects
const softwareProjects = [
  {
    id: 1,
    name: 'Placeholder 1',
    description: 'This solver is an implementation of our fast and parallelizable iterative algorithm for solving large-scale sparse semidefinite programs.',
    url: '#' // Replace with actual URL
  },
  {
    id: 2,
    name: 'Placeholder 2',
    description: 'This solver aims to solve a convex relaxation for a large-scale Optimal Power Flow (OPF) Problem and then recover a near-global solution.',
    url: '#' // Replace with actual URL
  },
  {
    id: 3,
    name: 'Placeholder 3',
    description: 'This solver aims to solve a convex relaxation for three types of the Optimal Distributed Control (ODC) problem: finite-horizon deterministic ODC, infinite-horizon deterministic ODC, and stochastic ODC. It also recovers a near-global controller if possible.',
    url: '#' // Replace with actual URL
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