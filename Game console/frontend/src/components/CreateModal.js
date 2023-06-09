import React, { useState } from 'react';
import './style/modal_styles.css';

import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Modal = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: '',
    release: '',
    discontinued: '',
    manufacturer: '',
    image: '',
  });

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:4000/api/pins', item)
      .then((res) => {
        setItem({
            name: '',
            release: '',
            discontinued: '',
            manufacturer: '',
            image: '',
        });

        // Push to /
        navigate('/Info');
      })
      .catch((err) => {
        console.log('Error in CreateItem!');
      });
  };

  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center' style={{marginTop: '20px'}}>Add Game Console</h1>
            <div className='col-md-8 m-auto'>
            <br />
            <Link to='/Info' className='btn btn-outline-warning float-left'>
              Show Item List
            </Link>
          </div>
            <p className='lead text-center' style={{marginTop: '20px'}}>Create new Game Console</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
              <label htmlFor='release'>Name</label>
                <input
                  type='text'
                  placeholder='Game Console Name'
                  name='name'
                  className='form-control'
                  value={item.name}
                  onChange={onChange}
                />
              </div>
              <br />

              {/* <div className='form-group'>
                <input
                  type='date'
                  placeholder='Release Date'
                  name='release'
                  className='form-control'
                  value={item.release}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='date'
                  placeholder='Discontinued Date'
                  name='discontinued'
                  className='form-control'
                  value={item.discontinued}
                  onChange={onChange}
                />
              </div> */}
              <div className='form-group' style={{marginBottom: '20px'}}>
              <label htmlFor='release'>Publisher and Detail</label>
                <input
                  type='text'
                  placeholder='Publisher and Detail'
                  name='manufacturer'
                  className='form-control'
                  value={item.manufacturer}
                  onChange={onChange}
                />
              </div>
              <div className='form-group'>
              <label htmlFor='release'>Image URL</label>
                <input
                  type='text'
                  placeholder='Image URL'
                  name='image'
                  className='form-control'
                  value={item.image}
                  onChange={onChange}
                />
              </div>


              <input
                type='Submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;