import React from 'react'
import './WidgetSm.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import newUsersData from '../../Datas/NewMembersData'

export default function WidgetSm() {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmItems">
                {newUsersData.map(user => (
                    <li key={user.id} className="widgetSmItem">
                        <img src={user.img} alt="User" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUserName">{user.userName}</span>
                            <span className="widgetSmUserJob">{user.title}</span>
                        </div>
                        <button className='widgetSmMore'><VisibilityIcon className='widgetSmIcon' /></button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
