import { Link } from "react-router-dom"


const Footer = () => {
    const date = new Date().getFullYear()
    return (
        < footer className="bg-gray-900 text-white py-8" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="font-roboto">
                        © {date} IntraSpark.Dev. All rights reserved.
                    </p>
                    <div className="space-x-6">
                        <Link to="/terms">Terms & Conditions</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer

