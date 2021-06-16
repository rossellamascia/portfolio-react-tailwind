import Main from '../components/layout/Main';
import Header from '../components/UI/Header';
import Hero from '../components/UI/Hero';
import Resume from '../components/UI/Resume';
import Social from '../components/UI/Social';
import Footer from '../components/UI/Footer';
import Gallery from '../components/UI/Gallery';
import useHttp from '../hooks/useHttp';
import { useEffect, useState } from 'react';
import { Works } from '../Models/Works';
import { urlAPI } from '../utility';
import Spinner from '../components/UI/Spinner';

export interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const [works, setWorks] = useState<Works[]>([])

    const {
        isLoading,
        error,
        sendRequest: fetchWork,
    } = useHttp();


    useEffect(() => {
        const abort = new AbortController();
        const transformWorks = (workObj: Works[]) => {
            const loadedWorks = [];
            for (const key in workObj) {
                loadedWorks.push({
                    id: key,
                    city: workObj[key].city,
                    company: workObj[key].company,
                    from: workObj[key].from,
                    to: workObj[key].to,
                    type: workObj[key].type,
                    role: workObj[key].role,
                    fileUrl: workObj[key].fileUrl
                });
            }
            setWorks(loadedWorks);
        };

        fetchWork({
            url: `${urlAPI}/works.json`
        }, transformWorks)

        return () => {
            abort.abort();
        };
    }, [fetchWork])

    return (
        <>
            <Hero />
            <Gallery />
            <Resume works={works} />
            <Social />
        </>
    );
}

export default Home;