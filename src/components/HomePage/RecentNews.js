import React from 'react';
import './RecentNews.css';

// If you want to add to the news, just create dictionaries with keys 'date' (string), and 'content' (array of dictionaries). 
// If you want to add hyperlinks, just create dictionary with keys 'text' and 'link', otherwise just create text.
const newsItems = [
    { 
        date: 'Feb 6, 2024', 
        content: [
          { text: 'Preprint on ' },
          { text: 'discounted adaptive online prediction', link: 'https://arxiv.org/abs/2402.02720' },
          { text: ' as a downstream application, we give a better algorithm for performing online adaptive conformal prediction!' }
        ],},
    { 
        date: 'Jan 31, 2024', 
        content: [
          { text: 'Preprint on ' },
          { text: 'sparse polynomial optimization with unbounded sets', link: 'https://arxiv.org/abs/2401.15837' },
          { text: ', as an application, we solve optimal control of the Van der Pol oscillator to certifiable global optimality. Congrats to Shucheng!' }
        ],},
    { 
        date: 'Jan 8, 2024', 
        content: [
          { text: 'Preprint on ' },
          { text: 'understanding', link: 'https://www.google.com' },
          { text: ' and computing the ' },
          { text: 'true optimal value function', link: 'https://www.google.com' },
          { text: ' of infinite-horizon pendulum swing-up.' }
        ],},
    { 
        date: 'Nov 30, 2023', 
        content: [
          { text: 'Preprint with Yukai Tang and Jean-Bernard Lasserre: revisiting the minimum enclosing ellipsoids of set-membership estimation in control and perception, using convex optimization; my presentation at Autonomy Talks can be found here' },
          { text: 'revisiting the minimum enclosing ellipsoids of set-membership estimation in control and perception, using convex optimization', link: 'https://arxiv.org/abs/2311.15962' },
          { text: 'my presentation at Autonomy Talks can be found' },
          { text: 'here', link: 'https://youtu.be/eBtlKthnvm8?si=OVOfTSMrQvQ3WL2z' },
        ], },
    { 
        date: 'Sep 30, 2023', 
        content: [
          { text: 'Preprint with ' }, 
          { text: 'Xihang Yu', link: 'https://xihangyu630.github.io/' },
          { text: ': '},
          { text: 'SIM-Sync', link: 'https://arxiv.org/abs/2309.05184'},
          { text: ', certifiably optimal 3D scene reconstruction with learned depth'}], },
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
    { 
        date: 'Mar 22, 2023', 
        content: [
            { text: 'New preprint on ' },
            { text: 'verification and synthesis of robust control barrier functions', link: 'https://arxiv.org/abs/2303.10081'},
            { text: ': you do not need iterative sum of squares.' }], },
    
  ];  
  // ... add other news here

  const RecentNews = () => {
    return (
        <div className="news-section">
            <p className="news-title">News</p>
            <div className="news-items-container">
                {newsItems.map((item, index) => (
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
