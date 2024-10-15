
import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/spotlight"

import './Hero.css'

import Image from 'next/image';
const images = ['/next.svg', '/re.svg', '/tail.svg']

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
                    <div

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
                    </div>
                    <div

                        className="app__header-img"
                    >
                        <Image src='/IMG_4559.png' alt="profile_bg" />
                        <div

                        >
                            <Image
                                src='/circle.svg'
                                alt="profile_circle"
                                className="overlay_circle"
                            />
                        </div>
                    </div>

                    <div

                        className="app__header-circles flex flex-wrap justify-center space-x-2"
                    >
                        {images.map((circle, index) => (
                            <div
                                className="circle-cmp flex items-center justify-center z-[9999] border-2 border-purple shadow-black-100 p-2 m-2 rounded-full"
                                key={`circle-${index}`}
                            >
                                <Image src={circle} alt="profile_bg" className="w-16 h-16 md:w-20 md:h-20" />
                            </div>
                        ))}
                    </div>
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
















