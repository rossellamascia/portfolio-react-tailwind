export interface ResumeProps {

}

const Resume: React.FC<ResumeProps> = () => {
    return (
        <section className="my-4 max-w-5xl mx-auto">
            <div className="text-3xl font-bold mb-8">Resume</div>

            <div className="grid grid-cols-2 gap-4">
                {/* <!-- Work Experience --> */}
                <div>
                    <div className="text-2xl font-semibold mb-4">Working Experience</div>

                    <div>
                        <div className="text-xl font-bold my-2">1</div>
                        <p className="my-1 font-light">role</p>
                        <p className="text-gray-500 my-1">2020</p>
                    </div>
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