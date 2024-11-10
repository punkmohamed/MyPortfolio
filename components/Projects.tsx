"use client";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { motion } from "framer-motion";
// import { PinContainer } from "./ui/3d-pin"
import Image from "next/image";
import dynamic from "next/dynamic";
const PinContainer = dynamic(
    () => import("./ui/3d-pin").then((mod) => mod.PinContainer),
    { ssr: false }
);
import { TracingBeam } from "./ui/tracing-beam";

type Projects = {
    id: number;
    title: string;
    des: string;
    img: string;
    iconLists: string[];
    link: string;
    type: string[];
}
type ClientProjectsProps = {
    projects: Projects[]
}
const ClientProjects = ({ projects }: ClientProjectsProps) => {
    const [filter, setFilter] = useState("");

    const filteredProjects = filter
        ? projects.filter((project) => project.type.includes(filter))
        : projects;


    const projectVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.95 },
    };
    return (
        <>
            <div className="my-6 flex items-center justify-center flex-wrap gap-2">
                {["All", "HTML & CSS", "React", "Nextjs", "NativeJS", "Full Stack"].map((type) => (
                    <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" key={type} onClick={() => setFilter(type === "All" ? "" : type)}>
                        {type}
                    </button>
                ))}
            </div>
            {/* <TracingBeam className="pl-[0.9rem]" filter={filter}> */}
            <motion.div layout className="flex flex-wrap items-center justify-center p-4  gap-16 my-10">
                {filteredProjects.map(({ id, title, des, img, iconLists, link }) => (
                    <motion.div
                        variants={projectVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        layout
                        key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[20rem] w-[70vw]">
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[20rem] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10'>
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <Image src="/bg.png" alt="bg-img" width={500} height={500} />
                                </div>
                                <Image src={img} alt={title} width={500} height={500} className="z-10 absolute bottom-0 rotate-2  rounded-lg h-[12.5rem]" />
                            </div>
                            <h1 className="font-bold md:text-xl text-base line-clamp-1 kg:text-2xl"> {title} </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" >{des}</p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex items-center justify-center"
                                            style={{ transform: `translateX(=${5 * index * 2}px)` }}>
                                            <Image src={icon} width={34} height={34} alt={icon} className="p-2" />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="flex lg:text-[1rem] md:text-xs text-sm text-purple">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" color='#CBACF9' />
                                </div>
                            </div>
                        </PinContainer>
                    </motion.div>
                ))}
            </motion.div>
            {/* </TracingBeam> */}
        </>
    );
};

export default ClientProjects;
