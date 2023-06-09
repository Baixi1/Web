import React from 'react';
// import './style/Modalandpin.css';
import Pin from './Pin.js';
import Modal from './CreateModal.js';
import Masonry from 'masonry-layout';

import { Link } from 'react-router-dom';
const ModalAndPin = (props) => {
    const item = props.item;
  
    const styles = {
        pin: {
            margin: 0,
            padding: 0,
            borderRadius: '16px',
            backgroundColor: '#5C469C',
            color: 'white'
        },
    }
    return (
    <div className='container'>
      <div className='card' style={{...styles.pin, ...styles[props.size]}}>
            <img height={200} src={item.image} class="card-img  "></img>
            {/* <div className='desc'> */}
            <p>
            <div onClick={() => { window.location.href = `/show-item/${item._id}`; }}>
          <div>{item.name}</div>
        </div>
            </p>
          {/* <p>{item.manufacturer}</p> */}
          {/* </div> */}
      </div>
    </div>
    );
  };

  
export default ModalAndPin;