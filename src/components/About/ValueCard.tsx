interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-[#3498DB] text-3xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[#2C3E50] mb-4 font-montserrat">{title}</h3>
        <p className="text-gray-600 font-roboto">{description}</p>
    </div>
);

export default ValueCard;