import Main from '../components/layout/Main';
import Header from '../components/UI/Header';
import Hero from '../components/UI/Hero';
import Resume from '../components/UI/Resume';
import Social from '../components/UI/Social';
import Footer from '../components/UI/Footer';
import Gallery from '../components/UI/Gallery';

export interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <>
            <Hero />
            <Gallery />
            <Resume />
            <Social />
        </>
    );
}

export default Home;