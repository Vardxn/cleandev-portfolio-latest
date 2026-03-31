import { motion } from "framer-motion";
import { experienceData } from "../data/experience";
import "./styles/Experience.css";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="experience-header"
        >
          <h2>
            My <span>Journey</span>
          </h2>
          <p className="experience-subtitle">
            Education, work experience, and certifications
          </p>
        </motion.div>

        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experienceData.map((item) => (
            <motion.div
              key={item.id}
              className={`timeline-item ${item.type}`}
              variants={itemVariants}
            >
              <div className="timeline-marker">
                <div className="marker-icon">{item.icon}</div>
                <div className="marker-line"></div>
              </div>

              <motion.div
                className="timeline-content"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="content-header">
                  <div className="title-section">
                    <h3>{item.title}</h3>
                    {item.company && <p className="company">{item.company}</p>}
                    {item.school && <p className="school">{item.school}</p>}
                  </div>
                  <span className="type-badge">{item.type}</span>
                </div>

                <div className="date-duration">
                  <span className="date">{item.date}</span>
                  {item.duration && (
                    <>
                      <span className="separator">•</span>
                      <span className="duration">{item.duration}</span>
                    </>
                  )}
                </div>

                <p className="description">{item.description}</p>

                <ul className="achievements">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="timeline-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="end-marker">
            <div className="end-icon">🚀</div>
          </div>
          <p>Always learning and growing</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
