import Input from '../../components/Input';
import '../../css/Category.css';

const Category = ({handleChange})=>{
    return(
        <>
        
        <div className='ml'>
            <h2 className='sidebar-title'>Category</h2>

            <div className='sidebar-div'>

            <Input
            handleChange={handleChange}
            value='pants'
            title='Pants'
            name='test'
            />

            <Input
            handleChange={handleChange}
            value='shoes'
            title='Shoes'
            name='test'
            />

            <Input
            handleChange={handleChange}
            value='tshirt'
            title='Tshirt'
            name='test'
            />

            <Input
            handleChange={handleChange}
            value='sweatshirt'
            title='SweatShirt'
            name='test'
            />

            <Input
            handleChange={handleChange}
            value='croptop'
            title='Croptop'
            name='test'
            />

            <Input
            handleChange={handleChange}
            value='accessories'
            title='Accessories'
            name='test'
            />

            <Input
            handleChange={handleChange}
            value='handbag'
            title='Handbag'
            name='test'
            />
            
            </div>
        </div>
        
        </>
    );
}

export default Category;