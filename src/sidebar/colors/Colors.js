import Input from '../../components/Input';
import '../../css/Colors.css';

const Colors = ({handleChange})=>{
    return(
        <>


        <div className='ml'>
            <h2 className='sidebar-title color-title'>Colors</h2>
            <div className='sidebar-div'>

                {/* <label className='sidebar-label-contaier'>
                    <input onChange={handleChange} type='radio' name='test2'/>
                    <span className='checkmark all'></span>
                    All
                </label> */}

                <Input
                handleChange={handleChange}
                value='black'
                title='Black'
                name='test1'
                color='black'        
                />
                <Input
                handleChange={handleChange}
                value='blue'
                title='Blue'
                name='test1'
                color='blue' 
                />
                <Input
                handleChange={handleChange}
                value='brown'
                title='Brown'
                name='test1'
                color='brown' 
                />
                <Input
                handleChange={handleChange}
                value='green'
                title='Green'
                name='test1'
                color='green' 
                />
                <Input
                handleChange={handleChange}
                value='white'
                title='White'
                name='test1'
                color='white' 
                />

            </div>
        </div>
        
        </>
    );
}

export default Colors;