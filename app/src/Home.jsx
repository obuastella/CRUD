import { useEffect, useState } from "react";
import axios from "axios";
export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-dark vh-100">
      <h1 className="text-light">List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        {/* Display data in table */}
        <table className="table table-stipend">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2">Edit</button>
                  <button className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
