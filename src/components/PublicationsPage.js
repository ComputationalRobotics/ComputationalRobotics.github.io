import React, { useState } from 'react';
import SearchBar from './PublicationsPage/SearchBar';
import TagFilter from './PublicationsPage/TagFilter';
import PublicationsList from './PublicationsPage/PublicationsList';
import './PublicationsPage.css';

// Dummy data for publications - Change This for Publications
// The tags are hidden, but the buttons for each of them will work

/* 
  { 
    id: 4, 
    title: 'On the Nonsmooth Geometry and Neural Approximation of the Optimal Value Function of Infinite-Horizon Pendulum Swing-up', 
    journal_year: 'arXiv preprint 2023', 
    people: ['Haoyu Han', 'Heng Yang'], 
    tags: ['Control'],
    pdfLink: 'https://www.google.com',
    videoLink: 'https://www.google.com',
    highlightLink: 'https://www.google.com',
    codeLink: 'https://www.google.com',
    awardLink: 'https://www.google.com',
    newsLink: 'https://www.google.com'
  },
*/

const allPublications = [
    { 
      id: 6, 
      title: 'Discounted Adaptive Online Prediction',
      journal_year: 'arXiv preprint 2024', 
      people: ['Zhiyu Zhang', 'David Bombara', 'Heng Yang'], 
      tags: ['Online Learning'],
      pdfLink: 'https://arxiv.org/pdf/2402.02720.pdf'
    },
    {
      id: 5,
      title: 'Sparse Polynomial Optimization with Unbounded Sets',
      journal_year: 'arXiv preprint 2024',
      people: ['Lei Huang', 'Shucheng Kang', 'Jie Wang', 'Heng Yang'],
      tags: ['Optimization'],
      pdfLink: 'https://arxiv.org/pdf/2401.15837.pdf' 
    },
    { 
      id: 4, 
      title: 'On the Nonsmooth Geometry and Neural Approximation of the Optimal Value Function of Infinite-Horizon Pendulum Swing-up', 
      journal_year: 'arXiv preprint 2024', 
      people: ['Haoyu Han', 'Heng Yang'], 
      tags: ['Control'],
      pdfLink: 'https://arxiv.org/pdf/2312.17467.pdf'
    },
    { 
      id: 3, 
      title: 'Uncertainty Quantification of Set-Membership Estimation in Control and Perception: Revisiting the Minimum Enclosing Ellipsoid', 
      journal_year: 'arXiv preprint 2023', 
      people: ['Yukai Tang', 'Jean-Bernard Lasserre', 'Heng Yang'], 
      tags: ['Control', 'Perception'],
      pdfLink: 'https://arxiv.org/pdf/2311.15962.pdf',
      // videoLink not provided for this publication
      // highlightLink not provided for this publication
      // others also not provided
    },
    { 
      id: 2, 
      title: 'SIM-Sync: From Certifiably Optimal Synchronization over the 3D Similarity Group to Scene Reconstruction with Learned Depth', 
      journal_year: 'arXiv preprint 2023', 
      people: ['Xihang Yu', 'Heng Yang'], 
      tags: ['Semidefinite Programming', 'Optimization'],
      pdfLink: 'https://arxiv.org/pdf/2309.05184.pdf',
      // highlightLink not provided for this publication
      // others not provided
    },
    { 
      id: 1, 
      title: 'Verification and Synthesis of Robust Control Barrier Functions: Multilevel Polynomial Optimization and Semidefinite Relaxation', 
      journal_year: 'IEEE Conf. on Decision and Control (CDC) 2023', 
      people: ['Shucheng Kang', 'Yuxiao Chen', 'Heng Yang', 'Marco Pavone'], 
      tags: ['Semidefinite Programming', 'Optimization'],
      pdfLink: 'https://arxiv.org/pdf/2303.10081.pdf'
      // highlightLink not provided for this publication
      // others not provided
    },
    
    // ... more publications
  ];
  

// List of unique tags extracted from all publications
const uniqueTags = Array.from(new Set(allPublications.flatMap(p => p.tags)));

const PublicationsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    return (
        <div className="publications-page">
            <div className="publications-container">
                <SearchBar onSearch={setSearchQuery} />
                <TagFilter onTagSelect={setSelectedTags} selectedTags={selectedTags} tags={uniqueTags} />
                <PublicationsList publications={allPublications} searchQuery={searchQuery} selectedTags={selectedTags} />
            </div>
        </div>
    );
};

export default PublicationsPage;
