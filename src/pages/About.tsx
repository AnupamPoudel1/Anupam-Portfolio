import Card from "../components/Card"
import SectionHeader from "../components/SectionHeader"
import BookImage from '../assets/images/book-cover.png';
import JavascriptIcon from '../assets/icons/square-js.svg';
import HtmlIcon from '../assets/icons/html5.svg';
import CssIcon from '../assets/icons/css3.svg';
import ReactIcon from '../assets/icons/react.svg';
import GithubIcon from '../assets/icons/github.svg';
import ChromeIcon from '../assets/icons/chrome.svg';
import MapImage from '../assets/images/map.png';
import Avatar from '../assets/images/memoji-smile.png';
import CardHeading from "../components/CardHeading";
import ToolboxItems from "../components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxItems = [
    {
        title: 'Javascript',
        icons: JavascriptIcon
    },
    {
        title: 'HTML5',
        icons: HtmlIcon
    },
    {
        title: 'CSS3',
        icons: CssIcon
    },
    {
        title: 'React',
        icons: ReactIcon
    },
    {
        title: 'Github',
        icons: GithubIcon
    },
    {
        title: 'Chrome',
        icons: ChromeIcon
    },
]

const hobbies = [
    {
        title: 'Painting',
        emoji: '🎨',
        top: '5%',
        left: '5%'
    },
    {
        title: 'Photography',
        emoji: '📷',
        top: '5%',
        left: '50%'
    },
    {
        title: 'Gaming',
        emoji: '🎮',
        top: '35%',
        left: '10%'
    },
    {
        title: 'Music',
        emoji: '🎶',
        top: '40%',
        left: '70%'
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
        top: '65%',
        left: '5%'
    },
    {
        title: 'Travelling',
        emoji: '🥾',
        top: '70%',
        left: '45%'
    },
]

const About = () => {

    const dragConstraint = useRef(null);

    return (
        <div className="py-16 lg:py-24">
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
                                title="My Reads"
                                description="Explore the books shaping my perspective"
                            />
                            <div className="w-40 mx-auto mt-2 md:mt-0">
                                <img src={BookImage} alt="Book Image" />
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
                                description="Explore my interests and hobbies beyond the digital realm"
                                className="px-6 py-6"
                            />
                            <div className="relative flex-1" ref={dragConstraint}>
                                {hobbies.map((hobby) => (
                                    <motion.div
                                        key={hobby.title}
                                        className="inline-flex gap-2 px-6 bg-gradient-to-r from-text-heading to-secondary text-primary rounded-full py-1.5 absolute"
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
                                    className="size-20"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
