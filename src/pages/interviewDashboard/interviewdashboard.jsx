import React, { useState } from 'react';
import { FiSearch, FiCalendar, FiUser, FiPhone, FiVideo, FiChevronDown, FiPlus } from 'react-icons/fi';

const InterviewDashboard = () => {
  const [activeTab, setActiveTab] = useState('schedule');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Status');
  const [typeFilter, setTypeFilter] = useState('All Types');

  // Stats data
  const stats = {
    scheduled: 12,
    completed: 8,
    inProgress: 3,
    cancelled: 2
  };

  // Interviews data
  const interviews = [
    {
      id: 1,
      candidate: 'John Smith',
      position: 'Senior Frontend Developer',
      interviewer: 'Sarah Johnson',
      date: '2024-01-15',
      time: '10:00 AM',
      type: 'Video Call',
      status: 'Scheduled',
      duration: '45 min'
    },
    {
      id: 2,
      candidate: 'Emily Davis',
      position: 'Product Manager',
      interviewer: 'Mike Wilson',
      date: '2024-01-16',
      time: '2:00 PM',
      type: 'In-Person',
      status: 'Completed',
      duration: '60 min'
    },
    {
      id: 3,
      candidate: 'Alex Chen',
      position: 'UX Designer',
      interviewer: 'Lisa Brown',
      date: '2024-01-17',
      time: '11:30 AM',
      type: 'Phone Call',
      status: 'Cancelled',
      duration: '30 min'
    },
    {
      id: 4,
      candidate: 'David Wilson',
      position: 'Backend Developer',
      interviewer: 'Tom Garcia',
      date: '2024-01-18',
      time: '3:30 PM',
      type: 'Video Call',
      status: 'Scheduled',
      duration: '45 min'
    }
  ];

  // Interviewers data
  const interviewers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Senior Engineering Manager',
      scheduled: 12
    },
    {
      id: 2,
      name: 'Mike Wilson',
      title: 'Product Director',
      scheduled: 8
    },
    {
      id: 3,
      name: 'Lisa Brown',
      title: 'Design Lead',
      scheduled: 6
    },
    {
      id: 4,
      name: 'Tom Garcia',
      title: 'Tech Lead',
      scheduled: 10
    }
  ];

  // Calendar data
  const calendarDays = [
    { day: 'Mon', date: 1, hasInterview: true },
    { day: 'Tue', date: 2, hasInterview: true },
    { day: 'Wed', date: 3, hasInterview: true },
    { day: 'Thu', date: 4, hasInterview: true },
    { day: 'Fri', date: 5, hasInterview: true },
    { day: 'Sat', date: 6, hasInterview: true },
    { day: 'Sun', date: 7, hasInterview: true },
    { day: 'Mon', date: 8, hasInterview: true },
    { day: 'Tue', date: 9, hasInterview: true },
    { day: 'Wed', date: 10, hasInterview: true },
    { day: 'Thu', date: 11, hasInterview: true },
    { day: 'Fri', date: 12, hasInterview: true },
    { day: 'Sat', date: 13, hasInterview: true },
    { day: 'Sun', date: 14, hasInterview: true }
  ];

  // Helper functions
  const renderStatusBadge = (status) => {
    const colors = {
      Scheduled: 'bg-blue-100 text-blue-800',
      Completed: 'bg-green-100 text-green-800',
      'In Progress': 'bg-yellow-100 text-yellow-800',
      Cancelled: 'bg-red-100 text-red-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs ${colors[status]}`}>
        {status}
      </span>
    );
  };

  const renderTypeIcon = (type) => {
    const icons = {
      'Video Call': <FiVideo className="text-blue-500" />,
      'Phone Call': <FiPhone className="text-green-500" />,
      'In-Person': <FiUser className="text-purple-500" />
    };
    return icons[type] || <FiCalendar className="text-gray-500" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Interview Management Dashboard</h1>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Scheduled Interviews</p>
          <p className="text-2xl font-bold">{stats.scheduled}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Completed Today</p>
          <p className="text-2xl font-bold">{stats.completed}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">In Progress</p>
          <p className="text-2xl font-bold">{stats.inProgress}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-sm text-gray-500">Cancelled</p>
          <p className="text-2xl font-bold">{stats.cancelled}</p>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'schedule' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('schedule')}
        >
          Interview Schedule
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'management' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('management')}
        >
          Interviewer Management
        </button>
        <button
          className={`py-2 px-4 font-medium ${activeTab === 'calendar' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendar View
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-lg shadow p-6">
        {/* Interview Schedule Tab */}
        {activeTab === 'schedule' && (
          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search interviews..."
                  className="pl-10 pr-4 py-2 border rounded-lg w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <select 
                  className="border rounded px-3 py-2 text-sm"
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>All Status</option>
                  <option>Scheduled</option>
                  <option>Completed</option>
                  <option>In Progress</option>
                  <option>Cancelled</option>
                </select>
                <select 
                  className="border rounded px-3 py-2 text-sm"
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                >
                  <option>All Types</option>
                  <option>Video Call</option>
                  <option>Phone Call</option>
                  <option>In-Person</option>
                </select>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1">
                  <FiPlus size={16} />
                  Schedule Interview
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {interviews.map((interview) => (
                <div key={interview.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="md:col-span-3">
                      <h3 className="font-semibold">{interview.candidate}</h3>
                      <p className="text-sm text-gray-500">{interview.position}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">Interviewer</p>
                      <p>{interview.interviewer}</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm text-gray-500">Date & Time</p>
                      <p>
                        <span className="font-semibold">{interview.date}</span> {interview.time}
                      </p>
                    </div>
                    <div className="md:col-span-2 flex items-center">
                      {renderTypeIcon(interview.type)}
                      <span className="ml-1">{interview.type}</span>
                    </div>
                    <div className="md:col-span-1">
                      {renderStatusBadge(interview.status)}
                    </div>
                    <div className="md:col-span-1">
                      <p className="text-sm text-gray-500">Duration</p>
                      <p>{interview.duration}</p>
                    </div>
                    <div className="md:col-span-1 flex justify-end">
                      <button className="text-gray-400 hover:text-gray-600">
                        ⋮
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interviewer Management Tab */}
        {activeTab === 'management' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Interviewer Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {interviewers.map((interviewer) => (
                <div key={interviewer.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{interviewer.name}</h3>
                      <p className="text-sm text-gray-500">{interviewer.title}</p>
                      <p className="text-sm mt-2">{interviewer.scheduled} interviews scheduled</p>
                    </div>
                    <button className="text-blue-600 text-sm font-medium">View Schedule</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Calendar View Tab */}
        {activeTab === 'calendar' && (
          <div>
            <h2 className="text-xl font-semibold mb-6">Calendar View</h2>
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div 
                  key={index} 
                  className={`border rounded p-2 h-24 ${day.hasInterview ? 'bg-blue-50' : ''}`}
                >
                  <div className="text-sm font-medium">
                    {day.day} {day.date}
                  </div>
                  {day.hasInterview && (
                    <div className="mt-1 text-xs bg-blue-100 text-blue-800 rounded px-1 py-0.5">
                      Interview
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewDashboard;