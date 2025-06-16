import OurProcessCard from "./OurProcessCard"
import OurProcessCardItems from "../../../data/OurProcessCardItems"

const OurProcess = () => {
    return (
        <section className="py-16 h-[600px] flex items-center justify-center max-sm:h-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#2C3E50] font-montserrat">
                    Our Process
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {OurProcessCardItems.map((item, index) => (
                        <OurProcessCard key={index} cardId={item.cardId} title={item.title} description={item.description} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurProcess