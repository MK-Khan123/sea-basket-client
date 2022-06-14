import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import FAQs from './FAQs/FAQs';
import HowItWorks from './HowItWorks/HowItWorks';
import IntroVideo from './IntroVideo/IntroVideo';
import ReadingMaterials from './ReadingMaterials/ReadingMaterials';
import HotTopics from './HotTopics/HotTopics';

const Home = () => {
    document.title = 'Home';

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <main>
                <Banner />
                <HowItWorks />
                <Categories />
                <IntroVideo />
                <FAQs />
                <ReadingMaterials />
                <HotTopics />
            </main>
            
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;