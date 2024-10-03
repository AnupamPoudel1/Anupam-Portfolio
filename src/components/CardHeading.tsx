import { twMerge } from 'tailwind-merge';
import { PiStarFourFill } from "react-icons/pi";

const CardHeading = ({ title, description, className }: { title: string; description: string, className?: string }) => {
    return (
        <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
            <div className="inline-flex items-center gap-2"> 
                <PiStarFourFill className='size-9 text-secondary' />
                <h3 className="font-text-secondary text-3xl text-secondary">{title}</h3>
            </div>
            <p className="text-sm lg:text- max-w-xs text-text mt-2">
                {description}
            </p>
        </div>
    )
}

export default CardHeading
