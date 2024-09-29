import StarIcon from '../assets/icons/star.svg';

const words: string[] = [
    'Performant',
    'Accessible',
    'Secure',
    'Interactive',
    'Scalable',
    'User Friendly',
    'Maintainable',
    'Search Optimized',
    'Responsive',
    'Usable',
    'Relaible'
]

const Tape = () => {
    return (
        <section className='py-16 lg:py-24 overflow-x-clip'>
            <div className='bg-gradient-to-r from-text to-text-heading -rotate-3 -mx-1'>
                <div className="flex mask-text">
                    <div className='flex flex-none gap-4 py-3'>
                        {words.map((word) => (
                            <div key={word} className='inline-flex gap-4 items-center'>
                                <span className='text-sm uppercase font-extrabold text-secondary'>{word}</span>
                                <img
                                    src={StarIcon}
                                    alt="Star"
                                    className='size-6 text-primary -rotate-12'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tape
