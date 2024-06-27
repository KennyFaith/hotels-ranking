import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHotel, updateHotel } from '../features/hotels/hotelsSlice';
import axios from 'axios';

const HotelForm = ({ editingHotel, setEditingHotel }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [category, setCategory] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (editingHotel) {
      setName(editingHotel.name);
      setCountry(editingHotel.country);
      setAddress(editingHotel.address);
      setCategory(editingHotel.category);
    }
  }, [editingHotel]);

  useEffect(() => {
    axios.get('https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json')
      .then(response => setCountries(response.data))
      .catch(error => console.error('Error fetching countries:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingHotel) {
      dispatch(updateHotel({ id: editingHotel.id, name, country, address, category }));
      setEditingHotel(null);
    } else {
      dispatch(addHotel({ id: Date.now(), name, country, address, category }));
    }
    setName('');
    setCountry('');
    setAddress('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Hotel Name" required />
      <select value={country} onChange={e => setCountry(e.target.value)} required>
        <option value="" disabled>Select Country</option>
        {countries.map(c => <option key={c.name} value={c.name}>{c.name}</option>)}
      </select>
      <input type="text" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address" required />
      <select value={category} onChange={e => setCategory(e.target.value)} required>
        <option value="" disabled>Select Category</option>
        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <button type="submit">{editingHotel ? 'Update Hotel' : 'Add Hotel'}</button>
    </form>
  );
};

export default HotelForm;
