import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import BookImage from '../assets/images/book.png';
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub, FaChrome, FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiMysql, SiExpress } from "react-icons/si";
import MapImage from '../assets/images/map.png';
import Avatar from '../assets/images/bitmoji2.png';
import CardHeading from "../components/CardHeading";
import ToolboxItems from "../components/ToolboxItems";
import Resume from '../assets/resume.pdf';
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
    {
        title: 'JavaScript',
        Icon: IoLogoJavascript
    },
    {
        title: 'TypeScript',
        Icon: SiTypescript
    },
    {
        title: 'HTML5',
        Icon: FaHtml5
    },
    {
        title: 'CSS3',
        Icon: FaCss3
    },
    {
        title: 'React Js',
        Icon: FaReact
    },
    {
        title: 'Github',
        Icon: FaGithub
    },
    {
        title: 'Chrome',
        Icon: FaChrome
    },
    {
        title: 'Node Js',
        Icon: FaNode
    },
    {
        title: 'Express Js',
        Icon: SiExpress
    },
    {
        title: 'MongoDB',
        Icon: SiMongodb
    },
    {
        title: 'My SQL',
        Icon: SiMysql
    },
]

const hobbies = [
    {
        title: 'Painting',
        emoji: '🎨',
        top: '1%',
        left: '1%'
    },
    {
        title: 'Photography',
        emoji: '📷',
        top: '1%',
        left: '45%'
    },
    {
        title: 'Gaming',
        emoji: '🎮',
        top: '25%',
        left: '10%'
    },
    {
        title: 'Music',
        emoji: '🎶',
        top: '30%',
        left: '60%'
    },
    {
        title: 'Fitness',
        emoji: '🏋️‍♀️',
        top: '50%',
        left: '45%'
    },
    {
        title: 'Reading',
        emoji: '📖',
        top: '70%',
        left: '5%'
    },
    {
        title: 'Travelling',
        emoji: '🥾',
        top: '70%',
        left: '45%'
    },
    {
        title: 'Movies',
        emoji: '🎬',
        top: '50%',
        left: '5%'
    },

]

const About = () => {

    const dragConstraint = useRef(null);

    return (
        <section className="py-16 lg:py-24" id="about">
            <div className="container">
                <SectionHeader
                    eyebrow={'About me'}
                    title={'A Glimpse Into My World'}
                    description={'Learn more about who I am, what I do and what inspires me'}
                />
                <div className="mt-20 flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                        <Card className="h-[320px] md:col-span-2 lg:col-span-1">
                            <CardHeading
                                title="My Resume"
                                description="Download my resume"
                            />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <a href={Resume} download>
                                    <img src={BookImage} alt="Book Image" />
                                </a>
                            </div>
                        </Card>
                        <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                            <CardHeading
                                title="My Toolbox"
                                description="Explore technologies and tools I use to create exceptional digital experiences"
                                className=""
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className=""
                                itemsWrapperClassName="animate-move-left"
                            />
                            <ToolboxItems
                                items={toolboxItems}
                                className="mt-6"
                                itemsWrapperClassName="animate-move-right"
                            />
                        </Card>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
                        <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-2">
                            <CardHeading
                                title="Beyond the Code"
                                description="Explore my interests and hobbies beyond the digital realm (Drag to see hidden hobbies)"
                                className="px-6 py-6"
                            />
                            <div className="relative flex-1" ref={dragConstraint}>
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex gap-2 px-6 bg-gradient-to-r from-text-heading to-secondary text-primary rounded-full py-1.5 absolute cursor-pointer"
                                        style={{
                                            left: hobby.left,
                                            top: hobby.top
                                        }}
                                        drag
                                        dragConstraints={dragConstraint}
                                    >
                                        <span className="font-medium">{hobby.title}</span>
                                        <span>{hobby.emoji}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </Card>
                        <Card className="h-[320px] relative md:col-span-2 lg:col-span-1">
                            <img
                                src={MapImage}
                                alt="Map Image"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-text-heading to-secondary after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-secondary after:animate-ping-large">
                                <img
                                    src={Avatar}
                                    alt="My Avatar"
                                    className="size-20 rounded-full"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
