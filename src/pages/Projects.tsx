import DarkLandingPage from '../assets/images/dark-saas-landing-page.png';
import LightLandingPage from '../assets/images/light-saas-landing-page.png';
import AiLandingPage from '../assets/images/ai-startup-landing-page.png';
import CheckIcon from '../assets/icons/check-circle.svg';
import ArrowUpright from '../assets/icons/arrow-up-right.svg';

const portfolioProjects = [
    {
        company: 'Acme Corp',
        year: '2002',
        title: 'Dark SaaS Landing Page',
        results: [
            { title: 'Enhanced user experience by 40%' },
            { title: 'Enhanced site speed by 40%' },
            { title: 'Enhanced mobile traffic by 25%' },
        ],
        link: 'https://localhost:5173',
        image: DarkLandingPage
    },
    {
        company: 'Acme Corp',
        year: '2002',
        title: 'Light SaaS Landing Page',
        results: [
            { title: 'Enhanced user experience by 40%' },
            { title: 'Enhanced site speed by 40%' },
            { title: 'Enhanced mobile traffic by 25%' },
        ],
        link: 'https://localhost:5173',
        image: LightLandingPage
    },
    {
        company: 'Acme Corp',
        year: '2002',
        title: 'AI SaaS Landing Page',
        results: [
            { title: 'Enhanced user experience by 40%' },
            { title: 'Enhanced site speed by 40%' },
            { title: 'Enhanced mobile traffic by 25%' },
        ],
        link: 'https://localhost:5173',
        image: AiLandingPage
    }
]

const Projects = () => {
    return (
        <section className='pb-16 lg:py-24'>
            <div className="container">
                <div className="flex justify-center">
                    <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-text to-secondary text-transparent bg-clip-text'>Real World Results</p>
                </div>
                <h2 className='font-poppins text-3xl md:text-5xl mt-6 text-center text-secondary font-bold'>Featured Projects</h2>
                <p className='text-center text-text mt-4 md:text-lg lg:text-xl max-w-md mx-auto'>See how I transform concepts into engaging digital experiences</p>

                <div className='flex flex-col mt-10 md:mt-20 gap-20'>
                    {
                        portfolioProjects.map((project) => (
                            <div
                                className="bg-secondary/10 rounded-3xl relative z-0 overflow-hidden after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:z-10 after:outline-text px-8 md:px-10 lg:px-20 pt-8 md:pt-12 lg:pt-16 after:pointer-events-none"
                                key={project.title}
                            >
                                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                    <div className='lg:pb-16'>
                                        <div className="bg-gradient-to-r from-text-heading to-secondary text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm gap-2">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className='font-poppins text-2xl md:text4xl mt-2 md:mt-5 text-secondary'>{project.title}</h3>
                                        <hr className='border-t-2 border-text-heading/40 mt-4 md:mt-5' />
                                        <ul className='flex flex-col gap-4 mt-4 md:mt-5 text-text-heading'>
                                            {project.results.map((result) => (
                                                <li className='flex gap-2 text-sm md:text-base'>
                                                    <img
                                                        src={CheckIcon}
                                                        alt="Check Circle Icon"
                                                        className='size-5 md:size-6'
                                                    />
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
                                                <img
                                                    src={ArrowUpright}
                                                    alt="Arrow Up Right Icon"
                                                    className='size-4'
                                                />
                                            </button>
                                        </a>
                                    </div>
                                    <div className='relative'>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none'
                                        />
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Projects
