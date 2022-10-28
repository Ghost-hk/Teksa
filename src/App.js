import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import Navbar from "./Components/Navbar/Navbar";
// import HomePage from "./Components/HomePage/HomePage";
import StorePage from "./Components/StorePage/StorePage";

const App = () => {
  return (
    <>
      <Navbar />
      <StorePage />
      {/* <HomePage /> */}
    </>
  );
};

export default App;
