import { FaBlogger, FaCss3, FaGithub, FaPlayCircle, FaReact, FaRobot } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import { SiArduino, SiAxios, SiJavascript, SiRedux, SiSocketdotio, SiTailwindcss, SiThreedotjs, SiTypescript } from "react-icons/si";
import { TbFileTypeXml } from "react-icons/tb";

const projects = [
    {
        name: "V-Chords",
        description: "My official chord guitar website. I still developing this website and update for another content",
        actions: [
            {
                icon: <MdRocketLaunch/>,
                url: "https://v-chords.blogspot.com"
            },
        ],
        libraries: [<TbFileTypeXml/>, [<FaCss3/>], <FaBlogger/>, <SiJavascript/>],
        thumbnail: "./assets/images/v-chords.png"
    },
    {   
        name: "WhatsApp Clone",
        description: "I used socket io, so that client and server communication occurs in real time.",
        actions: [
            {
                icon: <MdRocketLaunch/>,
                url: "https://eclectic-griffin-58a35d.netlify.app"
            },
        ],
        libraries: [<FaReact/>, <SiTailwindcss/>, <SiAxios/>],
        thumbnail: "./assets/images/whatsapp-clone.png"
    },
    // {   
    //     name: "Netflix Clone",
    //     description: "I used React and Bootstrap and support responsive. I fetched the API used Axios.",
    //     actions: [
    //         {
    //             icon: <MdRocketLaunch/>,
    //             url: "https://nandirchrd-netflix.netlify.app"
    //         },
    //         {
    //             icon: <FaGithub/>,
    //             url: "https://github.com/nandirchrd/netflix-clone-v2"
    //         },
    //     ],
    //     libraries: [<FaReact/>, <FaBootstrap/>, <SiAxios/>],
    //     thumbnail: ""
    // },
    {   
        name: "React Redux Shooping",
        description: "This is just simple project just for learn how to use redux.",
        actions: [
            {
                icon: <MdRocketLaunch/>,
                url: "https://grand-sorbet-2e0ad1.netlify.app"
            },
        ],
        libraries: [<FaReact/>, <SiRedux/>],
        thumbnail: "./assets/images/react-redux-shooping.png"
    },
    {   
        name: "Three JS Ball Bounce",
        description: "Made with Three JS, experiment using three JS.",
        actions: [
            {
                icon: <MdRocketLaunch/>,
                url: "https://rchrd-three-ball.netlify.app/"
            },
        ],
        libraries: [<SiThreedotjs/>],
        thumbnail: "./assets/gifs/ball.gif"
    },
    {   
        name: "Controlling Arduino's Led using Socket.io (IoT)",
        description: "Real time application",
        actions: [
            {
                icon: <FaPlayCircle/>,
                url: "https://www.youtube.com/watch?v=ZmhW6BZ6RI4"
            },
            {
                icon: <FaGithub/>,
                url: "https://github.com/nandirchrd/silentdev-led-controller"
            },
        ],
        libraries: [<FaRobot/>, <SiArduino/>, <SiSocketdotio/>],
        thumbnail: "https://camo.githubusercontent.com/3e6730a07877970e716b1c1ce0c19167a51d04af7abffca1fe9b1ec01443ab7d/68747470733a2f2f696d672e796f75747562652e636f6d2f76692f5a6d685736425a365249342f6d7164656661756c742e6a7067"
    },
    {   
        name: "Quran App",
        description: "I used React and TailwindCSS. I fetched the API used Axios. Can play the audio.",
        actions: [
            {
                icon: <MdRocketLaunch/>,
                url: "https://quran-app-bayrack.netlify.app"
            },
            {
                icon: <FaGithub/>,
                url: "https://github.com/nandirchrd/quran-app"
            },
        ],
        libraries: [<FaReact/>, <SiTailwindcss/>, <SiTypescript/>, <SiAxios/>],
        thumbnail: "./assets/images/quran-app.png"
    },
    
]

export default projects;