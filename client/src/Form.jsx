// AddItemForm.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const Form = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if required fields are filled
    if (!title || !description) {
      alert('Please fill out all required fields.');
      return;
    }

    onAdd({ title, description });
    setTitle('');
    setDescription('');

    // Display a success toast
    toast.success('Item added successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label style={{fontFamily:'Lilita One, sans-serif Noto Sans JP, sans-serif;' , color:"black" , fontSize:"larger"}}>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='input'
        placeholder='Add on title'
        required // Added the 'required' attribute
      />
      <label style={{fontFamily:'Lilita One, sans-serif Noto Sans JP, sans-serif;' , color:"black" , fontSize:"larger"}}>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='input1'
        placeholder='write here...'
        required // Added the 'required' attribute
      ></textarea>
      <button type="submit" className='button-17'>Add Item</button>
      
    </form>
    
  );
};

export default Form;
