import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

const Card = ({ className, children }: PropsWithChildren<{ className?: string }>) => {
    return (
        <div className={twMerge("bg-secondary/10 rounded-3xl relative z-0 overflow-hidden after:content[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:z-10 after:outline-text after:pointer-events-none", className)}>
            {children}
        </div>
    )
}

export default Card
