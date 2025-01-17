import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/touristplaces");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/touristplaces/${id}`);
    loadUsers();
  };

  return (
    <div className="bg">
      <div className="containerh">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Food</th>
                <th scope="col">Cost</th>
                <th scope="col">GST</th>
                <th scope="col">Total</th>
               
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((travel) => (
                <tr key={travel.id}>
                  <th scope="row">{travel.id}</th>
                  <td>{travel.touristplace}</td>
                  <td>{travel.travelexpense}</td>
                  <td>{travel.hotelexpenses}</td>
                  <td>{travel.foodexpenses}</td>
               
                  <td>
                    <Link
                      className="btn btn-primary mx-2"
                      style={{
                        backgroundColor:"green",
                        color: "white",
                        cursor: "pointer",
                      }}
                      to={`/viewuser/${travel.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-primary mx-2"
                      style={{
                        backgroundColor:"purple",
                        color: "white",
                        cursor: "pointer",
                      }}
                      to={`/edituser/${travel.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => deleteUser(travel.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
