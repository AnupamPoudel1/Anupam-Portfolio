import Avatar1 from '../assets/images/memoji-avatar-1.png';
import Avatar3 from '../assets/images/memoji-avatar-3.png';
import Avatar4 from '../assets/images/memoji-avatar-4.png';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Fragment } from 'react/jsx-runtime';

const testimonials = [
    {
        name: 'Roju Ghimire',
        position: 'Colleague, Partner in crime',
        text: `I had the pleasure of working alongside Anupam for the past year, and I can confidently say they are one of the most talented developers I've ever collaborated with. Their expertise across the full stack is second to none, and they were always willing to share their knowledge, whether it was helping to debug tricky issues or providing guidance on best coding practices.`,
        avatar: Avatar4
    },
    {
        name: 'Abhiyan Luitel',
        position: 'HR Manager RGB IT',
        text: `Working with Anupam was a really good experience. He tackled every challenge we threw at him, whether it was frontend or backend work. His ability to seamlessly switch between technologies and solve complex problems made him an invaluable asset to our team. His knowledge across the stack is impressive, and he provided insightful solutions that greatly improved the performance and usability of our platform.`,
        avatar: Avatar1
    },
    {
        name: 'Rajan',
        position: 'Sr Aqua Owner',
        text: `I was thoroughly impressed by Anupam's attention to detail and ability to deliver high-quality code on time. He built a robust and scalable web application for us, all while ensuring the code was clean and easy to maintain. His efficiency in managing both the frontend and backend aspects of the project saved us time and resources. If you're looking for a full stack developer who can balance speed and quality, Anupam is the one!`,
        avatar: Avatar1
    },
    {
        name: 'Adamya Neupane',
        position: 'Sr. Dev, Info Shapers Nepal',
        text: `Anupam is not only an outstanding full stack developer but also an incredible team player. He worked closely with our designers and project managers, making sure everyone was aligned and contributing to the success of the project. His communication skills and proactive attitude made them easy to work with, and they were always open to feedback and new ideas. I highly recommend Anupam for any development project that requires technical excellence and a collaborative approach.`,
        avatar: Avatar3
    },
    {
        name: 'Pradeep Phuyal',
        position: 'Senior at Skill Spot Australia',
        text: `From the outset, Anupam demonstrated an incredible understanding of both user experience and performance optimization. He ramped our platform, creating a sleek and intuitive interface while ensuring that the backend systems were optimized for speed and reliability. Our site now loads faster than ever, and we've seen a significant improvement in user engagement. We couldn't be happier with the results.`,
        avatar: Avatar3
    }
];

const Testimonials = () => {
    return (
        <div className='py-16 lg:py-32'>
            <div className='container'>
                <SectionHeader
                    eyebrow={'Happy Clients'}
                    title={'What My Client Say About Me'}
                    description={`Don't just take my word for it. See what my client has to say about my work.`}
                />
                <div className='mt-12 lg:mt-16 flex overflow-x-clip mask-text py-4 -my-4'>
                    <div className="flex flex-none gap-8 pr-8 -translate-x-1/2 animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
                        {[...new Array(2)].fill(0).map((_, idx) => (
                            <Fragment key={idx}>
                                {testimonials.map((testimonial) => (
                                    <Card key={testimonial.name} className='p-6 md:p-8 max-w-xs md:max-w-md hover:-rotate-3 transition duration-500'>
                                        <div className='flex gap-4 items-center'>
                                            <div className='size-14 rounded-full inline-flex bg-text items-center justify-center flex-shrink-0'>
                                                <img
                                                    src={testimonial.avatar}
                                                    alt={testimonial.name}
                                                    className='max-h-full'
                                                />
                                            </div>
                                            <div>
                                                <div className='font-semibold text-secondary'>{testimonial.name}</div>
                                                <div className='text-sm text-text-heading'>{testimonial.position}</div>
                                            </div>
                                        </div>
                                        <p className='mt-4 md:mt-6 text-sm md:text-base text-text'>{testimonial.text}</p>
                                    </Card>
                                ))}
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
