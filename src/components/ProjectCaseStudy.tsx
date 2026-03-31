import { useState } from "react";
import { CaseStudy } from "../data/projectCaseStudies";
import { MdClose, MdOpenInNew } from "react-icons/md";
import "./styles/ProjectCaseStudy.css";

interface ProjectCaseStudyProps {
  project: CaseStudy;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectCaseStudy = ({
  project,
  isOpen,
  onClose,
}: ProjectCaseStudyProps) => {
  const [activeTab, setActiveTab] = useState<"problem" | "solution" | "results">(
    "problem"
  );

  if (!isOpen) return null;

  return (
    <div className="case-study-overlay" onClick={onClose}>
      <div className="case-study-modal" onClick={(e) => e.stopPropagation()}>
        <button className="case-study-close" onClick={onClose}>
          <MdClose size={24} />
        </button>

        <div className="case-study-header">
          <div className="case-study-meta">
            <span className="case-study-category">{project.category}</span>
            <span className="case-study-duration">Duration: {project.duration}</span>
            <span className="case-study-role">Role: {project.role}</span>
          </div>
          <h2 className="case-study-title">{project.title}</h2>
          <p className="case-study-desc">{project.shortDesc}</p>
        </div>

        <div className="case-study-tabs">
          {(["problem", "solution", "results"] as const).map((tab) => (
            <button
              key={tab}
              className={`case-study-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="case-study-content">
          {activeTab === "problem" && (
            <div className="case-study-section">
              <p>{project.problem}</p>
            </div>
          )}

          {activeTab === "solution" && (
            <div className="case-study-section">
              <p>{project.solution}</p>
            </div>
          )}

          {activeTab === "results" && (
            <div className="case-study-section">
              <ul className="case-study-results">
                {project.results.map((result, idx) => (
                  <li key={idx}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="case-study-tech">
          <h4>Tech Stack</h4>
          <div className="tech-stack">
            {project.techStack.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="case-study-links">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-link live"
            >
              <MdOpenInNew /> Live Project
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-link github"
            >
              <MdOpenInNew /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudy;
