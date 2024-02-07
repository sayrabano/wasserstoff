import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CircularProgressBar = ({ percentage ,color}) => {
  return (
    <div style={{ width: '80px', height: '100px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          strokeLinecap: 'butt', 
          textSize: '16px',
          pathTransitionDuration: 0.5,
          pathColor: color, // Corrected syntax

          textColor: 'black',
          trailColor: '#DBDFF1',
          backgroundColor: '#DBDFF1',
        })}
      />
    </div>
  );
};

export default CircularProgressBar;
