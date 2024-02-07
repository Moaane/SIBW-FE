import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter } from "react-router-dom";
import DashboardMenu from "./components/admin/DashboardMenu";
import UserMenu from "./components/admin/users/UserMenu";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="login" Component={Login} />
          <Route path="register" Component={Register} />
          <Route path="/">
            <Route index Component={Home} />
            <Route path="dashboard/*" Component={Dashboard}></Route>
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
