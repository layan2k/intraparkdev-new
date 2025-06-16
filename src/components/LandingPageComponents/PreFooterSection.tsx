import { Link } from "react-router-dom"


const PreFooterSection = () => {
    return (
        <section id="contact" className="bg-[#2C3E50] text-white py-20 h-[500px] items-center flex justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold mb-8 font-montserrat">
                    Ready to Transform Your Business?
                </h2>
                <p className="text-xl mb-8 font-roboto">
                    Take the first step towards success with our expert consulting
                    services
                </p>
                <Link
                    to="/onboarding"
                    className="inline-block bg-[#3498DB] text-white px-8 py-3 rounded-lg hover:bg-[#2980B9] transition-colors font-roboto"
                >
                    Start Now
                </Link>
            </div>
        </section>
    )
}

export default PreFooterSection