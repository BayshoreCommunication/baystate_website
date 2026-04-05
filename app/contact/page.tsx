import ContactHero from "components/contact/ContactHero";
import ContactMap from "components/contact/ContactMap";
import ContactSection from "components/contact/ContactSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactSection />
      <ContactMap />
    </div>
  );
};

export default page;
