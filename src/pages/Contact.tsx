
const Contact = () => {
    return (
        <div className="py-16 lg:py-24">
            <div className="container">
                <div className="bg-gradient-to-r from-text-heading to-secondary py-8 px-10 rounded-3xl text-center md:text-left">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-poppins text-primary">Let's Create Something Amazing Together</h2>
                            <p className="text-sm md:text-base mt-2 text-text font-medium">
                                Ready to bring your next project to life? Let's connect and discuss how can i help you achieve your goals
                            </p>
                        </div>
                        <div>
                            <button className="inline-flex items-center bg-primary text-text px-6 h-12 rounded-xl font-semibold w-max border border-text">Contact Me</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
