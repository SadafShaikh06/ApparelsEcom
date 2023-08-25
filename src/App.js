import data from './db/data';

import{
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { lazy, Suspense, useState } from 'react';
import './App.css';
import Contact from './pages/Contact';
import Cards from "./components/Cards";
const Home = lazy(()=>import('./pages/Home'));
const About = lazy(()=>import('./pages/About'));
const Shop = lazy(()=>import('./pages/Shop'));
const Blog = lazy(()=>import('./pages/Blog'));
// const Contact = lazy(()=>import('./pages/Contact'));
const Wishlist = lazy(()=>import('./pages/Wishlist'));
const Cart = lazy(()=>import('./pages/Cart'));

function App() {

  const [selectedCat, setSelectedCat] = useState(null);

  // Input filter
  const [query, setQuery] = useState('');

  const handleInputChange = e =>{
    setQuery(e.target.value);
  }

  const filteredItems = data.filter(
    (data) => data.title.toLocaleLowerCase()
  .indexOf(query.toLocaleLowerCase()) !== -1
  );

  // Radio FIlter
  const handleChange = e =>{
    setSelectedCat(e.target.value);
  }


  // button filter
  const handleClick = e =>{
    setSelectedCat(e.target.value);
  }

  function filteredData(data, selected, query){
    let filteredProducts = data;

    // filtering input items
    if(query){
      filteredProducts = filteredItems;
    }

    // selected filter
    if(selected){
      filteredProducts = filteredProducts
      .filter((
        { category, color, company, newPrice, title })=> 
        category===selected || 
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title===selected
      );
    }

    return filteredProducts.map(({img1, title, star, reviews,prevPrice, newPrice})=>(
      <Cards key={Math.random()}
      img1 = {img1}
      title= {title}
      star = {star}
      reviews = {reviews}
      prevprice = {prevPrice}
      newprice= {newPrice}
      />
    ))
  }

  const result = filteredData(data, selectedCat, query);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='shop' element={
            <Shop 
            handleChange={handleChange}
            query={query}
            handleClick={handleClick}
            handleInputChange={handleInputChange}
            result={result}
            />
            }/>
            <Route path='blog' element={<Blog/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='wishlist' element={<Wishlist/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='*' element={<h1>Page not found</h1>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
