import React from 'react';
import '../../assest/css/sidebar.css';

export default function Popover() {
 

  return (
    <div className='pop'>
      <div className='sales-div'>
        <div className='list'>
          <span>Sales Figures</span>
          <ul className='horizontal-list'>
            <li>Sales</li>
            <li>Users</li>
            <li>Product</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="graph">
          <div className="vertical-lines">
            
          </div>
          <div className="x-axis">
            <div className="horizontal-line"></div>
            <div className="month-names">
              {/* Render month names */}
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, index) => (
                <span key={index} className="month">{month}</span>
              ))}
            </div>
          </div>
          
          {/* Additional circles */}
          <div className="circle" ></div>
          <div className="circle1" ></div>


        </div>
      </div>
    </div>
  );
}
