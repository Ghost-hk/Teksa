import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import StorePage from "./Components/StorePage/StorePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<HomePage />} />
          <Route path='store' element={<StorePage />} />
        </Route>

        {/* <StorePage /> */}
        {/*  */}
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
