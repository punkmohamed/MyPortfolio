"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradiantBg";
import { GlobeDemo } from './gridGlobe'
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from "@/data/confetti.json";
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "./MagicButton";
import Image from 'next/image';
export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    img,
    imgClassName,
    titleClassName,
    spareImg,
    id,

}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
    id?: number,
}) => {
    const [copied, setCopied] = useState(false)
    const leftLists = ["ReactJS", "TailWind", "Typescript"];
    const rightLists = ["Node", "Express", "Nest.js"];

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        const text = "mohamedhas.ahmed@gmail.com"
        navigator.clipboard.writeText(text)
        setCopied(true)
    }
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.4]",
                className
            )}
            style={{
                background: 'rgb(4,7,29)',
                backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)'
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <Image src={img} alt={img} className={cn(imgClassName, 'object-cover, object-center')} />
                    )}
                </div>
                <div className={` absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <Image src={spareImg} alt={spareImg} className={'object-cover, object-center w-full h-full'} />
                    )}
                </div>
                {id === 6 && (<BackgroundGradientAnimation>
                    <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
                </BackgroundGradientAnimation>)}
                <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>
                    {id === 2 && <GlobeDemo />}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                            <div className="flex flex-col gap-3 lg:gap-8">
                                {leftLists.map((item, i) => (
                                    <span key={i} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                ))}
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-8">
                                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]" />
                                {rightLists.map((item, i) => (
                                    <span key={i} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"}`}>
                                <Lottie options={defaultOptions} height={200} width={400} />
                            </div>
                            <MagicButton title={copied ? 'Email copied' : 'Copy my Email'} icon={<IoCopyOutline />} otherClasses="!bg-[#161a31]" handleClick={handleCopy} position="left" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
