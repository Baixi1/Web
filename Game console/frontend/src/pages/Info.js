import React, { useState, useEffect } from 'react';
import './style/Info.scss';
import Pin from '../components/Pin';
import Modal from '../components/CreateModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import axios from 'axios';
import { Link } from 'react-router-dom';
import ModalAndPin from '../components/Modalandpin';

function Info() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/api/pins')
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowItemList');
      });
  }, []);

  const itemList =
    items.length === 0
      ? 'there is no book record!'
      : items.map((item, k) => <ModalAndPin item={item} key={k} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Game Console</h2>
          </div>

          <div className='col-md-12'>
            <Link
              to='/create-item'
              className='btn btn-outline-warning float-right'
            >
              + Add
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{itemList}</div>
        
      </div>
    </div>
    
  );
}

export default Info;

{/* <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px'}}> 2012 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2015 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2016 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2017 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2017 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2017 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2017 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2017 </span>
                      <span className="badge bg-light text-secondary rounded-3 py-2 px-3" style={{ marginRight: '8px', marginTop: '8px' }}> 2017 </span> */}