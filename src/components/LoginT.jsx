import React from 'react'
import './LoginT.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaymentIcon from '@mui/icons-material/Payment';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StoreIcon from '@mui/icons-material/Store';
 
export const LoginT = () => {
  return (
    <div className='logint'>
         <div className="logint_in">
           <h2>New customer?</h2>
           <h2 className='signUp'>Signup</h2>
         </div>
         <hr />
         <div className="logint_in">
            <AccountCircleIcon/>
            <p>My Profile</p>
         </div>
         <hr />
         <div className="logint_in">
            <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"  alt="" />
            <p>Flipkart Plus Zone</p>
         </div>
         <hr />
         <div className="logint_in">
            <StoreIcon/>
            <p>Orders</p>
         </div>
         <hr />
         <div className="logint_in">
            <FavoriteIcon/>
            <p>Wishlist</p>
         </div>
         <hr />
         <div className="logint_in">
            <PaymentIcon/>
            <p>Rewards</p>
         </div>
         <hr />
         <div className="logint_in">
            <CardGiftcardIcon/>
            <p>Gift Cards</p>
         </div>
          

    </div>
  )
}
