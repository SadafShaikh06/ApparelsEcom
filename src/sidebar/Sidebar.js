import '../css/Sidebar.css';
import {FaShoppingCart} from "react-icons/fa";
import Category from './category/Category';
import Price from './price/Price';
import Colors from './colors/Colors';

const Sidebar =({handleChange})=>{
    // console.log(handleChange);
    return(
        <>
        <section className='sidebar'>
            <div className='logo-container'>
                <FaShoppingCart/>
            </div>

            <Category/>
            <Price/>
            <Colors/>

        </section>
      
        
        </>
    );
}

export default Sidebar;