interface TeamMemberProps {
    name: string;
    title: string;
}

const TeamMember = ({ name, title }: TeamMemberProps) => (
    <div className="text-center">
        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
        <h3 className="text-xl font-bold text-[#2C3E50] font-montserrat">{name}</h3>
        <p className="text-gray-600 font-roboto">{title}</p>
    </div>
);

export default TeamMember;