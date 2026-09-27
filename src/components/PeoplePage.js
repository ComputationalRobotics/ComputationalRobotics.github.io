import React from 'react';
import './PeoplePage.css';

const faculty = [
    {
      id: 1,
      name: 'Heng Yang',
      title: 'Assistant Professor',
      imageUrl: process.env.PUBLIC_URL + 'hank.jpg',
      bioLink: 'https://hankyang.seas.harvard.edu/',
      // Other links or additional information can be added here
    },
  ];

const people = [
    {
      id: 1,
      name: 'Zhiyu Zhang',
      category: 'Alumni', 
      imageUrl: process.env.PUBLIC_URL + 'Zhiyu.jpg',
      bioLink: 'https://zhiyuzz.github.io/',
      future: 'Postdoc, Next: Postdoc at CMU and Assistant Professor at Zhejiang University'
      // Other links or additional information can be added here
    },
    {
      id: 2,
      name: 'Shucheng Kang',
      category: 'PhD',
      imageUrl: process.env.PUBLIC_URL + 'Shucheng.jpg',
      title: "Electrical and Computer Engineering",
      bioLink: 'https://shuchengkang.github.io/',
    },
    // {
    //   id: 3,
    //   name: 'David Bombara',
    //   category: 'PhD',
    //   imageUrl: process.env.PUBLIC_URL + 'david_bombara.jpg',
    //   bioLink: 'https://dbombara.github.io/welcome',
    //   title: "Electrical Engineering"
    // },
    {
      id: 4,
      name: 'Han Qi',
      category: 'PhD',
      imageUrl: process.env.PUBLIC_URL + 'Han.png',
      bioLink: 'https://han20192019.github.io/',
      title: "Computer Science"
    },
    {
      id: 5,
      name: 'Alex Tong',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'alex.png',
      future: "Undergrad from UC Berkeley"
    },
    {
      id: 6,
      name: 'Jay Sarva',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from Brown University'
    },
    {
      id: 9,
      name: 'William Zhang',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: "High school student from Weston High, Next: Undergrad at UPenn"
    },
    {
      id: 10,
      name: 'Tim Nguyen',
      category: 'Alumni',
      bioLink: 'https://thisistim.dev',
      imageUrl: process.env.PUBLIC_URL + 'tim.jpg',
      future: "Visiting student from Boston Latin School and then Boston University"
    },
    {
      id: 12,
      name: 'Jiarui Li',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      bioLink: 'https://jiaruili.com/',
      future: 'Undergrad from Peking University, Next: PhD student at MIT'
    },
    {
      id: 13,
      name: 'Xiaoyang Xu',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from University of Science and Technology China, Next: PhD student at UC Santa Barbara'
    },
    {
      id: 14,
      name: 'Xihang Yu',
      category: 'Alumni',
      bioLink: 'https://xihangyu630.github.io/',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from University of Michigan, Next: PhD student at MIT'
    },
    {
      id: 15,
      name: 'Yukai Tang',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'profile.jpeg',
      future: 'Undergrad from Tsinghua University, Next: PhD student at Princeton'
    },
    {
      id: 16,
      name: 'Haoyu Han',
      category: 'PhD',
      title: 'Applied Mathematics',
      imageUrl: process.env.PUBLIC_URL + 'haoyu.jpg',
      bioLink: 'https://hyhan0118.github.io/',
    },
    {
        id: 17,
        name: 'Aneesh Muppidi',
        category: 'Alumni',
        imageUrl: process.env.PUBLIC_URL + 'aneesh.jpg',
        bioLink: 'https://aneeshers.github.io/',
        future: 'Undergrad from Harvard College, Next: US Rhodes Scholar at Oxford, PhD student at Stanford'
    },
    {
        id: 18,
        name: 'Hugo Buurmeijer',
        category: 'Alumni',
        future: 'Master student from Stanford University, Next: PhD student at Stanford'
    },
    {
    id: 19,
    name: 'Haocheng Yin',
    category: 'Alumni',
    imageUrl: process.env.PUBLIC_URL + 'haocheng_yin.jpg',
    future: 'Master student from ETH Zurich, Next: PhD student at Georgia Tech'
    },
    {
    id: 20,
    name: 'Kevin Kasa',
    category: 'Alumni',
    imageUrl: process.env.PUBLIC_URL + 'kevin_kasa.png',
    future: 'Master student from University of Guelph, Next: researcher at ServiceNow Research',
    bioLink: 'https://kevinkasa.github.io/'
    },
    {
      id: 23,
      name: 'Yulin Li',
      category: 'Alumni',
      imageUrl: process.env.PUBLIC_URL + 'yulin.jpg',
      bioLink: 'https://yulinli0.github.io/',
      future: 'Visiting PhD student from HKUST'
    },
    {
      id: 24,
      name: 'Elior Benarous',
      category: 'Alumni',
      future: 'Master student from ETH Zurich'
    },
    {
      id: 27,
      name: 'Antoine Groudiev',
      category: 'Alumni', 
      bioLink: 'https://agroudiev.github.io/',
      future: 'Visiting student from École Normale Supérieure - PSL, Paris'
    },
    {
      id: 28,
      name: 'Adrian Kobras',
      category: 'Alumni', 
      future: 'Visiting student from Technical University of Munich'
    },
    {
      id: 29,
      name: 'Jack Benarroch Jedlicki',
      category: 'PhD',
      imageUrl: process.env.PUBLIC_URL + 'jack.jpg',
      bioLink: 'https://jackbj23.github.io/',
      title: "Computer Science"
    },
    {
      id: 30,
      name: 'Amish Sethi',
      category: 'PhD',
      title: 'Computer Science',
      imageUrl: process.env.PUBLIC_URL + '/amish.jpg',
      bioLink: 'https://amishsethi.github.io/'
    },
    {
      id: 31,
      name: 'Matthias Jammot',
      category: 'PhD',
      title: 'Computer Science',
      imageUrl: process.env.PUBLIC_URL + '/matthias.png',
      bioLink: 'https://matthiasjammot.com/'
    },
    {
      id: 32,
      name: 'Yukuan Wei',
      category: 'PhD',
      title: 'Applied Mathematics',
      imageUrl: process.env.PUBLIC_URL + '/Yukuan.jpeg',
      bioLink: 'https://scholar.google.com/citations?user=7dWZUEUAAAAJ&hl=en'
    },
    {
      id: 33,
      name: 'Charles Liu',
      category: 'PhD',
      title: 'Applied Physics',
      imageUrl: process.env.PUBLIC_URL + '/Charles Liu.jpg',
      imageClassName: 'square-portrait'
    },
  ];
  
