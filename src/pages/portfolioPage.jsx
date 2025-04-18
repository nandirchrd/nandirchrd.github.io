import { useState } from 'react';
import Loading from '../components/loading';
import { FaWhatsapp } from 'react-icons/fa';
import { SiGmail, SiLinkedin } from 'react-icons/si';

const PortfolioPage = () => {
  let [isNotebookLoading, setIsNotebookLoading] = useState(false);
  let [isHelperLoading, setIsHelperLoading] = useState(false);
  let [isKremesLoading, setIsKremesLoading] = useState(false);
  let [IsUnemployedLoading, setIsUnemployedLoading] = useState(false);
  let [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleShow = (e, set) => {
    let button = e.target;
    let target = document.getElementById(e.target.dataset.target);
    let lists = [...button.parentElement.parentElement.children];

    button.classList.add('hidden');

    set(() => true);
    setTimeout(() => {
      lists.forEach((list) => {
        list.querySelector('.show').classList.remove('hidden');
        list.querySelector('.show').nextElementSibling.classList.add('hidden');
      });
      button.classList.add('hidden');

      set(() => false);
      target.classList.remove('hidden');
    }, 1000);
  };

  const getAge = () => {
    const today = new Date();
    const birthDate = new Date(2001, 9, 30); // 30 Oktober 2001 (bulan dimulai dari 0)

    let age = today.getFullYear() - birthDate.getFullYear(); // Hitung umur berdasarkan tahun

    // Cek jika bulan atau hari belum lewat
    if (
      today.getMonth() < birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
    ) {
      age--; // Kurangi umur 1 tahun jika belum lewat
    }

    return age;
  };

  let profilePicture = `/assets/images/${!isMouseEnter ? 'me.jpg' : 'me-cartoon.png'}`;
  return (
    <div className="portofolio-page">
      <section className="about-portofolio">
        <div className="container">
          <div className="top">
            <img
              onMouseEnter={() => setTimeout(() => setIsMouseEnter(true), 200)}
              onMouseLeave={() => setTimeout(() => setIsMouseEnter(false), 200)}
              src={profilePicture}
              alt="Foto profil saya"
              className="me"
            />
            <ul className="contact-portofolio">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6285183807094&text=Halo%20Nandi,%20saya%20menelusuri%20portofolio%20Anda.%20Bisakah%20kita%20berbicara%20lebih%20lanjut?'"
                  target="_blank"
                >
                  +62 851-8380-7094
                </a>{' '}
                <FaWhatsapp />
              </li>
              <li>
                <a href="mailto:nandirchrd@gmail.com" target="_blank">
                  nandirchrd@gmail.com
                </a>{' '}
                <SiGmail />
              </li>
              <li>
                <a href="https://id.linkedin.com/in/nandi-richard-157b31228" target="_blank">
                  linkedin.com/in/nandi-richard-157b31228
                </a>{' '}
                <SiLinkedin />
              </li>
            </ul>
          </div>
          <div className="description">
            <h3>NANDI SETIADI</h3>
            <p>
              Nama saya Nandi Setiadi, berusia {getAge()} tahun. Saya bersemangat untuk terus
              belajar dalam dunia kerja. Meskipun pengalaman saya masih terbatas, tetapi saya
              memiliki motivasi tinggi untuk tumbuh, berkembang, dan memberikan kontribusi bagi
              perusahaan Anda.
            </p>
          </div>
          <hr className="line" />
        </div>
      </section>
      <section className="experiences-portofolio">
        <div className="container">
          <h3>Pengalaman Bekerja</h3>
          <ul className="circle">
            <li>
              <h5>Magang sebagai ShopKeeper di Right Notebook</h5>
              <p className="date">2019 Januari - 2019 April</p>
              <p>
                Bertanggung jawab memberi pelayanan ke pelanggan, menjaga kebersihan dan kerapian
                toko, dan belajar memperbaiki laptop yang bermasalah.
              </p>
              <button
                className="show"
                data-target="right-notebook"
                onClick={(e) => handleShow(e, setIsNotebookLoading)}
              >
                Show
              </button>
              {isNotebookLoading && <Loading style={{ margin: '1em auto' }} />}
              <div id="right-notebook" className="hidden">
                <ul className="pictures">
                  <li>
                    <img
                      src="/assets/images/portofolio/right-notebook-1.jpg"
                      alt="Right Notebook"
                    />
                  </li>
                  <li>
                    <img src="/assets/images/portofolio/right-notebook.jpg" alt="Right Notebook" />
                  </li>
                  <li>
                    <img src="/assets/images/portofolio/pkl.jpg" alt="Surat PKL" />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h5>Bekerja sebagai Helper di PT Sukses Ganda Promosindo</h5>
              <p className="date">2022 Mei - 2022 September</p>
              <p>
                Bertanggung jawab untuk membantu sales mempromosikan produk, mendokumentasikan
                aktivitas penjualan untuk laporan, memberikan sampel produk ke konsumen.
              </p>
              <button
                className="show"
                data-target="helper"
                onClick={(e) => handleShow(e, setIsHelperLoading)}
              >
                Show
              </button>
              {isHelperLoading && <Loading style={{ margin: '1em auto' }} />}
              <div id="helper" className="hidden">
                <iframe src="https://youtube.com/embed/mzmHUm_JW8U"></iframe>
                <ul className="pictures">
                  <li>
                    <img src="/assets/images/portofolio/super-bubur.jpg" alt="Event Super bubur" />
                  </li>
                  <li>
                    <img
                      src="/assets/images/portofolio/super-bubur-1.jpg"
                      alt="Event Super bubur"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/images/portofolio/super-bubur-2.jpg"
                      alt="Event Super bubur"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/images/portofolio/super-bubur-3.jpg"
                      alt="Event Super bubur"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/images/portofolio/super-bubur-4.jpg"
                      alt="Event Super bubur"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/images/portofolio/super-bubur-5.jpg"
                      alt="Event Super bubur"
                    />
                  </li>
                  <li>
                    <img
                      src="/assets/images/portofolio/super-bubur-6.jpg"
                      alt="Event Super bubur"
                    />
                  </li>
                  <li>
                    <img src="/assets/images/portofolio/surat-kontrak.jpg" alt="Surat kontrak" />
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <h5>Bekerja sebagai Pengolah Makanan di Keremes Singkong</h5>
              <p className="date">2024 Mei - 2024 Juni</p>
              <p>
                Bertanggung jawab mengolah dan mencetak singkong, memastikan proses produksi yang
                efisien dan menghasilkan produk yang siap diproduksi.
              </p>
              <button
                className="show"
                data-target="kremes"
                onClick={(e) => handleShow(e, setIsKremesLoading)}
              >
                Show
              </button>
              {isKremesLoading && <Loading style={{ margin: '1em auto' }} />}
              <div id="kremes" className="hidden">
                <iframe src="https://youtube.com/embed/YmRs5lV2r0c"></iframe>
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
              <p className="date">Sekarang</p>
              <p>
                Fokus untuk mempelajari pemrograman dan bahasa jepang, selalu berusaha untuk
                menggunakan waktu dengan produktif.
              </p>
              <button
                className="show"
                data-target="unemployed"
                onClick={(e) => handleShow(e, setIsUnemployedLoading)}
              >
                Show
              </button>
              {IsUnemployedLoading && <Loading style={{ margin: '1em auto' }} />}
              <div id="unemployed" className="hidden">
                <ul className="pictures" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                  <li>
                    <img src="/assets/images/portofolio/react.png" alt="Sertifikat dicoding" />
                  </li>
                  <li>
                    <img src="/assets/images/portofolio/js.png" alt="Sertifikat dicoding" />
                  </li>
                </ul>
                <ul>
                  <li>
                    Youtube:{' '}
                    <a href="https://youtube.com/@silent-developer" target="_blank">
                      Coding
                    </a>
                    ,{' '}
                    <a href="https://youtube.com/@nandirichard" target="_blank">
                      Guitar
                    </a>
                  </li>
                  <li>
                    Microstock:{' '}
                    <a href="https://shutterstock.com/g/nandi+richard" target="_blank">
                      ShutterStock
                    </a>
                    ,{' '}
                    <a href="https://www.eyeem.com/u/nandirichard/photos" target="_blank">
                      Eyeem
                    </a>
                  </li>
                  <li>
                    Website:{' '}
                    <a href="https://v-chords.blogspot.com" target="_blank">
                      V-Chords
                    </a>
                    ,{' '}
                    <a href="https://nandirchrd.github.io" target="_blank">
                      Developer Portofolio
                    </a>
                    ,{' '}
                    <a href="https://quran-app-bayrack.netlify.app/" target="_blank">
                      Quran App
                    </a>
                  </li>
                  <li>
                    Certificates / Documents: {''}
                    <a
                      href="https://drive.google.com/drive/folders/170G2wU-u_2triubs0bAt2GhVdtafnc1l?usp=sharing"
                      target="_blank"
                    >
                      Google Drive
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <hr className="line" />
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
          <hr className="line" />
        </div>
      </section>

      <section className="skills-portofolio">
        <div className="container">
          <h3>Keterampilan</h3>
          <ul className="circle">
            <li>Memiliki keterampilan menggunakan Microsoft Office.</li>
            <li>Memiliki keterampilan menggunakan Adobe Photoshop.</li>
            <li>Memiliki keterampilan dalam Pemrograman Web ( Front End Developer ).</li>
            <li>Kemampuan dalam memanajemen waktu dengan baik.</li>
            <li>Berorientasi pada detail dan sangat berhati-hati dalam pekerjaan teknis.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
