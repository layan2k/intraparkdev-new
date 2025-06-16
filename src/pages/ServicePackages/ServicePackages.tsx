import { FaCheck } from "react-icons/fa";
import packageItems from "../../data/Packages";


const ServicePackages : React.FC = () => {
    const packages = packageItems;
    return (
        <div className="min-h-screen bg-white flex-grow mt-15">
            <header className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-montserrat">Our Service Packages</h1>
                <p className="text-xl mt-4 font-roboto">Choose the right solution for your business</p>
            </header>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {packages.map((pkg, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
                        <h3 className="text-2xl font-bold text-[#2C3E50] mb-4 font-montserrat">{pkg.title}</h3>
                        <p className="text-3xl font-bold text-[#3498DB] mb-4 font-montserrat">{pkg.price}</p>
                        <p className="text-gray-600 mb-6 font-roboto flex-grow">{pkg.description}</p>
                        <ul className="space-y-3 mb-6 flex-grow">
                            {pkg.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center text-gray-600 font-roboto">
                                    <FaCheck className="text-green-500 mr-2" /> {feature}
                                </li>
                            ))}
                        </ul>
                        <a href="/onboarding" className="block w-full bg-[#3498DB] text-white text-center px-4 py-2 rounded-lg hover:bg-[#2980B9] transition-colors font-roboto mt-auto">
                            Get Started
                        </a>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ServicePackages;