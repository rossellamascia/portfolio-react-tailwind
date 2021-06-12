import { Works } from "../../Models/Works";

export interface ResumeProps {
    works: Works[];
}

const Resume: React.FC<ResumeProps> = ({ works }) => {

    return (
        <section className="my-4 max-w-5xl mx-auto">
            <div className="text-3xl font-bold mb-8">Resume</div>

            <div className="grid grid-cols-2 gap-4">
                {/* <!-- Work Experience --> */}
                <div>
                    <div className="text-2xl font-semibold mb-4">Working Experience</div>
                    {works.map(work => (
                        <div key={work.id}>
                            <div className="text-xl font-bold my-2">{work.role}</div>
                            <p className="my-1 font-light">{work.company} </p>
                            <p className="text-gray-500 my-1"> {work.from} {work.to}</p>
                            <p className="text-gray-500 my-1"> {work.city}</p>
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