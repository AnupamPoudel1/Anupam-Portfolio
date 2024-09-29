
const SectionHeader = ({ eyebrow, title, description }: { eyebrow: String; title: String; description: String; }) => {
    return (
        <>
            <div className="flex justify-center">
                <p className='uppercase font-semibold tracking-widest bg-gradient-to-r from-text to-secondary text-transparent bg-clip-text'>
                    {eyebrow}
                </p>
            </div>
            <h2 className='font-poppins text-3xl md:text-5xl mt-6 text-center text-secondary font-bold'>
                {title}
            </h2>
            <p className='text-center text-text mt-4 md:text-lg lg:text-xl max-w-md mx-auto'>
                {description}
            </p>
        </>
    )
}

export default SectionHeader
