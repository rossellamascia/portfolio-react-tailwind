import { Link } from "react-router-dom";

export interface settingsProps {

}
const Settings: React.FC<settingsProps> = () => {

    return (
        <section className="my-4 max-w-5xl mx-auto min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 ">
            <div>
                <h1 className="text-5xl font-bold text-center">Settings</h1>
            </div>
            <div className="flex flex-wrap gap-10 justify-center mt-10">
                <Link to="/add-work-experience">
                    <div className="bg-purple-600 hover:bg-purple-700 flex justify-center bg-opacity-100 p-10 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <h2 className="ml-2 font-bold text-lg text-white mt-0">Add Work</h2>
                    </div>
                </Link>
                <Link to="/add-skills">
                    <div className="bg-purple-600 hover:bg-purple-700 flex justify-center bg-opacity-100 p-10 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        <h2 className="ml-2 font-bold text-lg text-white mt-0">Add skills</h2>
                    </div>
                </Link>
                <Link to="/add-skills">
                    <div className="bg-purple-600 hover:bg-purple-700 flex justify-center bg-opacity-100 p-10 rounded cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        <h2 className="ml-2 font-bold text-lg text-white mt-0">Add courses</h2>
                    </div>
                </Link>
            </div>
        </section>
    )
};
export default Settings;