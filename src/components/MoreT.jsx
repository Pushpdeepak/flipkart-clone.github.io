import React from 'react';
import './MoreT.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GetAppIcon from '@mui/icons-material/GetApp';
const MoreT = () => {
  return (
    <div className='moret'> 
    <div className="moret_in">
        <NotificationsIcon/>
        <p>Notification Preferences</p>
    </div>
    <hr />
    <div className="moret_in">
        <LiveHelpIcon/>
        <p>24*7 Customer Care</p>
    </div>
    <hr />
    <div className="moret_in">
        <TrendingUpIcon/>
        <p>Advertise</p>
    </div>
    <hr />
    <div className="moret_in">
        <GetAppIcon/>
        <p>Download app</p>

    </div>
    

    </div>
  )
}

export default MoreT