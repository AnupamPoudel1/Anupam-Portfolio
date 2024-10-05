import SkillSpot from '../assets/images/skillspot.png';
import SrAqua from '../assets/images/sraqua.png';
import NexusAccounting from '../assets/images/nexus.png';
import ChatApp from '../assets/images/chatapp.jpg';
import { FaCheckCircle } from "react-icons/fa";
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { GoArrowUpRight } from "react-icons/go";

const portfolioProjects = [
    {
        company: 'Skill Spot Australia',
        year: '2024',
        title: 'Blogs and Notice Page',
        results: [
            { title: 'Enhanced user experience' },
            { title: 'Enhanced site speed' },
            { title: 'Enhanced mobile traffic' },
        ],
        link: 'https://skill-spot-aus.vercel.app/',
        image: SkillSpot
    },
    {
        company: 'Personal Project',
        year: '2024',
        title: 'Anoynomous Chat App',
        results: [
            { title: 'Chat anoynomously' },
            { title: 'Personal Practice Project' },
        ],
        link: '#',
        image: ChatApp
    },
    {
        company: 'Sr Aqua and Pet House',
        year: '2023',
        title: 'Aquatic Pet Shop Landing Page',
        results: [
            { title: 'Boosted sales' },
            { title: 'Enhanced customer reach' },
            { title: 'Increased brand awareness' },
        ],
        link: 'https://sraquaandpethouse.com',
        image: SrAqua
    },
    {
        company: 'Nexus Accounting',
        year: '2024',
        title: 'Informational Landing Page',
        results: [
            { title: 'Enhanced user experience' },
            { title: 'Increased user engagement' },
            { title: 'Enhanced business' },
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
                        portfolioProjects.map((project, index) => (
                            <Card
                                key={project.link}
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
                                        <ul className='flex flex-col gap-4 mt-4 md:mt-5 text-text-heading'>
                                            {project.results.map((result) => (
                                                <li
                                                    className='flex gap-2 text-sm md:text-base'
                                                    key={result.title}
                                                >
                                                    <FaCheckCircle className='size-5 md:size-6' />
                                                    <span>
                                                        {result.title}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                        <a href={project.link}>
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
