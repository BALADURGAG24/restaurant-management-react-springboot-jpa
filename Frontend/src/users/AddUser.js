import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AddUser.css';
import axios from 'axios';

const TouristPlaceForm = () => {
  const [touristPlaces, setTouristPlaces] = useState([]);
  const [newTouristPlace, setNewTouristPlace] = useState({
    touristplace: '',
    travelexpense:'' ,
    hotelexpenses:'' ,
    foodexpenses: '',
    totalexpenses:'' ,
  });

  useEffect(() => {
    fetchTouristPlaces();
  }, []);

  const fetchTouristPlaces = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/touristplaces'); // Replace with your API endpoint
      setTouristPlaces(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTouristPlace = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/touristplaces', newTouristPlace); // Replace with your API endpoint
      setTouristPlaces([...touristPlaces, response.data]);
      setNewTouristPlace({
        touristplace: '',
        travelexpense: 0.0,
        hotelexpenses: 0.0,
        foodexpenses: 0.0,
        totalexpenses: 0.0,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTouristPlace = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/touristplaces/${id}`); // Replace with your API endpoint
      setTouristPlaces(touristPlaces.filter((place) => place.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='bg1'>
    <div className="container1">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Add Item</h2>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTouristPlace();
          }}
        >
          <div className="mb3">
            
              <label htmlFor="touristplace"className="form-label">Food Item:</label>
              <input
                type="text"
                className='form-control'
                placeholder="Enter Food"
                value={newTouristPlace.touristplace}
                onChange={(e) => setNewTouristPlace({ ...newTouristPlace, touristplace: e.target.value })}
              />
            </div>
            <div className="mb3">
              <label htmlFor="travelexpense" className='form-label'>Cost:</label>
              <input
                type="number"
                className='form-control'
                placeholder="Enter Cost"
                value={newTouristPlace.travelexpense}
                onChange={(e) => setNewTouristPlace({ ...newTouristPlace, travelexpense: parseFloat(e.target.value) })}
              />
            </div>
            <div className="mb3">
              <label htmlFor='hotelexpenses' className='form-label'>Gst:</label>
              <input
                type="number"
                className='form-control'
                placeholder="Enter gst"
                value={newTouristPlace.hotelexpenses}
                onChange={(e) => setNewTouristPlace({ ...newTouristPlace, hotelexpenses: parseFloat(e.target.value) })}
              />
            </div>
            <div className="mb3">
              <label htmlFor="foodexpenses" className="form-label">Total:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter total"
                value={newTouristPlace.foodexpenses}
                onChange={(e) => setNewTouristPlace({ ...newTouristPlace, foodexpenses: parseFloat(e.target.value) })}
              />
            </div>
            <br></br>
          <button className='bttt'
  onClick={() => window.location.href = "/Home"}
 
>
  Add Item
</button>

          
        </form>
        </div>
        </div>
      </div>
      </div>
    
    
  );
};

export default TouristPlaceForm;
