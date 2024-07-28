import { useState } from "react";
import Loading from "../components/loading";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail, SiLinkedin } from "react-icons/si";

const PortfolioPage = () => {
    let [isNotebookLoading, setIsNotebookLoading] = useState(false);
    let [isHelperLoading, setIsHelperLoading] = useState(false);
    let [isKremesLoading, setIsKremesLoading] = useState(false);
    let [IsUnemployedLoading, setIsUnemployedLoading] = useState(false);
    

    const handleShow = (e, set)=>{
        let button = e.target;
        let target = document.getElementById(e.target.dataset.target);
        let lists = [...button.parentElement.parentElement.children];

        button.classList.add('hidden');
        
        set(()=>true);
        setTimeout(() => { 
            lists.forEach(list => {
                list.querySelector('.show').classList.remove('hidden');
                list.querySelector('.show').nextElementSibling.classList.add('hidden');
            });
            button.classList.add('hidden');

            set(()=>false);
            target.classList.remove('hidden')
        }, 1000);
    }
    return (
    <div className="portofolio-page">
    <section className="about-portofolio">
        <div className="container">
            <div className="top">
                <img src="/assets/images/me.jpg" alt="Foto profil saya" className="me" />
                <ul className="contact-portofolio">
                    <li><a href="https://api.whatsapp.com/send?phone=62895359763865&text=Halo%20Nandi,%20saya%20menelusuri%20portofolio%20Anda.%20Bisakah%20kita%20berbicara%20lebih%20lanjut?'" target="_blank">+62 895-3597-63865</a> <FaWhatsapp/></li>
                    <li><a href="mailto:nandirchrd@gmail.com" target="_blank">nandirchrd@gmail.com</a> <SiGmail/></li>
                    <li><a href="https://www.linkedin.com/in/nandi-setiadi-157b31228" target="_blank">linkedin.com/nandi-setiadi-157b31228</a> <SiLinkedin/></li>
                </ul>
            </div>
            <div className="description">
                <h3>NANDI SETIADI</h3>
                <p>Nama saya Nandi Setiadi. Saya berusia 22 tahun. Saya bersemangat untuk memulai karier dan terus belajar dalam dunia kerja. Meskipun Saya belum mempunyai banyak pengalaman, Saya memiliki motivasi yang tinggi untuk terus tumbuh dan berkembang serta berkontribusi terhadap perusahaan Anda.</p>
            </div>
            <hr className="line"/>
        </div>
    </section>
    <section className="experiences-portofolio">
        <div className="container">
            <h3>Pengalaman Bekerja</h3>
            <ul className="circle">
                <li>
                    <h5>Magang sebagai ShopKeeper di Right Notebook</h5>
                    <p className="date">2019 Januari - 2019 April</p>
                    <p>Bertanggung jawab untuk memberi pelayanan ke pelanggan. Menjaga kebersihan dan keamananan toko. Dan belajar memperbaiki laptop yang bermasalah.</p>
                    <button className="show" data-target='right-notebook' onClick={(e)=>handleShow(e, setIsNotebookLoading)}>Show</button>
                    { isNotebookLoading && <Loading style={{margin: '1em auto'}}/> }
                    <div id="right-notebook" className='hidden'>
                        <ul className="pictures">
                            <li><img src="/assets/images/portofolio/right-notebook-1.jpg" alt="Right Notebook" /></li>
                            <li><img src="/assets/images/portofolio/right-notebook.jpg" alt="Right Notebook" /></li>
                            <li><img src="/assets/images/portofolio/pkl.jpg" alt="Surat PKL" /></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h5>Bekerja sebagai Helper di PT Sukses Ganda Promosindo</h5>
                    <p className="date">2022 Mei - 2022 September</p>
                    <p>Bertanggung jawab untuk mempromosikan produk. Mendokumentasikan laporan aktivitas penjualan. Dan membantu sales dalam penjualan produk.</p>
                    <button className="show" data-target='helper' onClick={(e)=>handleShow(e, setIsHelperLoading)}>Show</button>
                    { isHelperLoading && <Loading style={{margin: '1em auto'}} /> }
                    <div id="helper" className='hidden'>
                        <iframe src='https://youtube.com/embed/mzmHUm_JW8U'></iframe>
                        <ul className="pictures">
                            <li><img src="/assets/images/portofolio/super-bubur.jpg" alt="Event Super bubur" /></li>
                            <li><img src="/assets/images/portofolio/super-bubur-1.jpg" alt="Event Super bubur" /></li>
                            <li><img src="/assets/images/portofolio/super-bubur-3.jpg" alt="Event Super bubur" /></li>
                            <li><img src="/assets/images/portofolio/surat-kontrak.jpg" alt="Surat kontrak" /></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h5>Bekerja sebagai Pengolah Makanan di Keremes Singkong</h5>
                    <p className="date">2022 Desember</p>
                    <p>Bertanggung jawab untuk mengolah, dan mencetak singkong.</p>
                    <button className="show" data-target='kremes' onClick={(e)=>handleShow(e, setIsKremesLoading)}>Show</button>
                    { isKremesLoading && <Loading style={{margin: '1em auto'}} /> }
                    <div id="kremes" className='hidden'>
                        <iframe src='https://youtube.com/embed/YmRs5lV2r0c'></iframe>
                        <ul className="pictures">
                            <li>
                                <img src="/assets/images/portofolio/kremes-singkong.jpg" alt="Kremes" />
                            </li>
                            <li>
                                <img src="/assets/images/portofolio/produk-kremes-singkong.jpg" alt="Kremes" />
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h5>Unemployed</h5>
                    <p className="date">2023 January - Sekarang</p>
                    <p>Fokus untuk mempelajari pemrograman dan selalu berusaha untuk menggunakan waktu dengan produktif.</p>
                    <button className="show" data-target='unemployed' onClick={(e)=>handleShow(e, setIsUnemployedLoading)}>Show</button>
                    { IsUnemployedLoading && <Loading style={{margin: '1em auto'}} /> }
                    <div id="unemployed" className='hidden'>
                        <ul className="pictures" style={{gridTemplateColumns: '1fr 1fr 1fr'}}>
                            <li><img src="/assets/images/portofolio/react.png" alt="Sertifikat dicoding" /></li>
                            <li><img src="/assets/images/portofolio/js.png" alt="Sertifikat dicoding" /></li>
                        </ul>
                        <ul>
                           <li>Youtube: <a href="https://youtube.com/@silentdev224" target="_blank">Coding</a></li>
                           <li>Microstock: <a href="https://shutterstock.com/g/nandi+richard" target="_blank">ShutterStock</a>, <a href="https://www.eyeem.com/u/nandirichard/photos" target="_blank">EyeEm</a></li>
                           <li>Website: <a href="https://v-chords.blogspot.com" target="_blank">V-Chords</a>, <a href="https://nandirchrd.github.io" target="_blank">Developer Portofolio</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
            <hr className="line"/>
        </div>
    </section>
    <section className="education-portofolio">
        <div className="container">
            <h3>Pendidikan</h3>
            <ul className="circle">
                <li>
                    <h5>SMK Muhammadiyah Kota Tasikmalaya</h5>
                    <p className="date">2017 - 2020 | Rekayasa Perangkat Lunak</p>
                </li>
                <li>
                    <h5>SMP Negeri 6 Kota Tasikmalaya</h5>
                    <p className="date">2014 - 2017</p>
                </li>
                <li>
                    <h5>SD Negeri Cieunteung 4 Kota Tasikmalaya</h5>
                    <p className="date">2008 - 2014</p>
                </li>
            </ul>
            <hr className="line"/>
        </div>
    </section>

    <section className="skills-portofolio">
        <div className="container">
            <h3>Keterampilan</h3>
            <ul className="circle">
                <li>Microsoft Office</li>
                <li>Adobe Photoshop</li>
                <li>Programming</li>
                <li>Memanajemen Waktu Dengan Baik</li>
            </ul>
        </div>
    </section>
    </div>
    )
}

export default PortfolioPage;