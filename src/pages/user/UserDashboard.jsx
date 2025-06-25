
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FiUser, FiBarChart2, FiLogOut, FiFileText, FiBriefcase,
  FiCalendar, FiAward, FiMessageSquare, FiSearch, FiMenu
} from 'react-icons/fi';

const CandidateDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testScore, setTestScore] = useState(0);
  const [hasResume, setHasResume] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    try {
      const savedScore = localStorage.getItem('mockTestScore');
      const savedResume = localStorage.getItem('userResume');

      if (savedScore) {
        setTestScore(parseInt(savedScore, 10));
      }
      if (savedResume) {
        setHasResume(true);
      }

      if (location.state?.testCompleted) {
        setNotification({
          type: 'success',
          message: `Mock test completed! Your score: ${savedScore || 0}%`,
        });
        navigate('/candidate-dashboard', { replace: true, state: {} });
        setTimeout(() => setNotification(null), 3000);
      } else if (location.state?.resumeSaved) {
        setNotification({
          type: 'success',
          message: 'Resume saved successfully!',
        });
        navigate('/candidate-dashboard', { replace: true, state: {} });
        setTimeout(() => setNotification(null), 3000);
      }
    } catch (error) {
      console.error('Error in CandidateDashboard useEffect:', error);
      setNotification({
        type: 'error',
        message: 'Failed to load dashboard data. Please try again.',
      });
    }
  }, [location.state, navigate]);

  const user = {
    name: 'Demo User',
    resumesCreated: hasResume ? 1 : 0,
    jobApplications: 0,
    interviewsScheduled: 0,
    testScore,
  };

  const isUnlocked = testScore >= 75;

  const features = [
    {
      title: 'Mock Test',
      desc: 'Test your knowledge with practice questions',
      icon: <FiAward className="text-indigo-500 text-xl" />,
      available: true,
      onClick: () => navigate('/mock-test'),
    },
    {
      title: 'Resume Builder',
      desc: 'Create professional resumes with AI assistance',
      icon: <FiFileText className="text-blue-500 text-xl" />,
      available: !hasResume,
      onClick: () => navigate('/resume-builder'),
    },
    {
      title: 'Cover Letter Generator',
      desc: 'Generate personalized cover letters',
      icon: <FiMessageSquare className="text-purple-500 text-xl" />,
      available: true,
      onClick: () => navigate('/cover-letter'),
    },
    {
      title: 'Jobs',
      desc: 'Browse and apply to job opportunities',
      icon: <FiBriefcase className={isUnlocked ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'} />,
      available: isUnlocked,
      onClick: () => navigate('/jobs'),
    },
    {
      title: 'Interview Prep',
      desc: 'Practice with AI-generated interview questions',
      icon: <FiSearch className={isUnlocked ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'} />,
      available: isUnlocked,
      onClick: () => navigate('/interview-prep'),
    },
    {
      title: 'Interview Scheduling',
      desc: 'Schedule interviews with mentors',
      icon: <FiCalendar className={isUnlocked ? 'text-green-500 text-xl' : 'text-gray-400 text-xl'} />,
      available: isUnlocked,
      onClick: () => navigate('/interview-scheduling'),
    },
  ].filter((feature) => feature.available || feature.title !== 'Resume Builder');

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login');
  };

  const handleStatus = () => {
    console.log('Viewing status...');
  };

  const handleProfile = () => {
    console.log('Navigating to profile...');
    navigate('/profile');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <nav className="bg-white border-b px-4 py-3 flex justify-between items-center relative">
        <div className="flex items-center space-x-3">
          <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
            JP
          </div>
          <h1 className="text-lg font-bold text-gray-800">Candidate Dashboard</h1>
        </div>

        <div className="hidden sm:flex items-center space-x-4 text-sm text-gray-600">
          <button onClick={handleProfile} className="flex items-center gap-1 hover:text-indigo-600">
            <FiUser /><span>{user.name}</span>
          </button>
          <button onClick={handleStatus} className="flex items-center gap-1 hover:text-indigo-600">
            <FiBarChart2 /><span>Status</span>
          </button>
          <button onClick={handleLogout} className="flex items-center gap-1 hover:text-red-600">
            <FiLogOut /><span>Logout</span>
          </button>
        </div>

        <button className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <FiMenu className="text-xl text-gray-700" />
        </button>

        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 bg-white border shadow rounded p-3 space-y-2 w-40 z-50 sm:hidden">
            <button onClick={handleProfile} className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
              <FiUser /> Demo User
            </button>
            <button onClick={handleStatus} className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
              <FiBarChart2 /> Status
            </button>
            <button onClick={handleLogout} className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <FiLogOut /> Logout
            </button>
          </div>
        )}
      </nav>

      <div className="p-6">
        {notification && (
          <div
            className={`mb-6 p-4 rounded-lg border-l-4 ${
              notification.type === 'success'
                ? 'bg-green-100 border-green-500 text-green-700'
                : 'bg-red-100 border-red-500 text-red-700'
            }`}
          >
            <p className="font-semibold">{notification.type === 'success' ? 'Success' : 'Error'}:</p>
            <p>{notification.message}</p>
            <button
              onClick={() => setNotification(null)}
              className="mt-2 text-sm underline hover:text-gray-900"
            >
              Dismiss
            </button>
          </div>
        )}

        <h2 className="text-2xl font-semibold text-gray-800">
          Welcome back, {user.name}! 👋
        </h2>
        <p className="text-sm text-gray-600 mt-1">
          Complete a mock test with 75% score to unlock job applications and interviews.
        </p>

        {!isUnlocked ? (
          <div className="mt-4 bg-yellow-50 border border-yellow-300 p-4 rounded-md flex items-start space-x-2 text-sm text-yellow-800">
            <FiAward className="mt-1" />
            <div>
              <strong className="font-semibold block">Complete Your Profile</strong>
              {testScore > 0
                ? `You scored ${testScore}%. Need ${75 - testScore}% more to unlock job features.`
                : 'Take a mock test and score 75% or higher to unlock job applications and interview features.'}
            </div>
          </div>
        ) : (
          <div className="mt-4 bg-green-50 border border-green-300 p-4 rounded-md flex items-start space-x-2 text-sm text-green-800">
            <FiAward className="mt-1" />
            <div>
              <strong className="font-semibold block">Congratulations!</strong>
              You've scored {testScore}% and unlocked all job features!
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <Stat title="Resumes Created" value={user.resumesCreated} icon={<FiFileText className="text-blue-600" />} />
          <Stat
            title="Job Applications"
            value={user.jobApplications}
            icon={<FiBriefcase className={isUnlocked ? 'text-green-600' : 'text-gray-400'} />}
          />
          <Stat
            title="Interviews Scheduled"
            value={user.interviewsScheduled}
            icon={<FiCalendar className={isUnlocked ? 'text-green-600' : 'text-gray-400'} />}
          />
          <Stat
            title="Best Test Score"
            value={`${user.testScore}%`}
            icon={<FiAward className={isUnlocked ? 'text-green-600' : 'text-yellow-600'} />}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className={`rounded border p-4 shadow-sm ${
                item.available ? 'bg-white hover:shadow-md' : 'bg-gray-100'
              } transition-all`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <h3 className={`font-semibold ${item.available ? 'text-gray-800' : 'text-gray-500'}`}>
                  {item.title}
                </h3>
              </div>
              <p className={`text-sm mt-1 ${item.available ? 'text-gray-600' : 'text-gray-400'}`}>
                {item.desc}
              </p>
              <div className="flex justify-between items-center mt-4">
                {item.available ? (
                  <>
                    <span className="text-green-600 text-xs bg-green-100 px-2 py-0.5 rounded-full">
                      Available
                    </span>
                    <button
                      onClick={item.onClick}
                      className="bg-indigo-500 text-white px-3 py-1 text-sm rounded hover:bg-indigo-600 transition"
                    >
                      Start Now
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-red-500 text-xs">Requires 75% test score</span>
                    <span className="bg-gray-400 text-white text-xs px-3 py-1 rounded">Locked</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Stat = ({ title, value, icon }) => (
  <div className="bg-white rounded p-4 border border-gray-200 shadow-sm flex justify-between items-center">
    <div>
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-lg font-semibold text-gray-900">{value}</p>
    </div>
    <div className="text-2xl">{icon}</div>
  </div>
);

export default CandidateDashboard;