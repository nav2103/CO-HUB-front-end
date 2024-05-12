import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Register from "./pages/Register/Register";
import HomePage from "./pages/Homepage/HomePage";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Product";
import Dashboard from "./pages/Dashboard/Dashboard";
import SellRent from "./pages/SellRent/SellRent";
import RedgFrom from "./pages/RedgForm/RedgFrom";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/form" element={<RedgFrom />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/dashboard/srform" element={<SellRent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
