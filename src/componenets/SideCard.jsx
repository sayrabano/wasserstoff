import React from "react";
import "../assest/css/sidebar.css";
import earnImg from '../assest/images/Side indicators.png';
import saleImg from '../assest/images/Side indicators1.png';
import purchImg from '../assest/images/Side indicators2.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircularProgressBar from "./progressbar/CircularProgressBar";

const SideCard = () => {

  return (
    <div className="SideCard">
      <div className="ProfileName">
        <span>WSTF FRONT-END HACKATHON</span>
      </div>
      <div className="TagName">
        <h6 className="user">
          All Users  
        </h6>
        <span className="detail">DETAIL &nbsp; </span><ArrowForwardIosIcon className="arrow" style={{width:'0.5em'}}/>
        
      </div>
      <div className="total">
        <h1 >2,431,340</h1>
      </div>
      <div className="followStatus">
        <div className="follow">
          <img src={earnImg} alt="Earning Image" style={{marginTop:'5px'}} />
          <div className="follow">
            <span style={{ display: 'inline-block', width: '100px' }}>Total earning</span>
            <h6 style={{ display: 'inline-block' ,marginTop:'2px',marginLeft:'0px'}}>540,549</h6>
          </div>
        </div>
        
        <div className="follow">
          <img src={saleImg} alt="Sales Image" />
          <span>Sales</span>
          <br/>
          <h6 style={{marginLeft:'-66px'}}>1,205,677</h6>
        </div>
        <div className="follow">
          <img src={purchImg} alt="Purchase Image" />
          <span>Purchases</span>
          <br/>
          <h6 style={{marginLeft:'-96px'}}>48,430,039</h6>
        </div>
       
      </div>
      <div className="bar-div">
      
      <CircularProgressBar percentage={27} color={'#023AFF'}/>
      <div className="followBar">
          
          <h6 className="totaluser">92,980 <br/></h6>
          <span className="activeuser">Active users</span>
          
          

      </div>
      
      
      <CircularProgressBar percentage={67} color={'#00B929'} />
      <div className="followBar">
          
          <h6 className="totaluser">22,652 <br/></h6>
          <span className="activeuser">New users</span>
          
          

      </div>
      </div>
     


    </div>
  );
};

export default SideCard;
