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

export interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    const [works, setWorks] = useState<Works[]>([])

    const {
        isLoading,
        error,
        sendRequest: fetchWork,
    } = useHttp();


    useEffect(()=> {
        const transformWorks = (taskObj: any) => {
            const loadedWorks = [];

            console.log(taskObj);
            
        
            for (const key in taskObj) {
              loadedWorks.push({
                id: key,
                city: taskObj[key].city,
                company: taskObj[key].company,
                from: taskObj[key].from,
                to: taskObj[key].to,
                type: taskObj[key].type,
                role: taskObj[key].role
              });
            }
            setWorks(loadedWorks);
          };
        fetchWork({
            url: 'https://portfolio-51f61-default-rtdb.firebaseio.com/work.json'
        }, transformWorks)
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