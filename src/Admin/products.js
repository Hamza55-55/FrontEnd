import React, { useState, useEffect } from 'react';
import { addProduct, getAllProducts  } from '../services/api';


import '../component/decor.css';

function Adminaddition() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imgFile, setImgFile] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: name,
      price: price,
      imgFile: imgFile,
    };

    try {
      const response = await addProduct(data);
      console.log('response ',response)
      setName('');
      setPrice('');
      setImgFile('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div style={{ backgroundColor: '#008080', height: '100vh', fontFamily: 'cursive' }}>
      <div className="admin-page">
        <h2 className="admin-title" style={{ color: 'white' }}>
          Admin Panel
        </h2>

        <form className="admin-form" onSubmit={handleSubmit} style={{ backgroundColor: 'white', borderRadius: '2rem' }}>
          <h3 className="form-title">Add Product</h3>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price:</label>
            <input
              id="price"
              type="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="imgFile">ImgFile:</label>
            <input
              id="imgFile"
              type="file"
              onChange={(e) => setImgFile(e.target.files[0])}
              required
            />
          </div>

          <button type="submit" className="btn-submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Adminaddition;
