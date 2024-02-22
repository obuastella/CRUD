import { useEffect } from "react";
import axios from "axios";
export const Home = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-dark vh-100">
      <h1 className="text-light">List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4"></div>
    </div>
  );
};
