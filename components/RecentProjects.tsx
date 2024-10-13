"use client"
import { projects } from "@/data"
import { PinContainer } from "./ui/3d-pin"
import { FaLocationArrow } from "react-icons/fa6"
import { Timeline } from "@/components/ui/timeline";
import { TracingBeam } from "./ui/tracing-beam";
import { useRouter } from "next/router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const projectVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
};
const RecentProjects = () => {
    const [filter, setFilter] = useState('')

    const filteredProjects = filter
        ? projects.filter((project) => project.type.includes(filter)) // Filter based on the type array
        : projects; // If no filter, return all projects

    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of {' '}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="my-6  flex items-center justify-center flex-wrap  gap-2">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setFilter("")}>All</button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setFilter("HTML & CSS")}>HTML & CSS</button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setFilter("React")}>React</button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setFilter("Nextjs")}>NextJs</button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setFilter("NativeJS")}>NativeJs</button>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={() => setFilter("NodeJs")}>NodeJs</button>
            </div>
            <TracingBeam className="pl-[0.9rem]" filter={filter}>
                <motion.div layout className="flex flex-wrap items-center justify-center p-4  gap-16 my-10">
                    {filteredProjects.map(({ id, title, des, img, iconLists, link }) => (
                        <motion.div
                            variants={projectVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[20rem] w-[70vw]">
                            <PinContainer title={link} href={link}>
                                <div className='relative flex items-center justify-center sm:w-[20rem] w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10'>
                                    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                        <img src="/bg.png" alt="bg-img" />
                                    </div>
                                    <img src={img} alt={title} className="z-10 absolute bottom-0 rotate-2  rounded-lg h-[12.5rem]" />
                                </div>
                                <h1 className="font-bold md:text-xl text-base line-clamp-1 kg:text-2xl"> {title} </h1>
                                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" >{des}</p>
                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {iconLists.map((icon, index) => (
                                            <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-9 lg:h-9 w-8 h-8 flex items-center justify-center"
                                                style={{ transform: `translateX(=${5 * index * 2}px)` }}>
                                                <img src={icon} alt={icon} className="p-2" />
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
            </TracingBeam>

        </div>
    )
}

export default RecentProjects