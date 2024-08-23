import React from 'react'
import './Home.css'
import Feature from '../../components/feature/Feature'
import Chart from '../../components/chart/Chart'
import chartData from '../../Datas/ChartData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className="home">
      <Feature></Feature>
      <Chart title='User Analytics' grid data={chartData} dataKey='Sale'></Chart>
      <div className="widgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
