import logo from "./logo.svg";
import test, { about, b } from "./components/test";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import Employee from "./components/Employee";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";

function App() {
  const employee = {
    id: 1,
    name: "Haris Khan",
    address: "Lucknow",
    email: "er.hariskhan@gmail.com",
  };
  return (
    <>
      <BrowserRouter>
        <Navbar aboutText="About Us" title="Text Utils" employee="Employee" />
        <Alert />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Please enter the text" />}
            />
            <Route exact path="/about" element={<About />} />
            <Route
              path="/employee"
              element={<Employee employee={employee} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
