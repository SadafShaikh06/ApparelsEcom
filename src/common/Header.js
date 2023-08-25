import {FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import '../css/Head.css';

const Header = ()=>{
    return (
        <>
        <section className="header">
            <div className='part1'>
            <div className="phone">
                <FaPhoneAlt className='icons'/>
                <span>+91 1234 567 890</span>
            </div>
            <div className='email'>
                <FaEnvelope className='icons'/>
                <span>dummy@gmail.com</span>
            </div>

            </div>

            <div className='part2'>
                <a href=''  className='icons'><FaLinkedin/></a>
                <a href='' className='icons'><FaGithubSquare /></a>
            </div>
        </section>
        </>
    );
}

export default Header;