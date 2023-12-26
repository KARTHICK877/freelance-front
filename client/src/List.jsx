// ItemList.js

import React from 'react';
import Item from './Item';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
const List = ({ items, onDelete, onEdit }) => (
  <div>
    {items.map((item) => (
      <Item key={item._id} item={item} onDelete={onDelete} onEdit={onEdit} />
    ))}
  </div>
);

export default List;
