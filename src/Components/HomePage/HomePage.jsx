import React from "react";

import HeroSection from "./Sections/HeroSection";
import FindSection from "./Sections/FindSection";
import SearchSection from "./Sections/SearchSection";
// import NewItems from "./Sections/NewItems";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FindSection />
      <SearchSection />
      {/* <NewItems /> */}
    </>
  );
};

export default HomePage;
