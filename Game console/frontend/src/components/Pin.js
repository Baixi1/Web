import React, { useState, useEffect } from 'react';
import './style/pin_style.css';

import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Pin(props) {
  const [item, setItem] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/pins/${id}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowItemDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:4000/api/pins/${id}`)
      .then((res) => {
        navigate('/Info');
      })
      .catch((err) => {
        console.log('Error form ShowItemDetails_deleteClick');
      });
  };

  const Item = (
    <div>
          <div className='img-size'>
            <div className='col d-flex justify-content-center'>
              <img src={item.image} class="img-fluid md"/>
            </div>  
          </div>
        <div className='textb'>
          <tr>
            <th scope='row'></th>
            <td>Name : </td><div></div>
            <t className='t'>{item.name}</t>
          </tr><br/>
          {/* <tr><br/>
            <th scope='row'></th>
            <td>Author</td>
            <td>{item.release}</td>
          </tr>
          <tr><br/>
            <th scope='row'></th>
            <td>ISBN</td>
            <td>{item.discontinued}</td>
          </tr> */}
          <tr><br/>
            <th scope='row'></th>
            <td>Publisher and Detail: </td>
            <td className='td'>{item.manufacturer}</td>
          </tr>
          </div>
    </div>
  );

  return (
    <div className='ShowBookDetails'>
      <div className='container'>
        <div className='row'>
          <br />
          <div className='col-md-8 m-auto'>
            <br />
            <h1 className='display-4 text-center'>{item.name}</h1> <br />
            <div className='col-md-10 m-auto'>
            <Link to='/Info' className='btn btn-outline-warning float-left'>
              Show Item List
            </Link>
          </div> <br />
            <p className='lead text-center'>Game Console</p>
            <hr /> <br />
          </div>
        <div class="card text-center">
        <div class="card-body">
          <div className='col-m-10 md-auto' style={{backgroundColor: '#fffbf8'}}>{Item}</div>
          </div>
        </div>
          <div className='col-md-6 m-auto'><br/><br/>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(item._id);
              }}
            >
              Delete
            </button>
          </div>
          <div className='col-md-6 m-auto'><br/><br/>
            <Link
              to={`/edit-item/${item._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit
            </Link>
          </div>
          <div style={{marginBottom: '30px'}}></div>
        </div>
      </div>
    </div>
  );
}

export default Pin;