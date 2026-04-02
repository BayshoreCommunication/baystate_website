import AboutIntro from "components/who-we-are/AboutIntro";
import MissionSection from "components/who-we-are/MissionSection";
import TestimonialSection from "components/who-we-are/TestimonialSection";
import WhoWeAre from "components/who-we-are/WhoWeAre";
import React from "react";

const page = () => {
  return (
    <div>
      <WhoWeAre />
      <AboutIntro />
      <MissionSection />
      <TestimonialSection />
    </div>
  );
};

export default page;
