import Avatar1 from '../assets/images/memoji-avatar-1.png';
import Avatar2 from '../assets/images/memoji-avatar-2.png';
import Avatar3 from '../assets/images/memoji-avatar-3.png';
import Avatar4 from '../assets/images/memoji-avatar-4.png';
import Avatar5 from '../assets/images/memoji-avatar-5.png';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import { Fragment } from 'react/jsx-runtime';

const testimonials = [
    {
        name: 'Roju Ghimire',
        position: 'My wife',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque sapiente asperiores esse sunt ipsam pariatur inventore exercitationem qui consequuntur.',
        avatar: Avatar1
    },
    {
        name: 'Ganesh Kunwar',
        position: 'Friend',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque sapiente asperiores esse sunt ipsam pariatur inventore exercitationem qui consequuntur.',
        avatar: Avatar2
    },
    {
        name: 'Rajan',
        position: 'Sr Aqua Owner',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque sapiente asperiores esse sunt ipsam pariatur inventore exercitationem qui consequuntur.',
        avatar: Avatar3
    },
    {
        name: 'Pradeep Phuyal',
        position: 'SSA Owner',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque sapiente asperiores esse sunt ipsam pariatur inventore exercitationem qui consequuntur.',
        avatar: Avatar4
    },
    {
        name: 'Akshar Lamichhane',
        position: 'Friend',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum itaque sapiente asperiores esse sunt ipsam pariatur inventore exercitationem qui consequuntur.',
        avatar: Avatar5
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
