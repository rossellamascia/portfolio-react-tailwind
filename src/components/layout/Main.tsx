export interface MainProps {

}

const Main: React.FC<MainProps> = ({children}) => {
    return (
        <main className="flex-1 mx-4 md:mx-12 lg:mx-24 mt-8 sm:mt-16">
            {children}
        </main>
    );
}

export default Main;