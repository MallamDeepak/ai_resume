const QuickActions = ({ onCreateResume, onBrowseTemplates, onCheckATS }) => {
  return (
    <div className="dashboard-card">
      <h3>🚀 Quick Actions</h3>
      <div className="quick-actions">
        <button className="quick-action-btn" onClick={onCreateResume}>
          <span>📝</span> Create New Resume
        </button>
        <button className="quick-action-btn" onClick={onBrowseTemplates}>
          <span>📄</span> Browse Templates
        </button>
        <button className="quick-action-btn" onClick={onCheckATS}>
          <span>✅</span> Check ATS Score
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
