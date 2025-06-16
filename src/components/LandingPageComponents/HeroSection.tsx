import { Link } from "react-router-dom"


const HeroSection : React.FC = () => {
    return (
        <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-20 h-[800px] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                        Transform Your Business with Cutting-Edge Software Solutions
                    </h1>
                    <p className="text-xl mb-8 font-roboto">
                        Custom Web & Mobile Development, AI-Powered Automation, and Scalable Cloud Solutions to Drive Growth and Efficiency. <br /> Let’s Build the Future Together! 🚀
                    </p>
                    <Link
                        to="/onboarding"
                        className="inline-block bg-white text-[#2C3E50] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-roboto"
                    >
                        Start Your Journey
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection