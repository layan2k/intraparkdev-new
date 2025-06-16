
// import { useState, useEffect } from "react";

import { FaTasks, FaProjectDiagram, FaDollarSign, FaFileAlt, FaFile, FaUser, FaDownload, FaComments } from "react-icons/fa";

function ClientPortal() {
    // const [clients, setClients] = useState([]);
    // const [error, setError] = useState<string | null>(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     async function fetchClients() {
    //         try {
    //             setLoading(true);
    //             const response = await fetch("/api/list-clients", {
    //                 method: "POST",
    //                 body: JSON.stringify({ limit: 10, offset: 0 }),
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`Error: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             setClients(data);
    //         } catch (err) {
    //             console.error(err);
    //             setError("Could not load client data");
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchClients();
    // }, []);

    // if (loading) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen">
    //             <div className="text-xl font-roboto">Loading...</div>
    //         </div>
    //     );
    // }

    // if (error) {
    //     return (
    //         <div className="flex items-center justify-center min-h-screen">
    //             <div className="text-red-500 font-roboto">{error}</div>
    //         </div>
    //     );
    // }

    return (
    <div className=" bg-gray-50 p-4 md:p-8 flex-grow mt-15">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-roboto font-bold mb-8">
                    Client Dashboard
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-roboto font-semibold mb-4 flex items-center">
                            <i className="mr-2">
                                <FaProjectDiagram />
                            </i>
                            Active Projects
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg">
                                <h3 className="font-roboto font-medium">Website Redesign</h3>
                                <div className="mt-2 bg-blue-100 rounded-full h-2">
                                    <div className="bg-blue-500 rounded-full h-2 w-[75%]"></div>
                                </div>
                                <p className="text-sm text-gray-600 mt-2">75% Complete</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-roboto font-semibold mb-4 flex items-center">
                            <i className="mr-2">
                                <FaDollarSign />
                            </i>
                            Upcoming Payments
                        </h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 border rounded-lg">
                                <div>
                                    <p className="font-roboto font-medium">Invoice #1234</p>
                                    <p className="text-sm text-gray-600">Due: Jan 30, 2025</p>
                                </div>
                                <span className="font-roboto font-medium">$1,500</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-roboto font-semibold mb-4 flex items-center">
                            <i className="mr-2">
                                <FaTasks />
                            </i>
                            Project Updates
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                    <p className="font-roboto">Design phase completed</p>
                                </div>
                                <p className="text-sm text-gray-600 mt-1">Yesterday</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-xl font-roboto font-semibold mb-4 flex items-center">
                            <i className="mr-2"> <FaFileAlt /></i>
                            Documents & Deliverables
                        </h2>
                        <div className="space-y-4">
                            <div className="p-4 border rounded-lg flex items-center justify-between">
                                <div className="flex items-center">
                                    <i className="text-red-500 mr-2">
                                        <FaFile />
                                    </i>
                                    <span className="font-roboto">Project Proposal</span>
                                </div>
                                <button className="text-blue-500 hover:text-blue-600">
                                    <i className="fa-download">
                                        <FaDownload />
                                    </i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 bg-white rounded-lg shadow p-6">
                    <h2 className="text-xl font-roboto font-semibold mb-4 flex items-center">
                        <i className="mr-2">
                            <FaComments />
                        </i>
                        Communication History
                    </h2>
                    <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                            <div className="flex items-start">
                                <div className="bg-blue-100 rounded-full p-2 mr-3">
                                    <i className=" text-blue-500">
                                        <FaUser />
                                    </i>
                                </div>
                                <div>
                                    <p className="font-roboto font-medium">Project Manager</p>
                                    <p className="text-sm text-gray-600 mt-1">
                                        Weekly status update meeting scheduled for Friday
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientPortal;