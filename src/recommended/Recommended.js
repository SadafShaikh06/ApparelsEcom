import '../css/Recommended.css';
import Buttons from '../components/Buttons';

const Recommended = ({handleClick})=>{
    return(
        <>
        <div className=''>
            <h2 className='recommended-title'>Recommended</h2>
            <div className='recommended-flex'>
                <Buttons onClickHandler={handleClick} value="" title="All Products"/>
                <Buttons onClickHandler={handleClick} value='Women' title="Women's"/>
                <Buttons onClickHandler={handleClick} value="Men" title="Men's"/>
            </div>
        </div>
        </>
    );
}

export default Recommended;