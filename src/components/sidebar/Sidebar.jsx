import React from 'react'
import './Sidebar.css'

import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";

import { NavLink } from 'react-router-dom'; 

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarItems">
                    <NavLink to='/' className='link' >
                        <li className="sidebarItem">
                            <LineStyleIcon className='sidebarIcon'/>
                            Home
                        </li>
                    </NavLink>
                    <li className="sidebarItem">
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarItem">
                        <TrendingUpIcon className='sidebarIcon'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarItems">
                    <NavLink to='/users' className='link'>
                        <li className="sidebarItem">
                            <PermIdentityIcon className='sidebarIcon'/>
                                Users
                        </li>
                    </NavLink>
                    <NavLink to='/newUser' className='link'>
                        <li className="sidebarItem">
                            <PermIdentityIcon className='sidebarIcon'/>
                                New User
                        </li>
                    </NavLink>
                    <NavLink to='/products' className='link'>
                        <li className="sidebarItem">
                            <StorefrontIcon className='sidebarIcon'/>
                                Products
                        </li>
                    </NavLink>
                    <li className="sidebarItem">
                        <AttachMoneyIcon className='sidebarIcon'/>
                        Transactions
                    </li>
                    <li className="sidebarItem">
                        <BarChartIcon className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarItems">
                    <li className="sidebarItem">
                        <MailOutlineIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarItem">
                        <DynamicFeedIcon className='sidebarIcon'/>
                        Feedback
                    </li>
                    <li className="sidebarItem">
                        <ChatBubbleOutlineIcon className='sidebarIcon'/>
                        Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarItems">
                    <li className="sidebarItem">
                        <WorkOutlineIcon className='sidebarIcon'/>
                        Manage
                    </li>
                    <li className="sidebarItem">
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarItem">
                        <ReportIcon className='sidebarIcon'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
