import {FaRegEye, FaRegHeart, FaOpencart} from 'react-icons/fa';

const Cards = ({img1, title, star, reviews,prevprice, newprice})=>{
    return(
        <>
        
        <section className="card">
                <img src={img1} alt="Bag" className="card-img"></img>
                
                <div className='overlay'>
                    <div className='overlay-btm'>
                    <FaRegHeart className='o-icons'/>
                    <FaRegEye className='o-icons'/>
                    <FaOpencart className='o-icons'/>
                    </div>
                </div>

                <div className="card-details">
                  
                    <h3 className="card-title">{title}</h3>
                   <div className="card-review">
                    {star} {star} {star} {star}
                    <span className="total-review">{reviews}</span>
                   </div>
                   <div className="card-price">
                    <div className="price">
                        <del>{prevprice}</del> Rs.{newprice}
                    </div>

                    {/* <div className="bag">
                        <FaShoppingBag className="bag-icon"/>
                    </div> */}
                   </div>
                </div>
            
            </section>
        
        </>
    );
    }
    
    export default Cards;