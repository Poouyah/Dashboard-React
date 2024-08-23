import React from 'react'
import './Feature.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Feature() {
  return (
    <div className="features">
        <div className="feature">
            <span className="featureTitle">Revanue</span>
            <div className="featureRate">
                <span className="featurePrice">$2,415</span>
                <span className="featurePresent">-11.4 <ArrowDownwardIcon className='featureIcon negative' /></span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>

        <div className="feature">
            <span className="featureTitle">Sales</span>
            <div className="featureRate">
                <span className="featurePrice">$4,415</span>
                <span className="featurePresent">-1.4 <ArrowDownwardIcon className='featureIcon negative' /></span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>

        <div className="feature">
            <span className="featureTitle">Cost</span>
            <div className="featureRate">
                <span className="featurePrice">$2,225</span>
                <span className="featurePresent">+2.4 <ArrowUpwardIcon className='featureIcon' /></span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
    </div>
  )
}
