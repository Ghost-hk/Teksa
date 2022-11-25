import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import StorePage from "./Components/StorePage/StorePage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import AddPost from "./Components/AddPostPage/AddPost";
import EditPost from "./Components/EditPostPage/EditPost";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<HomePage />} />
          <Route path='store' element={<StorePage />} />
          <Route path='profile' element={<ProfilePage />} />
          <Route path='post'>
            <Route path='addpost' element={<AddPost />} />
            <Route path='edit/:id' element={<EditPost />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
