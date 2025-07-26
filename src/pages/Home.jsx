import React from 'react'
import Header from '../component/Header';
import ExploreMenu from '../component/ExploreMenu';
import Services from '../component/Services';
import AppDownLoad from '../component/AppDownload';
import About from '../component/About';

const Home = () => {
    return (
        <>
            <Header/>
            <About/>
            <ExploreMenu />
            <Services />
            <AppDownLoad />
        </>
    )
}
export default Home;