import SkillSpot from '../assets/images/skillspot.png';
import SrAqua from '../assets/images/sraqua.png';
import NexusAccounting from '../assets/images/nexus.png';
import ChatApp from '../assets/images/chatapp.jpg';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { GoArrowUpRight } from "react-icons/go";
import { FaReact, FaHtml5, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiTypescript, SiSocketdotio, SiJavascript } from "react-icons/si";

const FeaturedProjects = [
    {
        company: 'Skill Spot Australia',
        year: '2024',
        title: 'Blogs and Notice Page',
        techs: [
            {
                image: FaReact,
                title: 'React Js'
            },
            {
                image: FaNode,
                title: 'Node Js'
            },
            {
                image: SiMongodb,
                title: 'Mongo DB'
            },
            {
                image: SiExpress,
                title: 'Express Js'
            },
            {
                image: SiTailwindcss,
                title: 'Tailwind CSS'
            },
            {
                image: SiTypescript,
                title: 'Typescript'
            },
        ],
        link: 'https://skill-spot-aus.vercel.app/',
        image: SkillSpot
    },
    {
        company: 'Personal Project',
        year: '2024',
        title: 'Anoynomous Chat App',
        techs: [
            {
                image: FaHtml5,
                title: 'HTML5'
            },
            {
                image: FaNode,
                title: 'Node Js'
            },
            {
                image: SiSocketdotio,
                title: 'Socket Io'
            },
            {
                image: SiExpress,
                title: 'Express Js'
            },
            {
                image: SiTailwindcss,
                title: 'Tailwind CSS'
            },
            {
                image: SiJavascript,
                title: 'JavaScript'
            },
        ],
        link: '#',
        image: ChatApp
    },
    {
        company: 'Sr Aqua and Pet House',
        year: '2023',
        title: 'Aquatic Pet Shop Landing Page',
        techs: [
            {
                image: FaReact,
                title: 'React Js'
            },
            {
                image: FaNode,
                title: 'Node Js'
            },
            {
                image: SiMongodb,
                title: 'Mongo DB'
            },
            {
                image: SiExpress,
                title: 'Express Js'
            },
            {
                image: SiTailwindcss,
                title: 'Tailwind CSS'
            },
            {
                image: SiTypescript,
                title: 'TypeScript'
            },
        ],
        link: 'https://sraquaandpethouse.com',
        image: SrAqua
    },
    {
        company: 'Nexus Accounting',
        year: '2024',
        title: 'Informational Landing Page',
        techs: [
            {
                image: FaReact,
                title: 'React Js'
            },
            {
                image: FaNode,
                title: 'Node Js'
            },
            {
                image: SiMongodb,
                title: 'Mongo DB'
            },
            {
                image: SiExpress,
                title: 'Express Js'
            },
            {
                image: SiTailwindcss,
                title: 'Tailwind CSS'
            },
            {
                image: SiTypescript,
                title: 'Typescript'
            },
        ],
        link: 'https://nexus-accounting.vercel.app/',
        image: NexusAccounting
    }
]

const Projects = () => {
    return (
        <section className='pb-16 lg:py-24' id='projects'>
            <div className="container">
                <SectionHeader
                    eyebrow={'Real World Results'}
                    title={'Featured Projects'}
                    description={'See how I transform concepts into engaging digital experiences'}
                />
                <div className='flex flex-col mt-10 md:mt-20 gap-20'>
                    {
                        FeaturedProjects.map((project, index) => (
                            <Card
                                key={index}
                                className='px-8 md:px-10 lg:px-20 pt-8 md:pt-12 lg:pt-16 sticky'
                                style={{
                                    top: `calc(80px + ${index * 40}px)`
                                }}
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                    <div className='lg:pb-16'>
                                        <div className="bg-gradient-to-r from-text-heading to-text text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className='font-text-secondary font-bold text-2xl md:text4xl mt-2 md:mt-5 text-secondary'>{project.title}</h3>
                                        <hr className='border-t-2 border-text-heading/40 mt-4 md:mt-5' />

                                        <div className="flex flex-wrap py-0.5 mt-4 md:mt-5 gap-6 md:gap-3">
                                            {project.techs.map((result) => (
                                                <div
                                                    key={result.title}
                                                    className="inline-flex items-center gap-1 px-3 py-2 outline outline-2 outline-text rounded-lg"
                                                >
                                                    <span className="size-6">
                                                        {
                                                            <result.image className="size-6" />
                                                        }
                                                    </span>
                                                    <span className="font-semibold text-xs">
                                                        {result.title}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <a href={project.link} target='_blank'>
                                            <button
                                                className='bg-secondary text-primary h-12 w-full md:w-auto px-6 font-semibold rounded-xl inline-flex items-center justify-center gap-2 mt-8'
                                            >
                                                <span>
                                                    Visit Live Site
                                                </span>
                                                <GoArrowUpRight className='size-6' />
                                            </button>
                                        </a>
                                    </div>
                                    <div className='relative'>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-3xl'
                                        />
                                    </div>
                                </div>
                            </Card>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
