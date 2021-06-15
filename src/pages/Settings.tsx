import { Link } from "react-router-dom";

export interface settingsProps {

}
const Settings: React.FC<settingsProps> = () => {

    return (
        <section className="my-4 max-w-5xl mx-auto">
            <div className="min-h-screen flex  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <Link to="/add-work-esperance">
                    <div className="bg-purple-600 flex justify-center bg-opacity-100 h-14 p-10 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h2 className="ml-2 font-bold text-lg text-white mt-0">Add Work</h2>
                    </div>
                </Link>
            </div>
        </section>
    )
};
export default Settings;