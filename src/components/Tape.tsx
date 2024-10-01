import { Fragment } from 'react/jsx-runtime';
import { IoStarSharp } from "react-icons/io5";

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
            <div className='bg-gradient-to-r from-text-heading to-secondary -rotate-3 -mx-1'>
                <div className="flex mask-text">
                    <div className='flex flex-none gap-4 pr-4 py-3 -translate-x-0 animate-move-left'>
                        {[...new Array(2)].fill(0).map((idx) => (
                            <Fragment key={idx}>
                                {
                                    words.map((word) => (
                                        <div key={word} className='inline-flex gap-4 items-center'>
                                            <span className='text-sm uppercase font-extrabold text-primary'>{word}</span>
                                            <IoStarSharp className='size-6 text-primary -rotate-12' />
                                        </div>
                                    ))
                                }
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tape
