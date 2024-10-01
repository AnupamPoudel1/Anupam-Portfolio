import { ComponentPropsWithRef } from "react"
import { twMerge } from "tailwind-merge"
import grainImage from '../assets/images/grain.jpg';

const Card = ({ className, children, ...others }: ComponentPropsWithRef<'div'>) => {
    return (
        <div
            className={twMerge("bg-white rounded-3xl relative z-0 overflow-hidden after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:z-10 after:outline-text after:pointer-events-none", className)}
            {...others}
        >
            <div className="absolute inset-0 -z-30 opacity-5" style={{
                backgroundImage: `url(${grainImage})`
            }}
            ></div>
            {children}
        </div>
    )
}

export default Card
