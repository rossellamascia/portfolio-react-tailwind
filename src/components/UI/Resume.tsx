import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { Works } from "../../Models/Works";
import AuthContext from "../../store/auth-context";

export interface ResumeProps {
    works: Works[];
}

const Resume: React.FC<ResumeProps> = ({ works }) => {

    const ctxAuth = useContext(AuthContext);

    return (
        <section className="my-4 max-w-5xl mx-auto">
            <div className="text-3xl font-bold mb-8">Resume</div>


            <div className="grid grid-cols-2 gap-4">
                {/* <!-- Work Experience --> */}

                <div>
                    <div className="flex flex-wrap items-center">
                        <div className="text-2xl font-semibold mb-4 mr-12">Working Experience</div>
                        {ctxAuth.isLoggedIn && (
                            <div className="text-2xl font-semibold mb-4">
                                <Link to="add-work-esperance">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </div>
                    {works.map(work => (
                        <div className="flex gap-3 content-center" key={work.id}>
                            <div>
                                <img src={work.fileUrl} alt="img" width="100px" height="auto" />
                            </div>
                            <div>
                                <div className="text-xl font-bold">{work.role}</div>
                                <p className="my-1 font-light">{work.company} </p>
                                <p className="text-gray-500 my-1"> {work.from} {work.to} | {work.type}</p>
                                <p className="text-gray-500 mt-1"> {work.city}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* <!-- Skills --> */}
                <div>
                    <div className="text-2xl font-semibold mb-4">Skills</div>

                    <div className="text-xl font-light my-2">React.js</div>

                </div>

                {/* <!-- Courses --> */}
                <div>
                    <div className="text-2xl font-semibold mb-4">Courses</div>

                    <div>
                        <div className="text-xl font-bold my-2">aulab</div>
                        <p className="my-1 font-light">by aulab</p>
                        <p className="text-gray-500 my-1">2002</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;