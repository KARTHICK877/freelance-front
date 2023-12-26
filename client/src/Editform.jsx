// EditItemForm.js

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditForm = ({ item, onEdit }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit({ _id: item._id, title, description });

    // Display a success toast
    // toast.success('Item updated successfully!', {
    //   position: toast.POSITION.TOP_CENTER,
    // });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='input'
      />
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='input1'
      ></textarea>
      <button type="submit" className='button-17' >Save Changes</button>
      <ToastContainer />
    </form>
  );
};

export default EditForm;
