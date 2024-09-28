import memojiImage from '../assets/images/memoji-computer.png';
import ArrowDown from '../assets/icons/arrow-down.svg';
import grainImage from '../assets/images/grain.jpg';
import starIcon from '../assets/icons/star.svg';
import sparcleIcon from '../assets/icons/sparkle.svg';
import Orbit from '../components/Orbit';

const Hero = () => {
    return (
        <div className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
            <div className="absolute inset-0 mask">
                <div className="absolute inset-0 -z-30 opacity-5" style={{
                    backgroundImage: `url(${grainImage})`
                }}
                ></div>

                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>

                <Orbit size={800} rotation={-72}>
                    <img
                        src={starIcon}
                        alt="stars"
                        className='size-28'
                    />
                </Orbit>
                <Orbit size={550} rotation={20}>
                    <img
                        src={starIcon}
                        alt="stars"
                        className='size-12'
                    />
                </Orbit>
                <Orbit size={590} rotation={98}>
                    <img
                        src={starIcon}
                        alt="stars"
                        className='size-8'
                    />
                </Orbit>

                <Orbit size={430} rotation={-13}>
                    <img
                        src={sparcleIcon}
                        alt="stars"
                        className='size-8 opacity-20'
                    />
                </Orbit>
                <Orbit size={440} rotation={79}>
                    <img
                        src={sparcleIcon}
                        alt="stars"
                        className='size-5 opacity-20'
                    />
                </Orbit>
                <Orbit size={530} rotation={178}>
                    <img
                        src={sparcleIcon}
                        alt="stars"
                        className='size-10 opacity-20'
                    />
                </Orbit>
                <Orbit size={710} rotation={145}>
                    <img
                        src={sparcleIcon}
                        alt="stars"
                        className='size-14 opacity-20'
                    />
                </Orbit>

                <Orbit size={710} rotation={80}>
                    <div
                        className='size-3 bg-secondary rounded-full opacity-20'
                    />
                </Orbit>
                <Orbit size={510} rotation={-40}>
                    <div
                        className='size-3 bg-secondary rounded-full opacity-20'
                    />
                </Orbit>
                <Orbit size={650} rotation={-5}>
                    <div
                        className='size-3 bg-secondary rounded-full opacity-20'
                    />
                </Orbit>
            </div>

            <div className="container">
                <div className="flex-col-center">
                    <img
                        src={memojiImage}
                        alt="Emoji of person behind laptop"
                        className='size-[100px]'
                    />
                    <div className='bg-secondary border border-text px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                        <div className='bg-green-600 size-2.5 rounded-full'></div>
                        <div className='text-sm font-medium'>
                            Available for new projects.
                        </div>
                    </div>
                </div>

                <div className="max-w-lg m-auto">
                    <h1 className='font-poppins text-3xl md:text-5xl text-center mt-8 tracking-wide text-secondary font-bold'>Building Exceptional User Experiences</h1>
                    <p className='mt-4 text-center text-text md:text-lg'>
                        I specialize in transforming designs into functional, high performing web applications. Let's discuss your next project.
                    </p>
                </div>
                <div className='flex-center flex-col md:flex-row mt-8 gap-4'>
                    <button className='inline-flex items-center gap-2 border border-secondary px-6 h-12 rounded-xl bg-secondary text-primary'>
                        <span>
                            👋
                        </span>
                        <span className='font-semibold'>
                            Let's Connect
                        </span>
                    </button>

                    <button className='inline-flex items-center gap-2 border border-text px-6 h-12 rounded-xl'>
                        <span className='font-semibold'>
                            Explore My Work
                        </span>
                        <img
                            src={ArrowDown}
                            alt="arrow down"
                            className='size-4'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero
