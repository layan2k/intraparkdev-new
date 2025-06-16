import WhyUsItem from "../../../data/WhyUsInterface"


const WhyUsCard = ({ title, description, icon }: WhyUsItem) => {
    return (
        <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <i className="fas fa-chart-line text-4xl text-[#3498DB] mb-4 flex items-center justify-center">
                {icon}
            </i>
            <h3 className="text-xl font-bold mb-2 text-[#2C3E50] font-montserrat">
                {title}
            </h3>
            <p className="text-gray-600 font-roboto">
                {description}
            </p>
        </div>
    )
}

export default WhyUsCard