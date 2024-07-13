import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Login";

const Public = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default Public;
