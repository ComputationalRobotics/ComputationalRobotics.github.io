import React from 'react';
import './RecentNews.css';

// If you want to add to the news, just create dictionaries with keys 'date' (string), and 'content' (array of dictionaries). 
// If you want to add hyperlinks, just create dictionary with keys 'text' and 'link', otherwise just create text.
const newsItems = [
    {
    date: 'Sep 29, 2026',
    content: [
      { text: 'Provable Edge-of-Stability for Adam on a One-Dimensional Quadratic', link: 'https://arxiv.org/abs/2608.20638'},
      { text: ' accepted to NeurIPS OPT Optimization for Machine Learning, congrats to Yiman!'}
    ],},
    {
    date: 'Sep 26, 2026',
    content: [
      { text: 'BEACON', link: 'https://arxiv.org/abs/2605.08571'},
      { text: ' accepted to NeurIPS 2026. Congrats to Antong and Han!'}
    ],},
    {
    date: 'Jun 2, 2026',
    content: [
      { text: 'Our group received an NSF CAREER award!'}
    ],},
    { 
    date: 'May 1, 2026', 
    content: [
      { text: 'One paper accepted to RSS 2026. One paper accepted to ICML 2026. Congrats to Haoyu and Heng!'}
    ],},
    { 
    date: 'Mar 1, 2026', 
    content: [
      { text: 'Generative Predictive Control', link: 'https://arxiv.org/abs/2502.00622'},
      { text: ' accepted to Robotics and Automation Letters. Congrats to Han!'}
    ],},
    { 
    date: 'Feb 1, 2026', 
    content: [
      { text: 'Two papers accepted to ICRA 2026. Congrats to Han and Haoyu!'}
    ],},
    { 
    date: 'Jun 13, 2025', 
    content: [
      { text: 'Building Rome with Convex Optimizaion awarded RSS 2025 Best Systems Paper. Congrats to Haoyu!'}
    ],},
    { 
    date: 'Apr 13, 2025', 
    content: [
      { text: 'Three papers accepted to Robotics: Science and Systems 2025. Congrats to Shucheng, Haoyu, and Yulin!'}
    ],},
    { 
    date: 'Feb 2, 2025', 
    content: [
      { text: 'Control-oriented Clustering of Visual Latent Representation', link: 'https://arxiv.org/abs/2410.05063'},
      { text: ' accepted to ICLR. Congrats to Han and Haocheng!'}
    ],},
    { 
    date: 'Dec 2, 2024', 
    content: [
      { text: 'Sparse Polynomial Optimization with Unbounded Sets', link: 'https://arxiv.org/pdf/2401.15837.pdf'},
      { text: ' accepted to SIAM Journal on Optimization. Congrats to Shucheng!'}
    ],},
    { 
    date: 'Sep 25, 2024', 
    content: [
      { text: 'Fast TRAC for Lifelong Reinforcement Learning', link: 'https://computationalrobotics.seas.harvard.edu/TRAC/'},
      { text: ' accepted to NeurIPS, congrats to Aneesh and Zhiyu!'}
    ],},
    { 
    date: 'Aug 18, 2024', 
    content: [
      { text: 'Fast and Certifiable Trajectory Optimization', link: 'https://arxiv.org/abs/2406.05846'},
      { text: ' accepted to the International Workshop on the Algorithmic Foundations of Robotics (WAFR), congrats to Shucheng!'}
    ],},
    { 
    date: 'May 13, 2024', 
    content: [
      { text: 'CLOSURE', link: 'https://arxiv.org/pdf/2403.09990'},
      { text: ' accepted to Robotics: Science and Systems (RSS)!'}
    ],},
    { 
    date: 'May 4, 2024', 
    content: [
      { text: 'Discounted Adaptive Online Prediction', link: 'https://arxiv.org/pdf/2402.02720.pdf'},
      { text: ' accepted to International Conference on Machine Learning (ICML)!'}
    ],},
    { 
    date: 'Mar 28, 2024', 
    content: [
      { text: 'Two papers accepted to the Learning for Dynamics and Control (L4DC) conference, '},
      { text: 'one of them selected as oral presentation (7.5%)!', link: 'https://arxiv.org/pdf/2311.15962.pdf'},
      { text: ' Congrats to Yukai and Haoyu!'}
    ],},
    { 
    date: 'Mar 22, 2024', 
    content: [
      { text: 'Hank presents '},
      { text: 'Fast and Certifiable Approximation of Pose Uncertainty Sets', link: 'https://drive.google.com/file/d/1skXvo_CSFbxy3Xj7tb7B7yKW_3i92kHE/view?usp=drive_link'},
      { text: ' in the INFORMS Optimization Society conference'}
    ],},
    { 
        date: 'Feb 23, 2024', 
        content: [
          { text: 'Zhiyu presents '},
          { text: 'paper on improving adaptive online learning using refined discretization', link: 'https://arxiv.org/pdf/2309.16044.pdf'},
          { text: ' in the International Conference on Algorithmic Learning Theory (ALT)'}
        ],},
    { 
        date: 'Feb 20, 2024', 
        content: [
          { text: 'SIM-Sync', link: 'https://arxiv.org/pdf/2309.05184.pdf'},
          { text: ' accepted to IEEE Robotics and Automation Letters, congrats to Xihang!' }
        ],},
    { 
        date: 'Jul 30, 2023', 
        content: [
          { text: 'Congratulations to Shucheng Kang on getting his paper "' },
          { text: 'Verification and Synthesis of Robust Control Barrier Functions', link: 'https://arxiv.org/abs/2303.10081' },
          { text: '" accepted to '},
          { text: 'IEEE Conference on Decision and Control', link: 'https://cdc2023.ieeecss.org/'},
          { text: '!'}
        ], },
    { 
        date: 'Apr 7, 2023', 
        content: [
            { text: 'Object Pose Estimation with Statistical Guarantees', link: 'https://arxiv.org/abs/2303.12246' },
            { text: ' accepted to CVPR 2023 as a highlight paper.' }], },
  ];

const recentNewsItems = [...newsItems]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 15);

const RecentNews = () => {
    return (
        <div className="news-section">
            <p className="news-title">News</p>
            <div className="news-items-container">
                {recentNewsItems.map((item, index) => (
                    <div key={index} className="news-item">
                        <div className="news-date">{item.date}</div>
                        <div className="news-content">
                            {item.content.map((segment, i) => segment.link ? 
                              <a key={i} href={segment.link} target="_blank" rel="noopener noreferrer">{segment.text}</a> 
                              : 
                              <span key={i}>{segment.text}</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentNews;
