import React from 'react';
import './styles/App.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='NotFound'>
      <div align='center'>
        <h1>
          <font face='Times New Roman'>404</font>
        </h1>
        <h2>That page is not found.</h2>
        <br />
        <br />
        <Link to='/'>
          <button className='darkButton'>Back to home</button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
