// App.js

import React, { useState, useEffect } from 'react';
import AddItemForm from './Form';
import ItemList from './List';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addItem = (newItem) => {
    fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => res.json())
      .then((data) => setItems([...items, data]))
      .catch((error) => console.error('Error adding item:', error));
  };

  const deleteItem = (itemId) => {
    fetch(`http://localhost:5000/api/items/${itemId}`, {
      method: 'DELETE',
    })
      .then(() => setItems(items.filter((item) => item._id !== itemId)))
      .catch((error) => console.error('Error deleting item:', error));
  };

  const editItem = (editedItem) => {
    fetch(`http://localhost:5000/api/items/${editedItem._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedItem),
    })
      .then(() =>
        setItems(items.map((item) => (item._id === editedItem._id ? editedItem : item)))
      )
      .catch((error) => console.error('Error editing item:', error));
  };

  return (
    <div className="App">
        <video src="./video/diss.mp4" autoPlay loop muted></video>
      <h1 style={{fontFamily:'Lilita One, sans-serif Noto Sans JP, sans-serif;' , color:"red" , border:"solid 5px",borderColor:"black",width:"17%"}}>MERN Stack App</h1>

      <AddItemForm onAdd={addItem} />

      <ItemList items={items} onDelete={deleteItem} onEdit={editItem} />
      <ToastContainer />
  
    </div>
  );
}

export default App;
