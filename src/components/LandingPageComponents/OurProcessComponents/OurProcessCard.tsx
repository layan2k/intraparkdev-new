import OurProcessCardInterface from "../../../data/OurProcessCardInterface"


const OurProcessCard = ({ cardId, title, description }: OurProcessCardInterface) => {
    return (
        <div className="text-center">
            <div className="w-16 h-16 bg-[#3498DB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">{cardId}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#2C3E50] font-montserrat">
                {title}
            </h3>
            <p className="text-gray-600 font-roboto">
                {description}
            </p>
        </div>
    )
}

export default OurProcessCard