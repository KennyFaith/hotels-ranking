import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHotel } from '../features/hotels/hotelsSlice';

const HotelList = ({ setEditingHotel }) => {
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotels.hotels);
  const categories = useSelector(state => state.categories.categories);

  const handleDelete = (id) => {
    dispatch(deleteHotel(id));
  };

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <ul>
            {hotels.filter(hotel => hotel.category === category).map(hotel => (
              <li key={hotel.id}>
                {hotel.name}, {hotel.country}, {hotel.address}
                <button onClick={() => setEditingHotel(hotel)}>Edit</button>
                <button onClick={() => handleDelete(hotel.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HotelList;
