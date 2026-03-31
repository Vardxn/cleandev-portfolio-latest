import { motion } from "framer-motion";
import { skillsData } from "../data/skills";
import "./styles/Skills.css";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const skillBarVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  }

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="skills-header"
        >
          <h2>
            My <span>Skills</span>
          </h2>
          <p className="skills-subtitle">
            Expertise across modern web technologies and cloud platforms
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category) => (
            <motion.div key={category.category} className="skill-category">
              <h3 className="category-title">{category.category}</h3>

              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={`${category.category}-${skill.name}`}
                    className="skill-item"
                    variants={skillBarVariants}
                    custom={idx}
                  >
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>

                    <div className="skill-bar-container">
                      <div
                        className="skill-bar"
                        style={{
                          width: `${skill.proficiency}%`,
                          backgroundColor: skill.color || "var(--accentColor)",
                        }}
                      >
                        <motion.div
                          className="skill-bar-glow"
                          animate={{
                            opacity: [0.6, 1, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="skills-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="stat">
            <h4>20+</h4>
            <p>Technologies</p>
          </div>
          <div className="stat">
            <h4>95%</h4>
            <p>Avg. Proficiency</p>
          </div>
          <div className="stat">
            <h4>4</h4>
            <p>Categories</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
