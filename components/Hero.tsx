"use client"
import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"
import './Hero.css'
import { motion } from 'framer-motion';

const images = ['/next.svg', '/re.svg', '/tail.svg']
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut',
        },
    },
};
const Hero = () => {
    return (
        <>
            <div className="pb-20 pt-3 mb-5">
                <div>
                    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
                    <Spotlight className="top-10 left-full  h-[80vh] w-[50vw]" fill="purple" />
                    <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
                </div>
                <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
                    {/* Radial gradient for the container to give a faded look */}
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                </div>
                <div className="app__header app__flex">
                    <motion.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__header-info"
                    >
                        <div className="app__header-badge z-[9999]">
                            <div className="badge-cmp app__flex border-2 border-purple ">
                                <span>👋</span>
                                <div style={{ marginLeft: 20 }}>
                                    <p className="p-text">Hello, I am</p>
                                    <h1 className="head-text">Mohamed hassan</h1>
                                </div>
                            </div>
                            <div className="tag-cmp app__flex border-2 border-purple ">
                                <p className="p-text">Web Developer</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, delayChildren: 0.5 }}
                        className="app__header-img"
                    >
                        <img src='/IMG_4559.png' alt="profile_bg" />
                        <motion.img
                            whileInView={{ scale: [0, 1] }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            src='/circle.svg'
                            alt="profile_circle"
                            className="overlay_circle"
                        />
                    </motion.div>

                    <motion.div
                        variants={scaleVariants}
                        whileInView={scaleVariants.whileInView}
                        className="app__header-circles flex flex-wrap justify-center space-x-2"
                    >
                        {images.map((circle, index) => (
                            <div
                                className="circle-cmp flex items-center justify-center z-[9999] border-2 border-purple shadow-black-100 p-2 m-2 rounded-full"
                                key={`circle-${index}`}
                            >
                                <img src={circle} alt="profile_bg" className="w-16 h-16 md:w-20 md:h-20" />
                            </div>
                        ))}
                    </motion.div>
                </div>
                <div className="flex items-center justify-center">
                    <a href="/Mohamed-hassan-ahmed-Front-end.pdf" download="Mohamed-hassan-ahmed-Front-end.pdf">
                        <MagicButton title="MY CV"
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Hero


















// import { FaLocationArrow } from "react-icons/fa6"
// import MagicButton from "./ui/MagicButton"
// import { Spotlight } from "./ui/spotlight"
// import { TextGenerateEffect } from "./ui/TextGenerateEffect"
// import { images } from '../data/images'
// import { motion } from 'framer-motion';
// const Hero = () => {
//     return (
//         <>
//             <div className="pb-20 pt-36">
//                 <div>
//                     <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
//                     <Spotlight className="top-10 left-full  h-[80vh] w-[50vw]" fill="purple" />
//                     <Spotlight className="top-28 left-80  h-[80vh] w-[50vw]" fill="blue" />
//                 </div>
//                 <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0">
//                     {/* Radial gradient for the container to give a faded look */}
//                     <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
//                 </div>
//                 <div className="flex justify-center relative my-20 z-10">
//                     <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//                         <motion.div
//                             whileInView={{ x: [-100, 0], opacity: [0, 1] }}
//                             transition={{duration:0.5}}>

//                         </motion.div>
//                         <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Dynamic web magic with next.js</h2>
//                         <TextGenerateEffect className="text-center text-[40px] md:text-5xl lg:text-6xl" words="Transforming Concepts into seamless User Experiences" />
//                         <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
//                             Hi, I&apos;m Mohamed, a Front-end Developer based in Egypt
//                         </p>
//                         <a href="#about">
//                             <MagicButton title="Show my work"
//                                 icon={<FaLocationArrow />}
//                                 position='right'
//                             />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Hero