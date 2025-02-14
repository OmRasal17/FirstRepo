// import React from "react";
// import styles from "../Pages/LandingPage.module.css";

// const FeaturesSection = () => {
//   return (
//     <section className={styles.featuresSection}>
//       <div className={styles.features}>
//         <div className={styles.featureItem}>
//           <h3>Smart Matching</h3>
//           <p>Find study buddies based on shared interests and goals.</p>
//         </div>
//         <div className={styles.featureItem}>
//           <h3>Group Study</h3>
//           <p>Create and join study groups for collaborative learning.</p>
//         </div>
//         <div className={styles.featureItem}>
//           <h3>Real-Time Chat</h3>
//           <p>Communicate with your study buddies easily.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;
import React from "react";
import backgroundImage from '../assets/background.png'; // Import the background image

const FeaturesSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        padding: '40px 20px',
        color: 'black',
        textAlign: 'center',
      }}
    >
      <h2>Features</h2>
      <div className="features">
        <div className="featureItem">
          <h3>Smart Matching</h3>
          <p>Find study buddies based on shared interests and goals.</p>
        </div>
        <div className="featureItem">
          <h3>Group Study</h3>
          <p>Create and join study groups for collaborative learning.</p>
        </div>
        <div className="featureItem">
          <h3>Real-Time Chat</h3>
          <p>Communicate with your study buddies easily.</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
