import React from 'react';
import './Header.css';
import MoreT from './MoreT';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { LoginT } from './LoginT';
import 'tippy.js/themes/light.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header_first">
            <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
            <div className="header_first1">
                <span className='span1'>Explore</span>
                <span className='span2'>Plus</span>
                <span>
                    <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" width="10" />
                </span>
            </div>
        </div>
        <div className="header_second">
            <input placeholder='Search for products' type="text" />
             <SearchIcon/>
        </div>
        <div className="header_third">
            <Tippy content={<LoginT/>}
            interactive ={true}
            theme='light'
            >
                <button>Login</button>
            </Tippy>
            
        </div>
        <div className="header_fourth">
            <Tippy content={<MoreT/>}
            interactive={true}
             theme='light'
             
            >
                <span>More</span>
            </Tippy>
            
            <ExpandMoreIcon/>
        </div>
        <div className="header_fifth">
            <ShoppingCartIcon/>
            <p>Cart</p>
        </div>
    </div>
  )
}

export default Header