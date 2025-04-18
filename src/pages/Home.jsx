import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <section className="hero">
        <div className="hero-container">
          <div className="hero-img">
            <img src="/C_Ordonez.png" alt="Cassy waving"/>
          </div>

          <div className="hero-text">
            <h1>Cassandra Ordonez</h1>
            <h2>Junior Full Stack Web Developer</h2>
            <p style={{ fontStyle: "italic", marginBottom: "1rem"}}>
              👋 I'm Cassandra (Cassy) and welcome to my portfolio!
            </p>
            <p className="hero-sub">
              Still learning, still building - but always moving forward with curiosity, creativity and real-world projects. Exploring the world of code one step at a time, with a commitment to growing every day.
            </p>

            <div className="hero-buttons">
              <a
                href="Cassandra_Ordonez_resume.pdf"
                download
                className="download-btn"
                >
                  Download Resume
                </a>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Home;