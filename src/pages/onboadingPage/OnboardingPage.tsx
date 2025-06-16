import React, { useState, useEffect } from "react";

const OnboardingPage = () => {
    const [step, setStep] = useState(1);
    type FormFields = "company_name" | "industry" | "contact_name" | "contact_email" | "contact_phone" | "project_title" | "project_description" | "start_date" | "end_date";

    const [formData, setFormData] = useState<Record<FormFields, string>>({
        company_name: "",
        industry: "",
        contact_name: "",
        contact_email: "",
        contact_phone: "",
        project_title: "",
        project_description: "",
        start_date: "",
        end_date: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const savedData = localStorage.getItem("onboardingFormData");
        if (savedData) {
            setFormData(JSON.parse(savedData));
        }
    }, []);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const clientResponse = await fetch("/api/create-client", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    company_name: formData.company_name,
                    industry: formData.industry,
                    contact_name: formData.contact_name,
                    contact_email: formData.contact_email,
                    contact_phone: formData.contact_phone,
                }),
            });

            if (!clientResponse.ok) throw new Error("Failed to create client");

            const clientData = await clientResponse.json();

            const projectResponse = await fetch("/api/create-project", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    client_id: clientData.id,
                    title: formData.project_title,
                    description: formData.project_description,
                    start_date: formData.start_date,
                    end_date: formData.end_date,
                }),
            });

            if (!projectResponse.ok) throw new Error("Failed to create project");

            localStorage.removeItem("onboardingFormData");
            window.location.href = "/client-portal";
        } catch (err) {
            setError("Something went wrong. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-8">
                <div className="flex justify-between items-center mb-6">
                    {[1, 2].map((num) => (
                        <div key={num} className="flex items-center">
                            <div className={`rounded-full h-8 w-8 flex items-center justify-center font-bold ${step >= num ? "bg-blue-500 text-white" : "bg-gray-200"}`}>{num}</div>
                            {num < 2 && <div className={`w-16 h-1 ${step > num ? "bg-blue-500" : "bg-gray-200"}`} />}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-4">
                        {["company_name", "industry", "contact_name", "contact_email", "contact_phone"].map((field) => (
                            <input
                                key={field}
                                type={field.includes("email") ? "email" : field.includes("phone") ? "tel" : "text"}
                                name={field}
                                value={formData[field as FormFields]}
                                onChange={handleInputChange}
                                placeholder={field.replace("_", " ").toUpperCase()}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        ))}
                    </div>

                    {step === 2 && (
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="project_title"
                                value={formData.project_title}
                                onChange={handleInputChange}
                                placeholder="Project Title"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                            <textarea
                                name="project_description"
                                value={formData.project_description}
                                onChange={handleInputChange}
                                placeholder="Project Description"
                                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                rows={4}
                                required
                            />
                            <input
                                type="date"
                                name="start_date"
                                value={formData.start_date}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                                title="Start Date"
                                placeholder="Start Date"
                            />
                            <input
                                type="date"
                                name="end_date"
                                value={formData.end_date}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                                title="End Date"
                                placeholder="End Date"
                            />
                        </div>
                    )}

                    {error && <div className="text-red-500 text-sm">{error}</div>}

                    <div className="mt-6 flex justify-between">
                        {step > 1 && (
                            <button type="button" onClick={() => setStep(step - 1)} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300">Back</button>
                        )}

                        {step < 2 ? (
                            <button type="button" onClick={() => setStep(step + 1)} className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 ml-auto">Next</button>
                        ) : (
                            <button type="submit" disabled={loading} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 ml-auto">{loading ? "Submitting..." : "Submit"}</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default OnboardingPage;
