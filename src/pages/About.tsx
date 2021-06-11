export interface AboutProps {

}

const About: React.FC<AboutProps> = () => {
    return (

        <article
            className="mb-16 max-w-5xl mx-auto px-4 prose lg:prose-lg prose-blue dark:prose-dark"
        >
            <h1 className="font-bold text-3xl">About</h1>

        </article>

    );
}

export default About;