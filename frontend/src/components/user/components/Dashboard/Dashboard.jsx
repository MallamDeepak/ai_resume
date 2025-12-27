import StatCard from './StatCard';
import RecentResumes from './RecentResumes';
import QuickActions from './QuickActions';
import './Dashboard.css';

const Dashboard = ({ user, resumes, setActivePage }) => {
  return (
    <div className="dashboard-page">
      <div className="page-header">
        <h1>👋 Welcome back, {user?.name || 'User'}!</h1>
        <p>Here's your resume building progress</p>
      </div>
      
      <div className="dashboard-stats">
        <StatCard 
          icon="📄" 
          value={resumes.length} 
          label="Resumes Created" 
          colorClass="blue" 
        />
        <StatCard 
          icon="✅" 
          value="92%" 
          label="Avg ATS Score" 
          colorClass="green" 
        />
        <StatCard 
          icon="📥" 
          value="12" 
          label="Downloads" 
          colorClass="purple" 
        />
        <StatCard 
          icon="📄" 
          value="5" 
          label="Templates Used" 
          colorClass="orange" 
        />
      </div>

      <div className="dashboard-grid">
        <RecentResumes 
          resumes={resumes} 
          onViewAll={() => setActivePage('my-resumes')} 
        />
        <QuickActions 
          onCreateResume={() => setActivePage('resume')}
          onBrowseTemplates={() => setActivePage('templates')}
          onCheckATS={() => setActivePage('ats-checker')}
        />
      </div>
    </div>
  );
};

export default Dashboard;
