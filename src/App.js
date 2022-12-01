import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Components/HomePage/HomePage";
import StorePage from "./Components/StorePage/StorePage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import AddPost from "./Components/AddPostPage/AddPost";
import EditPost from "./Components/EditPostPage/EditPost";
import ProfileForm from "./Components/Forms/ProfileForm";
import SnackBar from "./Components/Snackbar/SnackBar";

const App = () => {
  return (
    <>
      <SnackBar />
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/' element={<SnackBar />}> */}
          {/* <Route path='/' element={<SnackBar />} /> */}
          <Route path='store' element={<StorePage />} />
          <Route path='profile'>
            <Route path='info/:id' element={<ProfilePage />} />
            <Route path='edit/:id' element={<ProfileForm />} />
          </Route>
          <Route path='post'>
            <Route path='addpost' element={<AddPost />} />
            <Route path='edit/:id' element={<EditPost />} />
          </Route>
          {/* </Route> */}
        </Route>
      </Routes>
    </>
  );
};

export default App;
