import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa"

function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setStatus({ type: "info", message: "Sending message..." });

        try {
            const response = await fetch("/api/create-client", {
                method: "POST",
                body: JSON.stringify({
                    contact_name: formData.name,
                    contact_email: formData.email,
                    company_name: formData.company,
                    user_id: "contact_form",
                    industry: "Pending",
                }),
            });

            if (!response.ok) throw new Error("Failed to send message");

            setStatus({
                type: "success",
                message: "Message sent successfully! We'll be in touch soon.",
            });
            setFormData({ name: "", email: "", company: "", message: "" });
        } catch {
            setStatus({
                type: "error",
                message: "Failed to send message. Please try again.",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <nav className="bg-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <></>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <></>
                            <></>
                            <></>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] px-6 py-8">
                        <h1 className="text-3xl font-bold text-white font-montserrat text-center">
                            Get in Touch
                        </h1>
                        <p className="text-white text-center mt-2 font-roboto">
                            We're here to help transform your business
                        </p>
                    </div>

                    <div className="p-6">
                        {status.message && (
                            <div
                                className={`mb-6 p-4 rounded-lg ${status.type === "success"
                                    ? "bg-green-100 text-green-700"
                                    : status.type === "error"
                                        ? "bg-red-100 text-red-700"
                                        : "bg-blue-100 text-blue-700"
                                    }`}
                            >
                                {status.message}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 font-roboto"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm font-roboto"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 font-roboto"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm font-roboto"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({ ...formData, email: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="company"
                                    className="block text-sm font-medium text-gray-700 font-roboto"
                                >
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm font-roboto"
                                    value={formData.company}
                                    onChange={(e) =>
                                        setFormData({ ...formData, company: e.target.value })
                                    }
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 font-roboto"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm font-roboto"
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#3498DB] text-white px-4 py-2 rounded-lg hover:bg-[#2980B9] transition-colors font-roboto"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <i className="text-3xl text-[#3498DB] mb-4 flex items-center justify-center">
                            <FaMapMarkerAlt />
                        </i>
                        <h3 className="font-bold text-[#2C3E50] mb-2 font-montserrat">
                            Location
                        </h3>
                        <p className="text-gray-600 font-roboto">
                            123 Business Ave, Suite 100
                            <br />
                            New York, NY 10001
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <i className="text-3xl text-[#3498DB] mb-4 flex items-center justify-center">
                            <FaPhone />
                        </i>
                        <h3 className="font-bold text-[#2C3E50] mb-2 font-montserrat">
                            Phone
                        </h3>
                        <p className="text-gray-600 font-roboto">+1 (555) 123-4567</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <i className="flex items-center justify-center text-3xl text-[#3498DB] mb-4">
                            <FaEnvelope />
                        </i>
                        <h3 className="font-bold text-[#2C3E50] mb-2 font-montserrat">
                            Email
                        </h3>
                        <p className="text-gray-600 font-roboto">contact@intraspark.dev</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;