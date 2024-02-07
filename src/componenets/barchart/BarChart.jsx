import React from 'react';
import '../../assest/css/sidebar.css';
import { styled } from '@mui/material/styles';
import { data } from './barData';
import Footer from '../Footer';

const BarContainer = styled('div')(({ theme }) => ({
  
  width: '100%',
  backgroundColor: '#FFFFFF',
  padding: '5px',
  textAlign: 'center',
}));

const BarChart = () => {
  const maxHeight = 30; // Max height for the bars

  return (
    <>
    <BarContainer>
      <div className="bar-chart">
        <div className='followStatus'>
          <span className='salesfig'>Sales Figure <br/> $10,430</span>
        </div>
        {data.map((item, index) => (
          <div className="bar" key={index} style={{ backgroundColor: item.color, height: `${(item.value / maxHeight) * 100}%` }} />
          ))}
      </div>
    </BarContainer>
    <Footer/>
    </>
    
  );
};

export default BarChart;
