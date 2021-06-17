
const Spinner: React.FC = () => {

    return (
        <div className="relative flex justify-center items-center h-screen">
            <div className="inline-block animate-ping ease duration-400 w-5 h-5 bg-purple-800 mx-5"></div>
            <div className="inline-block animate-ping ease duration-300 w-5 h-5 bg-purple-800 mx-5"></div>
            <div className="inline-block animate-ping ease duration-200 w-5 h-5 bg-purple-800 mx-5"></div>
            <div className="inline-block animate-ping ease duration-100 w-5 h-5 bg-purple-800 mx-5"></div>
        </div>
    )
};
export default Spinner;