import React from 'react'
import './WidgetLg.css'
import data from '../../Datas/TransActionsData'

export default function WidgetLg() {
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Lastest TransActions</h3>
        <table className="widgetLgTable">
            <thead>
                <tr className="widgetLgTableHead">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.id} className="widgetLgItemTr">
                        <td className="widgetLgItemUser">
                            <img src='./images/profile.jfif' alt="Profile" className='widgetLgItemImg' />
                            <span className="widgetLgItemName">{item.customer}</span>
                        </td>
                        <td className="widgetLgItemDate">{item.date}</td>
                        <td className="widgetLgItemAmount">{item.amount}</td>
                        <td className={'widgetLgItemStatus'}>
                            <button className={`widgetLgItemBtn ${item.status}`}>{item.status}</button>
                        </td>
                    </tr>  
                ))}
            </tbody>
        </table>
    </div>
  )
}
