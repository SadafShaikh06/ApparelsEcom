import Input from '../../components/Input';
import '../../css/Price.css';
import {FaRupeeSign} from "react-icons/fa";

const Price = ({handleChange})=>{
    return(
        <>
        <div className='ml'>
            <h2 className='sidebar-title price-title'>Price</h2>

            <div className='sidebar-div'>

            <Input
            handleChange={handleChange}
            value={499}
            title='Rs.0-499'
            name='test2'
            />
            <Input
            handleChange={handleChange}
            value={999}
            title='Rs.500-999'
            name='test2'
            />
            <Input
            handleChange={handleChange}
            value={1499}
            title='Rs.1000-1499'
            name='test2'
            />
            <Input
            handleChange={handleChange}
            value={1999}
            title='Rs.1500-1999'
            name='test2'
            />
            <Input
            handleChange={handleChange}
            value={2499}
            title='Rs.2000-2499'
            name='test2'
            />
            <Input
            handleChange={handleChange}
            value={2500}
            title='Over Rs.2500'
            name='test2'
            />


            {/* <label className='sidebar-label-contaier'>
                    <input type='radio' name='test2'/>
                    <span className='checkmark'></span>
                    All
                </label>

                <label className='sidebar-label-contaier'>
                    <input type='radio' name='test2'/>
                    <span className='checkmark'></span>
                    <FaRupeeSign className='rupee'/>0 - <FaRupeeSign className='rupee'/>999
                </label>

                <label className='sidebar-label-contaier'>
                    <input type='radio' name='test2'/>
                    <span className='checkmark'></span>
                    <FaRupeeSign className='rupee'/>1000 - <FaRupeeSign className='rupee'/>1999
                </label>

                <label className='sidebar-label-contaier'>
                    <input type='radio' name='test2'/>
                    <span className='checkmark'></span>
                    <FaRupeeSign className='rupee'/>2000 - <FaRupeeSign className='rupee'/>2999
                </label>

                <label className='sidebar-label-contaier'>
                    <input type='radio' name='test2'/>
                    <span className='checkmark'></span>
                    <FaRupeeSign className='rupee'/>3000 - <FaRupeeSign className='rupee'/>3999
                </label>

                <label className='sidebar-label-contaier'>
                    <input type='radio' name='test2'/>
                    <span className='checkmark'></span>
                    <FaRupeeSign className='rupee'/>4000 & Above
                </label>  */}
            </div>
        </div>
    
       
        
        </>
    );
}

export default Price;