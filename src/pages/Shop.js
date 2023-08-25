import React from "react";
import '../css/Shop.css';
import Footer from "../common/Footer";
import Header from "../common/Header";
import TopNavbar from "../common/TopNavbar";
import {FaShoppingCart, FaSearch} from 'react-icons/fa';
import Recommended from "../recommended/Recommended";
import Category from '../sidebar/category/Category';
import Price from '../sidebar/price/Price';
import Colors from '../sidebar/colors/Colors';


const Shop = ({handleChange, result, handleClick, handleInputChange})=>{
    return(
        <>
        <Header/>
        <TopNavbar/>
        

        <section className="product-page">

        <section className='sidebar'>
            {/* <div className='logo-container'>
                <h1><FaShoppingCart/></h1>
            </div> */}

            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>

        </section> 

        <section className="productbar">

        <div className="search-bar">
            <input onChange={handleInputChange} type="text" placeholder="Search Here...."/>
            <FaSearch className="search-logo"/>
        </div>

        <Recommended handleClick={handleClick}/>


       

        <section className="card-container">
           {result}
        </section>

        </section>
        </section>

        

        <Footer/>
        </>
    );
}

export default Shop;