import React from 'react'
import './Topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <span className="topbarLogo">Dashboard</span>
        </div>
        <div className="topbarRight">
          <div className="topbarIcon">
            <NotificationsIcon></NotificationsIcon>
            <span className="iconBag">2</span>
          </div>
          <div className="topbarIcon">
            <LanguageIcon></LanguageIcon>
            <span className="iconBag">2</span>
          </div>
          <div className="topbarIcon">
            <SettingsIcon></SettingsIcon>
          </div>
          <img src="./images/profile.jfif" alt="Person" className="topbarImg" />
        </div>
      </div>
    </div>
  )
}
