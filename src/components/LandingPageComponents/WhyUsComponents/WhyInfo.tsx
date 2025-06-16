import WhyUsItems from "../../../data/WhyUsItems"
import WhyUsCard from "./WhyUsCard"


const WhyInfo = () => {
    return (
        <section className="py-16 bg-gray-50 h-[600px] flex items-center justify-center max-sm:h-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50] font-montserrat">
                    Why Choose Us
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* WhyUsCard component goes here */}
                    {WhyUsItems.map((item, index) => (
                        <WhyUsCard key={index} title={item.title} description={item.description} icon={item.icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyInfo