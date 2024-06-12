import { FaWhatsapp } from "react-icons/fa";
import { SiGmail} from "react-icons/si";
import { Link } from "react-router-dom";

import Navbar from "../components/navbar";
import platforms from "../constants/platforms";
import photos from "../constants/photos";

const PhotographyPage = () => {
    return (
        <>
            <Navbar photography={true}/>
            <section className="introduction">
                <div className="container">
                    <div className="inner-introduction">
                        <div className="description">
                            <p className="highlight">Hi, Nandi here.</p>
                            <h2>I'm Photographer.</h2>
                            <h3>Based in Indonesia.</h3>
                            <p style={{maxWidth: 800}}>My passion for photography compels me to capture the essence of the world through my lens, and I am dedicated to continually refining and perfecting my craft.</p>
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
                        </div>
                    </div>
                </div>
            </section>
            <section className="platforms">
                <div className="container inner-platforms">
                    <div className="title-section">
                        <h3>Platform Partners</h3>
                        <div className="line"></div>
                    </div>
                    <ul className="platform-lists">
                        {
                            platforms.map(platform=>(
                                <li key={platform.url} className="platform">
                                    <Link to={platform.url} target="_blank">{platform.icon}</Link>
                                </li>
                            ))}
                    </ul>
                </div>
            </section>
            <section className="photos">
                <div className="container">
                    <div className="title-section">
                        <h3>Photo Samples</h3>
                        <div className="line"></div>
                    </div>
                    <ul className="samples">
                        {
                            photos.map(photo=>(
                                <li key={photo.src} className="sample">
                                    <span className="top">{photo.icon}</span>
                                    <div className="thumbnail">
                                        <img src={photo.src} alt={photo.name} />
                                    </div>
                                    <span className="bottom">
                                        <p>{photo.name}</p>
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default PhotographyPage;