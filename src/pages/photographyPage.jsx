import { FaWhatsapp } from "react-icons/fa";
import { SiGmail} from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Fade } from 'react-awesome-reveal';

// Components
import Navbar from "../components/navbar";
import Loading from "../components/loading";

// Data arrays 
import platforms from "../constants/platforms";
import arrayPhotos from "../constants/photos";

// Utils
import handleLoadMore from '../utils/handleLoadMore';

const PhotographyPage = () => {
    let [photos, setPhotos] = useState({arr: arrayPhotos, show: 5, steps: 3, isLoading: false});

    return (
        <>
            <Navbar photography={true}/>
            <section className="introduction">
                <div className="container">
                    <div className="inner-introduction">
                        <div className="description">
                            <p className="highlight">
                                <Fade triggerOnce delay={100} damping={0.08} cascade>
                                Hi, Nandi here.
                                </Fade>
                            </p>
                            <Fade triggerOnce delay={2000}>
                                <h2>
                                    I'm Photographer.
                                </h2>
                            </Fade>
                            <Fade triggerOnce delay={3000}>
                                <h3>Based in Indonesia.</h3>
                            </Fade>
                            <Fade triggerOnce delay={4000}><p style={{maxWidth: 800}}>My passion for photography compels me to capture the essence of the world through my lens, and I am dedicated to continually refining and perfecting my craft.</p></Fade>
                        </div>
                        <div className="social">
                            <Fade triggerOnce delay={5000}>
                                <div className="contact">
                                    <Link target="_blank" to='https://api.whatsapp.com/send?phone=62895359763865&text=Halo%20Nandi,%20saya%20menelusuri%20portofolio%20Anda.%20Bisakah%20kita%20berbicara%20lebih%20lanjut?'>
                                        <button className="whatsapp"><FaWhatsapp/>Whatsapp</button>
                                    </Link>
                                    <Link to='mailto:nandirchrd@gmail.com'>
                                        <button><SiGmail/>Gmail</button>
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            <section className="platforms">
                <div className="container inner-platforms">
                    <Fade triggerOnce duration={1000} delay={200}>
                        <div className="title-section">
                            <h3>Platform Partners</h3>
                            <div className="line"></div>
                        </div>
                    </Fade>
                    <ul className="platform-lists">
                        {
                            platforms.map(platform=>(
                                <Fade triggerOnce duration={1000} delay={200}>
                                    <li key={platform.url} className="platform">
                                    <Link to={platform.url} target="_blank">{platform.icon}</Link>
                                    </li>
                                </Fade>
                            ))}
                    </ul>
                </div>
            </section>
            <section className="photos">
                <div className="container">
                    <Fade triggerOnce duration={1000} delay={200}>
                        <div className="title-section">
                            <h3>Photo Samples</h3>
                            <div className="line"></div>
                        </div>
                    </Fade>
                    <ul className="samples">
                        {
                            photos.arr.slice(0, photos.show).map(photo=>(
                                <Fade triggerOnce duration={1000} delay={200}>
                                    <a href={photo.link} alt={photo.name} target='_blank'>
                                        <li key={photo.src} className="sample">
                                            <span className="top">{photo.icon}</span>
                                            <div className="thumbnail">
                                                <img src={photo.src} alt={photo.name} />
                                            </div>
                                            <span className="bottom">
                                                <p>{photo.name}</p>
                                            </span>
                                        </li>
                                    </a>
                                </Fade>
                            ))
                        }
                    </ul>
                    <Fade triggerOnce duration={1000} delay={200}>{photos.isLoading ? <Loading/> : photos.show < photos.arr.length ? <button className='load-more' onClick={()=>handleLoadMore(setPhotos)}>Load More</button> : ""}</Fade>
                </div>
            </section>
        </>
    )
}

export default PhotographyPage;