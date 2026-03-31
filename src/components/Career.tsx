import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Software Engineering Intern</h4>
                  <h5>Noventiq – Umbrella Infotech</h5>
              </div>
                <h3>Dec 2024 - Feb 2025</h3>
            </div>
            <p>
                Contributed to enterprise cloud-native applications within the Cloud Native Application Department. Developed backend components following Agile methodologies and SDLC best practices. Built, optimized, and debugged RESTful APIs used in production environments while adhering to secure coding standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Student at NIT Srinagar</h4>
                  <h5>National Institute of Technology, Srinagar</h5>
              </div>
                <h3>2022 - 2026</h3>
            </div>
            <p>
                Pursuing Bachelor of Technology in Information Technology with a CGPA of 8+. Specialized in full-stack development, cloud-native architecture, and AI-integrated solutions. Developed multiple production-ready applications and maintained excellence in academic and technical projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                  <h4>Full Stack Developer & Builder</h4>
                  <h5>Personal Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
                Currently building innovative solutions including HealthEase (AI healthcare platform), Mohishree B2B SaaS marketplace, and Wanderlust travel booking platform. Continuously expanding expertise in latest technologies and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
