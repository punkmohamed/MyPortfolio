import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { socialMedia } from '@/data'
import { Cover } from './ui/cover'
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className="w-full  pb-10 mb-[100px] md:mb-5" id="contact">
            <div className=" flex flex-col items-center">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                    Build amazing websites <br /> at <Cover>warp speed</Cover>
                </h1>
                <h1 className='heading lg:max-w-[45vw]'>
                    Ready to take <span className='text-purple'>your</span> digital presence to the next level?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-center">Reach out to me today and let&apos;s discuss how can i help you achieve your goals.</p>
                <a href='mailto:contact@mohamedhas.ahmed@gmail.com'>
                    <MagicButton title="let's get in touch"
                        position="right"
                        icon={<FaLocationArrow />}
                    />
                </a>
            </div>
            <div className='flex mt-16 md:flex-row flex-col items-center justify-center gap-3'>
                <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Mohamed hassan</p>
                <div className=" flex items-center md:gap-3 gap-6">
                    {socialMedia.map((profile) => (
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                            <a href={profile.link} target='_blank'>
                                <Image src={profile.img} alt="icon" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer