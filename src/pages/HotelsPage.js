import React, { useState } from 'react';
import HotelForm from '../components/HotelForm';
import HotelList from '../components/HotelList';

const HotelsPage = () => {
  const [editingHotel, setEditingHotel] = useState(null);

  return (
    <div>
      <h1>Hotels</h1>
      <HotelForm editingHotel={editingHotel} setEditingHotel={setEditingHotel} />
      <HotelList setEditingHotel={setEditingHotel} />
    </div>
  );
};

export default HotelsPage;
