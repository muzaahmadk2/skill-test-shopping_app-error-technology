import { Navbar } from 'react-bootstrap';
import classes from './NavBar.module.css';
import {BiDotsHorizontal} from 'react-icons/bi';
import {RiShoppingBagFill} from 'react-icons/ri';
import { Link, NavLink,Nav } from 'react-router-dom';

const NavBar = (props) =>{

        return(<div className={classes.navbar}>
            <Link className={classes.brand_logo} to='/'>
                <div className={classes.logo}>
                    <BiDotsHorizontal/>
                </div>
                <h3>ShopHub</h3>
            </Link>
            <Navbar>
                <Link className={classes.navlink} to='/' >Home</Link>
                <Link as={Link} className={classes.navlink} to='/shop' >Shop</Link>
                <Link className={classes.navlink} to='/blog' >Blog</Link>
                <Link className={classes.navlink} to='/contact' >Contact</Link>
                <Link className={classes.navlink} to='/login' >Login</Link>
                <Link className={classes.navlink} to='/signup' >Signup</Link>
                <Link className={classes.navlink} to='/myaccount' >My Account</Link>
            </Navbar>
            <div className={classes.cart}>
                <Link className={classes.cart_logo} to='/cart'>
                    <RiShoppingBagFill/>
                </Link>
            </div>
        </div>)
}

export default NavBar;