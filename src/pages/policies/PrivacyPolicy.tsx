const Privacy = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="pt-16">
                <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                                Privacy Policy
                            </h1>
                            <p className="text-xl mb-8 font-roboto">
                                Last updated: January 1, 2025
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-4xl mx-auto px-4 py-12">
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-[#2C3E50] font-montserrat">
                            Information Collection
                        </h2>
                        <div className="space-y-4 text-gray-600 font-roboto">
                            <p>
                                We collect information that you provide directly to us,
                                including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Name and contact information</li>
                                <li>Company details and business information</li>
                                <li>Communication preferences</li>
                                <li>Service usage data</li>
                            </ul>
                        </div>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-[#2C3E50] font-montserrat">
                            Use of Information
                        </h2>
                        <div className="space-y-4 text-gray-600 font-roboto">
                            <p>We use the collected information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Provide and maintain our services</li>
                                <li>Communicate with you about our services</li>
                                <li>Improve and personalize your experience</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-[#2C3E50] font-montserrat">
                            Data Protection
                        </h2>
                        <div className="space-y-4 text-gray-600 font-roboto">
                            <p>
                                We implement appropriate technical and organizational measures
                                to protect your personal information, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Encryption of data in transit and at rest</li>
                                <li>Regular security assessments</li>
                                <li>Access controls and authentication</li>
                                <li>Employee training on data protection</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-2xl font-bold mb-4 text-[#2C3E50] font-montserrat">
                            Cookies Policy
                        </h2>
                        <div className="space-y-4 text-gray-600 font-roboto">
                            <p>
                                We use cookies and similar tracking technologies to track
                                activity on our service and hold certain information. Cookies
                                are files with small amount of data which may include an
                                anonymous unique identifier.
                            </p>
                            <p>
                                You can instruct your browser to refuse all cookies or to
                                indicate when a cookie is being sent. However, if you do not
                                accept cookies, you may not be able to use some portions of our
                                service.
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Privacy;