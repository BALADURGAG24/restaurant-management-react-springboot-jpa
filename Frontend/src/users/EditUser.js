import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EditUser.css';
import axios from 'axios';

const TouristPlaceForm = () => {
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [newTouristPlace, setNewTouristPlace] = useState({
    touristplace: '',
    travelexpense: '',
    hotelexpenses: '',
    foodexpenses: '',
    totalexpenses: '',
  });
  const [editUserId, setEditUserId] = useState(null);

  useEffect(() => {
    fetchTouristPlaces();
  }, []);

  const fetchTouristPlaces = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/touristplaces');
      setTouristPlaces(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTouristPlace = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/touristplaces', newTouristPlace);
      setTouristPlaces([...touristPlaces, response.data]);
      setNewTouristPlace({
        touristplace: '',
        travelexpense: '',
        hotelexpenses: '',
        foodexpenses: '',
        totalexpenses: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const editTouristPlace = (user) => {
    setEditUserId(user.id);
    setNewTouristPlace({
      touristplace: user.touristplace,
      travelexpense: user.travelexpense,
      hotelexpenses: user.hotelexpenses,
      foodexpenses: user.foodexpenses,
      totalexpenses: user.totalexpenses,
    });
  };

  const updateTouristPlace = async () => {
    try {
      await axios.put(`http://localhost:8080/api/touristplaces/${editUserId}`, newTouristPlace);
      const updatedUser = { id: editUserId, ...newTouristPlace };
      setTouristPlaces(touristPlaces.map((place) => (place.id === editUserId ? updatedUser : place)));
      setEditUserId(null);
      setNewTouristPlace({
        touristplace: '',
        travelexpense: '',
        hotelexpenses: '',
        foodexpenses: '',
        totalexpenses: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTouristPlace = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/touristplaces/${id}`);
      setTouristPlaces(touristPlaces.filter((place) => place.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (editUserId) {
      updateTouristPlace();
    } else {
      createTouristPlace();
    }
  };

  return (
    <div className='bg1'>
      <div className="containere">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Add Item</h2>

            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label htmlFor="touristplace" className="form-label">Food:</label>
                <input
                  type="text"
                  className='form-control'
                  placeholder="Enter food name"
                  value={newTouristPlace.touristplace}
                  onChange={(e) => setNewTouristPlace({ ...newTouristPlace, touristplace: e.target.value })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="travelexpense" className='form-label'>Cost:</label>
                <input
                  type="number"
                  className='form-control'
                  placeholder=" food expense"
                  value={newTouristPlace.travelexpense}
                  onChange={(e) => setNewTouristPlace({ ...newTouristPlace, travelexpense: parseFloat(e.target.value) })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor='hotelexpenses' className='form-label'>GST:</label>
                <input
                  type="number"
                  className='form-control'
                  placeholder="Enter food gst"
                  value={newTouristPlace.hotelexpenses}
                  onChange={(e) => setNewTouristPlace({ ...newTouristPlace, hotelexpenses: parseFloat(e.target.value) })}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="foodexpenses" className="form-label">Total:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter total amount"
                  value={newTouristPlace.foodexpenses}
                  onChange={(e) => setNewTouristPlace({ ...newTouristPlace, foodexpenses: parseFloat(e.target.value) })}
                />
              </div>
              

              <button type="submit" onClick={() => { submitForm(); window.location.href = '/Home'; }}>
                {editUserId ? 'Update' : 'Add'}
              </button>

            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-3">
          <div className='co'>
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
              {touristPlaces.map((place) => (
                <div key={place.id}>
                  <p>{place.touristplace}</p>

                  <button
                    onClick={() => editTouristPlace(place)}
                    style={{
                      backgroundColor: 'blue',
                      color: 'white',
                      padding: '10px',
                      border: 'none',
                      borderRadius: '5px',
                      marginRight: '5px',
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteTouristPlace(place.id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      padding: '10px',
                      border: 'none',
                      borderRadius: '5px',
                    }}
                  >
                    Delete
                  </button>


                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristPlaceForm;
