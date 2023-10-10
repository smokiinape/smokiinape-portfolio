import React from 'react';
import './Portfolio.css';
import plantameraImg from '../assets/Plantamera.png';
import jobchaserImg from '../assets/jobchaser.png';
import foxnoteapp from '../assets/foxnoteapp.png';
import figmaImg from '../assets/figmawork.png';
import pokemonImg from '../assets/pokemon.png';
import jenkinsImg from '../assets/pipeline.png';


const Portfolio = () => {
  const projects = [
    {
      img: plantameraImg,  // Use the imported image variable
      description: 'Second place winner of a school-wide competition where the theme was "Digital solutions & Green tech". We created an app that scans receipts with a camera and calculate the amount on the receipt with help of AI, then it adds the points to the user account, which can be used for rewards like planting trees. The goal was to incentivize environmentally-friendly acts with a gamified experience',
      githubUrl: 'https://github.com/smokiinape/PlantaMera',
    },
    {
      img: jobchaserImg,
      description: 'A frontend project where we created an app that will load job-ads with the help of an API. A user can search for jobs, and also use tags to filter specific job-types. We also implemented user registration with firebase.',
      githubUrl: 'https://github.com/smokiinape/Jobchaser-k-rvi',
    },
    {
      img: foxnoteapp,
      description: 'Fox Notes helps you easily keep track of your notes! You can mark notes as "favorites" as well as give your notes searchable "tags" to organize them, which you will find in the tag-list in the sidebar.',
      githubUrl: 'https://github.com/smokiinape/team-fox-note_app',
    },
    /*
    {
      img: figmaImg,
      description: 'An UX/UI figma project where the goal was to design a simple sneaker shop with react.',
      githubUrl: '',
    },
    {
      img: pokemonImg,
      description: 'A simple Pokemon game, where Pokemon are randomized and the winner is calculated based on total experience points of the Pokemon generated, also used to learn how to use Docker & Hetzner',
      githubUrl: '',
    },
    {
      img: jenkinsImg,
      description: 'A Dev-Ops project to learn how CI/CD pipeline works. Jenkins was run on Hetzner with the help of a docker-image, and connected with Github and Jira. When code gets pushed to the Github repo, it triggers a build in Jenkins, and a comment on our JIRA dashboard',
      githubUrl: '',
    } */
  ];

  return (
    <section id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="projects-wrapper">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <div className="project-img-wrapper">
              <img src={project.img} alt={`Project ${index + 1}`} className="project-img" />
            </div>
            </a>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
