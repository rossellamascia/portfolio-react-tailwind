export interface MainProps {

}

const Main: React.FC<MainProps> = ({children}) => {
    return (
        <main className="flex-1 mx-4 md:mx-3 lg:mx-3 mt-8 sm:mt-0">
            {children}
        </main>
    );
}

export default Main;