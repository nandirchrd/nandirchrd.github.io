import { SiArduino, SiGmail, SiThreedotjs } from 'react-icons/si';
import { FaReact, FaNode, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

// Components
import Navbar from '../components/navbar';
import Loading from '../components/loading';

// Data arrays
import socials from '../constants/socials';
import arraySkills from '../constants/skills';
import arrayProjects from '../constants/projects';
import arrayVideos from '../constants/videos';

// Utils
import handleLoadMore from '../utils/handleLoadMore';

const DeveloperPage = () => {
  let [skills, setSkills] = useState({ arr: arraySkills, show: 5, steps: 3, isLoading: false });
  let [projects, setProjects] = useState({
    arr: arrayProjects,
    show: 5,
    steps: 3,
    isLoading: false,
  });
  let [videos, setVideos] = useState({ arr: arrayVideos, show: 5, steps: 3, isLoading: false });

  return (
    <>
      <Navbar dev={true} />
      <section className="introduction">
        <div className="container inner-introduction">
          <div className="description">
            <p className="highlight">
              <Fade triggerOnce delay={100} damping={0.08} cascade>
                Hi, Nandi here.
              </Fade>
            </p>
            <Fade triggerOnce delay={2000}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h2>I'm Front-End Developer.</h2>
            </Fade>
            <Fade triggerOnce delay={3000}>
              <h3>Based in Indonesia.</h3>
            </Fade>
            <Fade triggerOnce delay={4000}>
              <p style={{ maxWidth: 800 }}>
                I am a Front-End Developer specializing in React JS. With a deep passion for
                technology, I am dedicated to advancing in this field.
              </p>
            </Fade>
          </div>
          <Fade triggerOnce delay={5000}>
            <div className="technology">
              <p className="highlight">The latest technology I use:</p>
              <ul>
                <li>
                  <FaReact />
                </li>
                <li>
                  <FaNode />
                </li>
                <li>
                  <SiThreedotjs />
                </li>
                <li>
                  <SiArduino />
                </li>
              </ul>
            </div>
          </Fade>
          <Fade triggerOnce delay={6000}>
            <div className="social">
              <div className="contact">
                <Link
                  target="_blank"
                  to="https://api.whatsapp.com/send?phone=62895359763865&text=Halo%20Nandi,%20saya%20menelusuri%20portofolio%20Anda.%20Bisakah%20kita%20berbicara%20lebih%20lanjut?"
                >
                  <button className="whatsapp">
                    <FaWhatsapp />
                    Whatsapp
                  </button>
                </Link>
                <Link to="mailto:nandirchrd@gmail.com">
                  <button>
                    <SiGmail />
                    Gmail
                  </button>
                </Link>
              </div>
              <ul>
                {socials.map((social) => (
                  <li key={social.name}>
                    <Link target="_blank" to={social.url}>
                      {social.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>
        </div>
      </section>
      <section className="about">
        <div className="container">
          <Fade triggerOnce duration={1000} delay={200}>
            <div className="title-section">
              <h3>About Me</h3>
              <div className="line"></div>
            </div>
          </Fade>
          <div>
            <Fade triggerOnce duration={1000} delay={200}>
              <p>
                Hi, my name is Nandi. I have a passion for developing web applications. I began
                learning programming in high school, starting with C++ and moving on to JavaScript
                in my second year. After graduating, I deepened my JavaScript knowledge online and
                discovered a love for React. My vision is to master JavaScript, focusing on both
                Front-End and Back-End development. My goal is to become a Fullstack Developer.
              </p>
              <p className="highlight">Here are some skills I learned:</p>
            </Fade>
            <ul className="skills">
              {skills.arr.slice(0, skills.show).map((skill) => (
                <Fade key={skill.name} triggerOnce duration={1000} delay={200}>
                  <li>
                    <div className="skill">
                      <span className={`level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                      <span className="icon-skill">{skill.icon}</span>
                      <p>{skill.name}</p>
                    </div>
                  </li>
                </Fade>
              ))}
            </ul>
            <Fade triggerOnce duration={1000} delay={200}>
              {skills.isLoading ? (
                <Loading />
              ) : skills.show < skills.arr.length ? (
                <button className="load-more" onClick={() => handleLoadMore(setSkills)}>
                  Load More
                </button>
              ) : (
                ''
              )}
            </Fade>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="container inner-projects">
          <Fade triggerOnce duration={1000} delay={200}>
            <div className="title-section">
              <h3>Projects</h3>
              <div className="line"></div>
            </div>
          </Fade>
          <ul className="projects">
            {projects.arr.slice(0, projects.show).map((project) => (
              <Fade key={project.name} triggerOnce duration={1000} delay={200}>
                <li className="project">
                  <img src={project.thumbnail} alt={project.name} />
                  <div className="description">
                    <h4 className="title-project">{project.name}</h4>
                    <p>{project.description}</p>
                    <ul className="libraries">
                      {project.libraries.map((lib, index) => (
                        <li key={index} className="lib">
                          {lib}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="action">
                    {project.actions.map((action) => (
                      <Link key={action.url} to={action.url} target="_blank">
                        {action.icon}
                      </Link>
                    ))}
                  </div>
                </li>
              </Fade>
            ))}
          </ul>
          <Fade triggerOnce duration={1000} delay={200}>
            {projects.isLoading ? (
              <Loading />
            ) : projects.show < projects.arr.length ? (
              <button className="load-more" onClick={() => handleLoadMore(setProjects)}>
                Load More
              </button>
            ) : (
              ''
            )}
          </Fade>
        </div>
      </section>
      <section className="live-coding">
        <div className="container inner-live-coding">
          <Fade triggerOnce duration={1000} delay={200}>
            <div className="title-section">
              <h3>Live Coding</h3>
              <div className="line"></div>
            </div>
          </Fade>
          <ul className="videos">
            {videos.arr.slice(0, videos.show).map((video) => (
              <Fade key={video.url} triggerOnce duration={1000} delay={200}>
                <li className="video">
                  <iframe allowFullScreen src={video.url} title={video.name}></iframe>
                </li>
              </Fade>
            ))}
            <Fade triggerOnce duration={1000} delay={200}>
              {videos.isLoading ? (
                <Loading />
              ) : videos.show < videos.arr.length ? (
                <button className="load-more" onClick={() => handleLoadMore(setVideos)}>
                  Load More
                </button>
              ) : (
                ''
              )}
            </Fade>
          </ul>
        </div>
      </section>
    </>
  );
};

export default DeveloperPage;
