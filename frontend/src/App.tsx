import { NavBar } from "./components/Navbar";
import {Route,Routes} from "react-router-dom";
import { Listing } from "./pages/Listing/index";
import { Form } from "pages/Form";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing/>} ></Route>
        <Route path="/form">
          <Route path=":idmovie" element={<Form/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
