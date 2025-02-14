// import React from "react";
// import Header from "../Components/Header"; // Correct path
// import HeroSection from "../Components/HeroSection"; // Correct path
// import FeaturesSection from "../Components/FeaturesSection"; // Correct path
// import Footer from "../Components/Footer"; // Correct path



// const LandingPage = () => {
//   return (
//     <div>
//       <Header />
//       <HeroSection />
//       <FeaturesSection />
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import Header from "../Components/Header"; 
import HeroSection from "../Components/HeroSection"; 
import FeaturesSection from "../Components/FeaturesSection"; 
import Footer from "../Components/Footer"; 
import backgroundImage from '../assets/background.png'; // Import the background image

const LandingPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, // Apply the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          height: '100vh', // Ensure it's covering the full viewport height
          color: '#fff', // Ensure text is visible on dark backgrounds
        }}
      >
        <Header />
        <HeroSection />
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
