// Item.js
import React, { useState } from 'react';
import EditItemForm from './Editform';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import './App.css';

const Item = ({ item, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = (editedItem) => {
    onEdit(editedItem);
    setIsEditing(false);

    // Display a success toast for edit
    toast.dark('Item updated successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const handleDelete = () => {
    onDelete(item._id);

    // Display a success toast for delete
    toast.error('Item deleted successfully!', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      {isEditing ? (
        <EditItemForm item={item} onEdit={handleSaveEdit} />
      ) : (
        <>
          <strong className='title'>
            <LabelImportantIcon className='titles' /> {item.title}
          </strong>{' '}
          <strong className='title2'>{item.description}</strong>
          <button onClick={handleEdit} className='button-50'>
            Edit
          </button>
          <button onClick={handleDelete} className='button-51'>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Item;
