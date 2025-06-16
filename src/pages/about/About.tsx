import { FaChartLine, FaHandshake, FaLightbulb } from "react-icons/fa";
import Statistic from "../../components/About/Statistic";
import ValueCard from "../../components/About/ValueCard";
import TeamMember from "../../components/About/TeamMember";


const About = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <div className="pt-16 flex-grow">
                <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">About ConsultPro</h1>
                        <p className="text-xl mb-8 font-roboto">
                            Transforming businesses through strategic consulting excellence
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-[#2C3E50] mb-6 font-montserrat">Our Story</h2>
                            <p className="text-gray-600 mb-4 font-roboto">
                                Founded in 2020, ConsultPro emerged from a vision to transform
                                how businesses approach their challenges and opportunities. We
                                believe that every business, regardless of size, deserves
                                access to premium consulting services that can drive real
                                growth and innovation.
                            </p>
                            <p className="text-gray-600 font-roboto">
                                Today, we've helped hundreds of businesses across various
                                industries achieve their goals through our strategic
                                consulting services.
                            </p>
                        </div>
                        <div className="bg-gray-100 rounded-lg p-8">
                            <div className="grid grid-cols-2 gap-4">
                                <Statistic number="500+" label="Clients Served" />
                                <Statistic number="95%" label="Success Rate" />
                                <Statistic number="20+" label="Industries" />
                                <Statistic number="50+" label="Expert Consultants" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12 font-montserrat">Our Values</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <ValueCard icon={<FaLightbulb />} title="Innovation" description="We constantly seek new and better ways to solve complex business challenges." />
                            <ValueCard icon={<FaHandshake />} title="Integrity" description="We maintain the highest standards of professional ethics and transparency." />
                            <ValueCard icon={<FaChartLine />} title="Excellence" description="We deliver exceptional results through dedication and expertise." />
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12 font-montserrat">Our Team</h2>
                        <div className="grid md:grid-cols-4 gap-8">
                            <TeamMember name="Sarah Johnson" title="CEO & Founder" />
                            <TeamMember name="Michael Chen" title="Head of Strategy" />
                            <TeamMember name="Emily Rodriguez" title="Lead Consultant" />
                            <TeamMember name="David Kim" title="Operations Director" />
                        </div>
                    </div>
                </section>

                <section className="py-16 bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-bold mb-8 font-montserrat">Ready to Transform Your Business?</h2>
                        <p className="text-xl mb-8 font-roboto">Let's work together to achieve your business goals</p>
                        <a href="/contact" className="inline-block bg-white text-[#2C3E50] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-roboto">
                            Get in Touch
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
