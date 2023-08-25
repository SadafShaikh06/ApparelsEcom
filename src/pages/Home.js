import React from "react";
import Footer from '../common/Footer';
import Header from "../common/Header";
import TopNavbar from "../common/TopNavbar";

const Home = ()=>{
    return(
        <>
        <Header/>
        <TopNavbar/>
            <h1>Home</h1>
            <Footer/>
        </>
    );
}

export default Home;