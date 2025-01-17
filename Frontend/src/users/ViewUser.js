import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './ViewUser.css';

export default function ViewUser() {
  const [touristPlace, setTouristPlace] = useState({});
  const { id } = useParams();

  useEffect(() => {
    loadTouristPlace();
  }, []);

  const loadTouristPlace = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/touristplaces/${id}`);
      setTouristPlace(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='bg1'>
        <div className="container">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="title">FOOD DETAILS</h2>
            <ul className="user-details">
              <li><span className="label">ID:</span> {touristPlace.id}</li>
              <li><span className="label">Food:</span> {touristPlace.touristplace}</li>
              <li><span className="label">Cost:</span> {touristPlace.travelexpense}</li>
              <li><span className="label">GST:</span> {touristPlace.hotelexpenses}</li>
              <li><span className="label">Total:</span> {touristPlace.foodexpenses}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
