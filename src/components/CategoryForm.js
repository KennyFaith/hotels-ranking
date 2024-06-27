import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory, updateCategory, deleteCategory } from '../features/categories/categoriesSlice';

const CategoryForm = () => {
  const dispatch = useDispatch();
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategory) {
      dispatch(updateCategory({ old: editingCategory, new: newCategory }));
      setEditingCategory(null);
    } else {
      dispatch(addCategory(newCategory));
    }
    setNewCategory('');
  };

  const handleDelete = (category) => {
    dispatch(deleteCategory(category));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newCategory} onChange={e => setNewCategory(e.target.value)} placeholder="Category Name" required />
        <button type="submit">{editingCategory ? 'Update Category' : 'Add Category'}</button>
      </form>
      <ul>
        {newCategory.map(cat => (
          <li key={cat}>
            {cat}
            <button onClick={() => setEditingCategory(cat)}>Edit</button>
            <button onClick={() => handleDelete(cat)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryForm;
