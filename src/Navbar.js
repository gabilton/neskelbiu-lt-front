import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1> NeSkelbiu.lt </h1>
            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>
                <Link to="/signup"> signup </Link>
                <Link to="/recent posts"> Recent posts </Link>
            </div>

        </nav>
    );
}
export default Navbar;