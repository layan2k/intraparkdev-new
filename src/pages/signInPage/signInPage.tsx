import { useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("/api/auth/signin", {
                method: "POST",
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            window.location.href = "/client-portal";
        } catch {
            setError("Invalid email or password. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="pt-16">
                <section className="bg-gradient-to-r from-[#2C3E50] to-[#3498DB] text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
                                Sign In
                            </h1>
                            <p className="text-xl mb-8 font-roboto">
                                Access your consulting dashboard
                            </p>
                        </div>
                    </div>
                </section>

                <div className="max-w-md mx-auto px-4 py-12">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                    {error}
                                </div>
                            )}

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
                                    htmlFor="password"
                                    className="block text-sm font-medium text-gray-700 font-roboto"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    minLength={8}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3498DB] focus:ring-[#3498DB] sm:text-sm font-roboto"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({ ...formData, password: e.target.value })
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#3498DB] text-white px-4 py-2 rounded-lg hover:bg-[#2980B9] transition-colors font-roboto disabled:opacity-50"
                            >
                                {loading ? "Signing in..." : "Sign In"}
                            </button>
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500 font-roboto">
                                        Or continue with
                                    </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 font-roboto cursor-pointer"
                                >
                                    <i className="mr-2">
                                        <FaGoogle />
                                    </i>
                                    Google
                                </button>
                                <button
                                    type="button"
                                    className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 font-roboto cursor-pointer"
                                >
                                    <i className="mr-2">
                                        <FaApple />
                                    </i>
                                    iCloud
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
