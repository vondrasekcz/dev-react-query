import { Routes, Route, } from "react-router-dom";

import Home from "Modules/Home";
import Users from "Modules/Users";
import Login from "Modules/Login";
import Layout from "Components/Layout";
import ProtectedRoute from "Components/ProtectedRoute";


const Core = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route element={(
        <ProtectedRoute
          isAllowed
        >
          <Layout />
        </ProtectedRoute>
      )}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};


export default Core;