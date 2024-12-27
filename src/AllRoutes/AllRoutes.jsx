import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import User from "../pages/User";
import Boss from "../pages/Boss";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="user" element={<User />} />
      <Route path="boss" element={<Boss />} />
    </Routes>
  );
};

export default AllRoutes;
