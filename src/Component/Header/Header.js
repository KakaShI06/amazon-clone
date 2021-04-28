import React from 'react';
import mainLogo from '../icon/amazon2.png';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './../../StateProvider.js';
import { auth } from './../../firebase.js';
import './Header.css';

function Header() {

    const [{ user, basket }] = useStateValue();   //const [state , dispatch] = useStateValue();
    
    const handleAuthentication = () => {
        
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to = '/'>
                <img src={mainLogo} alt="logo" className="header-logo" />
            </Link>
            <div className = "header-search">
                <input type = "text" className = "header-search-input" />
                <SearchIcon className = "header-search-icon" />
            </div>

            <div className = "header-nav">
                <Link to = {!user && '/login'} >
                    <div onClick={ handleAuthentication } className="header-nav-option">
                        <span className = "header-option-line-one" >
                            Hello {user? user?.email : 'GUEST'}
                        </span>

                        <span className = "header-option-line-two">
                            { user ? 'Sign Out' : 'Sign In'}
                        </span>

                    </div>
                </Link>

                <div className = "header-nav-option">
                    <span className = "header-option-line-one">
                        Return
                    </span>

                    <span className = "header-option-line-two">
                        & Orders
                    </span>
                </div>
                    
                        
                <div className = "header-nav-option">
                    <span className = "header-option-line-one">
                        Your 
                    </span>
                        
                    <span className = "header-option-line-two">
                        Prime    
                    </span>

                </div>

                
                <div className = "header-nav-option">

                </div>

            </div>
            
            
            <Link to = '/checkout'>
                <div className="header-option-basket">
                    <ShoppingCartIcon />
                    <div className="header-option-line-two header-basket-count">{ basket.length }</div>
                </div>
            </Link>
            
            

        </div>
    )
}

export default Header;