const PeoplePage = () => {
    const phdStudents = people.filter(person => person.category === 'PhD');
    const alumni = people.filter(person => person.category === 'Alumni');

    return (
        <div className="people-page">
            <div className="people-container">
                <div className="sidebar">
                    <a href="#faculty">Faculty</a>
                    <a href="#phd">PhD Students</a>
                    <a href="#alumni">Alumni</a>
                    {/* ... more links */}
                </div>
                <div className="main-content">
                    <section id="faculty">
                        <h2>Faculty</h2>
                        <div className="faculty-list">
                            {faculty.map(person => (
                                <div className="faculty-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} />
                                    <div className="faculty-info">
                                        <a href={person.bioLink} className="faculty-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="phd">
                        <h2>PhD Students</h2>
                        <div className="people-list">
                            {phdStudents.map(person => (
                                <div className="people-member" key={person.id}>
                                    <img src={person.imageUrl} alt={person.name} className={person.imageClassName} />
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                            <h3>{person.name}</h3>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section id="alumni">
                        <h2>Alumni</h2>
                        <div className="alumni-list">
                            {alumni.map(person => (
                                <div key={person.id}>
                                    <div className="people-info">
                                        <a href={person.bioLink} className="people-name-link">
                                        <p>{person.name}{person.future && ` (${person.future})`}</p>
                                        </a>
                                        <p>{person.title}</p>
                                        {/* Add more links or information if needed */}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    {/* ... more sections */}
                </div>
            </div>
        </div>
    );
};

export default PeoplePage;
