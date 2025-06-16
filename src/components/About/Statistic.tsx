interface StatisticProps {
    number: string;
    label: string;
}

const Statistic = ({ number, label }: StatisticProps) => (
    <div className="text-center">
        <span className="text-4xl font-bold text-[#3498DB] font-montserrat">{number}</span>
        <p className="text-gray-600 font-roboto">{label}</p>
    </div>
);

export default Statistic;