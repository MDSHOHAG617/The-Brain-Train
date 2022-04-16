import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Home/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Login from "../src/Components/Login/Login";
import Blogs from "../src/Components/Blogs/Blogs";
import About from "../src/Components/About/About";
import Registration from "../src/Components/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/registration"
          element={<Registration></Registration>}
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
