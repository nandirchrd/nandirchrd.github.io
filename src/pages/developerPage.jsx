import { SiArduino, SiGmail, SiThreedotjs } from 'react-icons/si';
import { FaReact, FaNode, FaWhatsapp } from 'react-icons/fa';
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import socials from "../constants/socials";
import skills from "../constants/skills";
import projects from "../constants/projects";
import videos from '../constants/videos';

const DeveloperPage = () => {
    return (
        <>
            <Navbar dev={true}/>
            <section className="introduction">
                <div className="container inner-introduction">
                    <div className="description">
                        <p className="highlight">Hi, Nandi here.</p>
                        <h2>I'm Front-End Developer.</h2>
                        <h3>Based in Indonesia.</h3>
                        <p style={{maxWidth: 800}}>I'm a front developer working with React JS. I'm passionate about the world of technology and I dedicate my life to it.</p>
                    </div>
                    <div className="technology">
                        <p className="highlight">The latest technology I use:</p>
                        <ul>
                            <li><FaReact/></li>
                            <li><FaNode/></li>
                            <li><SiThreedotjs/></li>
                            <li><SiArduino/></li>
                        </ul>
                    </div>
                    <div className="social">
                        <div className="contact">
                            <Link target="_blank" to='https://api.whatsapp.com/send?phone=62895359763865&text=Halo%20Nandi,%20saya%20menelusuri%20portofolio%20Anda.%20Bisakah%20kita%20berbicara%20lebih%20lanjut?'>
                                <button className="whatsapp"><FaWhatsapp/>Whatsapp</button>
                            </Link>
                            <Link to='mailto:nandirchrd@gmail.com'>
                                <button><SiGmail/>Gmail</button>
                            </Link>
                        </div>
                        
                        <ul>
                            {
                                socials.map((social)=>
                                    <li key={social.name}>
                                        <Link target="_blank" to={social.url}>
                                            {social.icon}
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="container">
                    <div className="title-section">
                        <h3>About Me</h3>
                        <div className="line"></div>
                    </div>
                    <div>
                        <p>Hi, My name is Nandi. I love developing applications especially on the web. I was learning programming when I started to enter high school. The first programming language I learn was C++. And then in the second grade, I started to learn Javascript. After I graduated, I continued to learn it more deeply on the internet. I learned React and started to fall in love with it. My vision is want to be mastered at Javascript. I will learn more deeply about Front-End and then Back-End. My purpose is I want to be a Fullstack Developer.</p>
                        <p className="highlight">Here are some skills I learned:</p>
                        <ul className="skills">
                            {skills.map((skill=>(
                                <li key={skill.name}>
                                    <div className='skill'>
                                        <span className={`level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                                        <span className="icon-skill">
                                            {skill.icon}
                                        </span>
                                        <p>{skill.name}</p>
                                    </div>
                                </li>
                            )))}
                        </ul>
                    </div>
                </div>
            </section>
            <section className="projects">
                <div className="container inner-projects">
                    <div className="title-section">
                        <h3>Projects</h3>
                        <div className="line"></div>
                    </div>
                    <ul className="projects">
                        {
                            projects.map(project=>(
                                <li key={project.name} className="project">
                                    <img src={project.thumbnail} alt={project.name} />
                                    <div className="description">
                                        <h4 className="title-project">{project.name}</h4>
                                        <p>{project.description}</p>
                                        <ul className="libraries">
                                            {
                                                project.libraries.map((lib,index)=>(
                                                    <li key={index} className="lib">{lib}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <div className="action">
                                        {project.actions.map(action=>(
                                            <Link key={action.url} to={action.url} target="_blank">{action.icon}</Link>
                                        ))}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className="live-coding">
                <div className="container inner-live-coding">
                    <div className="title-section">
                        <h3>Live Coding</h3>
                        <div className="line"></div>
                    </div>
                    <ul className="videos">
                        {videos.map(video=>(
                            <li key={video.url} className="video">
                                <iframe allowFullScreen src={video.url} title={video.name}></iframe>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default DeveloperPage;