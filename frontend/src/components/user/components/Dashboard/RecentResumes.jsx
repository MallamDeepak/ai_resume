const RecentResumes = ({ resumes, onViewAll }) => {
  return (
    <div className="dashboard-card">
      <h3>📝 Recent Resumes</h3>
      <div className="recent-list">
        {resumes.map(resume => (
          <div key={resume.id} className="recent-item">
            <span className="file-icon">📄</span>
            <div className="file-info">
              <span className="file-name">{resume.name}</span>
              <span className="file-date">{resume.date}</span>
            </div>
            <span className="ats-badge">ATS: {resume.atsScore}%</span>
          </div>
        ))}
      </div>
      <button className="view-all-btn" onClick={onViewAll}>View All →</button>
    </div>
  );
};

export default RecentResumes;
