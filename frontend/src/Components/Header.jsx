import './Header.css';
import { useState, useRef, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import Backdrop from './UIElements/Backdrop';
// import LoadingSpinner from './UIElements/LoadingSpinner';

// import {userLogout} from '../redux/ActionCreators/userActions';
// import {updateUserProductsPage} from '../redux/ActionCreators/userActions';

// import {cartLogo, base64logo} from '../../src/assets/base64images';

const Header = () => {

//   const [showAccountCard, setShowAccountCard] = useState(false);
//   const [isLogoutLoading, setIsLogoutLoading] = useState(false);

//   const isLoggedInState = useSelector(store => store.isLoggedInState);
//   const userProductsPage = useSelector(store => store.userProductsPage);

//   const currentProductsPageQueryParam = parseInt(useLocation().search.split('=')[1]);

  const userAccountCard = useRef();

//   const dispatch = useDispatch();

//   const logoutHandler = () => {
//     dispatch(userLogout(setIsLogoutLoading));
//   }

//   useEffect(() => {
//     if(userAccountCard.current) {
//       if(showAccountCard) {
//         userAccountCard.current.classList.add('show-user-account-card');
//       } else {
//         userAccountCard.current.classList.remove('show-user-account-card');
//       }
//     }
//   }, [showAccountCard]);

//   useEffect(() => {
//     // Initialise the userProductsPage redux state to the products page query param...
//     if(currentProductsPageQueryParam) { 
//       dispatch(updateUserProductsPage(currentProductsPageQueryParam));
//     } else if(!currentProductsPageQueryParam) { // If the products page query param is null or undefined or other 
//                                                 // invalid value, then initialise the userProductsPage to 1.
//       dispatch(updateUserProductsPage(1));
//     }
//   }, []);


  return (
    <>
    <header style={{padding: '0 1rem', backgroundColor: '#14253b'}}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className='header-logo-container'>
            <img style={{filter: 'contrast(0)', width: '200px', height: 'auto', objectFit: 'cover'}} 
            className='header-logo' src='https://www.canterburypilgrimages.com/wp-content/uploads/2021/04/dummy-logo-5b.png' />
            </div>
            <div className='header-nav-btns-container'>
            {<button style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>
                Home
            </button>}
            <button style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>
                Gold Specials
            </button>
            <button style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>
                Exclusive offers
            </button>
            <button style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>
                Why gold
            </button>
            <NavLink to='/admin' style={{backgroundColor: 'transparent', border: 'none', color: 'white'}}>
                Admin panel
            </NavLink>
            {/* <div className='header-account-btn-container' onMouseEnter={() => {setShowAccountCard(true)}}
                onMouseLeave={() => {setShowAccountCard(false)}}> 
                <NavLink to={`${isLoggedInState ? '/' : '/login'}`} className='header-nav-btn account-nav-btn'>
                Account
                </NavLink>

                <div className='user-account-card' ref={userAccountCard}>
                {!isLoggedInState && <NavLink to='/login' className='user-account-card-nav-btn'>Login</NavLink>}
                {!isLoggedInState && <NavLink to='/signup' className='user-account-card-nav-btn'>Don't have an account? Signup</NavLink>}
                {isLoggedInState && <button onClick={logoutHandler} className='user-account-logout-btn'>Logout</button>}
                {isLoggedInState && <NavLink to='/orders' className='user-account-card-nav-btn'>View your orders</NavLink>}
                </div>
            </div> */}
            {/* <NavLink to='/cart'>
                <img src={cartLogo}/>
            </NavLink> */}
            </div>
        </div>
    </header>
    </>
  )
}

export default Header