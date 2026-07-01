import React, { useState } from 'react';
import { 
  FiRefreshCw, 
  FiPlus, 
  FiSearch, 
  FiEye, 
  FiEdit2, 
  FiBarChart2, 
  FiUser,
  FiBookOpen,
  FiHelpCircle,
  FiLayout,
  FiUsers,
  FiShield,
  FiTrendingUp,
  FiDatabase,
  FiUpload,
  FiArrowLeft,
  FiArrowRight,
  FiX,
  FiDribbble,
  FiClock,
  FiCheckCircle,
  FiAlertCircle,
  FiDownload,
  FiSend,
  FiEdit,
  FiUserPlus,
  FiChevronDown,
  FiYoutube,
  FiGlobe,
  FiCalendar,
  FiInfo,
  FiFileText,
  FiSettings,
  FiAlignLeft,
  FiAlertTriangle,
  FiStar,
  FiAlertOctagon,
  FiCheckSquare,
  FiChevronRight
} from 'react-icons/fi';
import { LuShieldCheck, LuSquareTerminal, LuFileText, LuMegaphone, LuBellRing, LuBuilding2, LuBuilding, LuUser, LuGlobe, LuCopy, LuPen, LuUsers, LuAward, LuBook, LuCheck, LuStar, LuMedal } from 'react-icons/lu';
import { MdOutlineEditNote } from 'react-icons/md';
import './Learning.css';

const coursesData = [
  {
    id: 1,
    title: 'React Advanced Patterns',
    description: 'Master hooks, context, performance optimization and advanced rendering patterns in React.',
    tags: [
      { label: 'Advanced', color: 'red' },
      { label: 'Published', color: 'green' },
      { label: 'Technical', color: 'teal' }
    ],
    avatars: [
      { initials: 'RK', color: 'bg-avatar-blue' },
      { initials: 'AK', color: 'bg-avatar-purple' },
      { initials: 'SR', color: 'bg-avatar-red' },
      { initials: 'KR', color: 'bg-avatar-yellow' },
      { initials: '+1', color: 'bg-avatar-gray' }
    ],
    assignedCount: 5,
    progress: 80,
    progressColor: 'progress-green',
    hours: '12h',
    theme: 'theme-blue',
    Icon: LuSquareTerminal
  },
  {
    id: 2,
    title: 'Leadership Essentials',
    description: 'Develop core leadership competencies including communication, delegation and team motivation.',
    tags: [
      { label: 'Intermediate', color: 'yellow' },
      { label: 'Published', color: 'green' },
      { label: 'Leadership', color: 'teal' }
    ],
    avatars: [
      { initials: 'RN', color: 'bg-avatar-blue' },
      { initials: 'SA', color: 'bg-avatar-purple' },
      { initials: 'KR', color: 'bg-avatar-red' }
    ],
    assignedCount: 3,
    progress: 100,
    progressColor: 'progress-green',
    hours: '8h',
    theme: 'theme-purple',
    Icon: FiUsers
  },
  {
    id: 3,
    title: 'Data Privacy & GDPR',
    description: 'Comprehensive guide to data protection regulations, compliance requirements and best practices.',
    tags: [
      { label: 'Beginner', color: 'green' },
      { label: 'Published', color: 'green' },
      { label: 'Compliance', color: 'teal' }
    ],
    avatars: [
      { initials: 'AK', color: 'bg-avatar-blue' },
      { initials: 'SR', color: 'bg-avatar-purple' },
      { initials: 'PN', color: 'bg-avatar-red' },
      { initials: 'KR', color: 'bg-avatar-yellow' }
    ],
    assignedCount: 4,
    progress: 65,
    progressColor: 'progress-blue',
    hours: '4h',
    theme: 'theme-green',
    Icon: LuShieldCheck
  },
  {
    id: 4,
    title: 'Design Systems at Scale',
    description: 'Build consistent, maintainable design systems using tokens, components and documentation.',
    tags: [
      { label: 'Intermediate', color: 'yellow' },
      { label: 'Draft', color: 'gray' },
      { label: 'Design', color: 'teal' }
    ],
    avatars: [
      { initials: 'AK', color: 'bg-avatar-blue' },
      { initials: 'RN', color: 'bg-avatar-purple' }
    ],
    assignedCount: 2,
    progress: 30,
    progressColor: 'progress-blue',
    hours: '10h',
    theme: 'theme-orange',
    Icon: FiDribbble
  },
  {
    id: 5,
    title: 'Agile & Scrum Mastery',
    description: 'Deep dive into agile frameworks, sprint planning, retrospectives and team ceremonies.',
    tags: [
      { label: 'Beginner', color: 'green' },
      { label: 'Published', color: 'green' },
      { label: 'Leadership', color: 'teal' }
    ],
    avatars: [
      { initials: 'KR', color: 'bg-avatar-blue' },
      { initials: 'PN', color: 'bg-avatar-purple' },
      { initials: 'SP', color: 'bg-avatar-red' }
    ],
    assignedCount: 3,
    progress: 45,
    progressColor: 'progress-blue',
    hours: '6h',
    theme: 'theme-teal',
    Icon: FiTrendingUp
  },
  {
    id: 6,
    title: 'SQL & Data Analytics',
    description: 'From basic queries to complex analytics with joins, CTEs, window functions and optimization.',
    tags: [
      { label: 'Intermediate', color: 'yellow' },
      { label: 'Archived', color: 'blue' },
      { label: 'Technical', color: 'teal' }
    ],
    avatars: [
      { initials: 'PN', color: 'bg-avatar-blue' },
      { initials: 'AK', color: 'bg-avatar-purple' },
      { initials: 'SP', color: 'bg-avatar-red' }
    ],
    assignedCount: 3,
    progress: 55,
    progressColor: 'progress-blue',
    hours: '14h',
    theme: 'theme-pink',
    Icon: FiDatabase
  }
];

const quizzesData = [
  { id: 1, title: 'GDPR Compliance Quiz', course: 'Data Privacy & GDPR', questions: 20, score: '80%', scoreColor: 'green', time: '40 min', status: 'Active', statusColor: 'green', created: 'Apr 12, 2026' },
  { id: 2, title: 'Leadership Fundamentals', course: 'Leadership Essentials', questions: 15, score: '75%', scoreColor: 'yellow', time: '25 min', status: 'Active', statusColor: 'green', created: 'Apr 14, 2026' },
  { id: 3, title: 'Scrum Ceremonies Quiz', course: 'Agile & Scrum Mastery', questions: 10, score: '70%', scoreColor: 'yellow', time: '20 min', status: 'Draft', statusColor: 'gray', created: 'Apr 20, 2026' },
  { id: 4, title: 'Leadership Fundamentals', course: 'Leadership Essentials', questions: 15, score: '75%', scoreColor: 'yellow', time: '25 min', status: 'Active', statusColor: 'green', created: 'Apr 14, 2026' },
  { id: 5, title: 'Leadership Fundamentals', course: 'Leadership Essentials', questions: 15, score: '75%', scoreColor: 'yellow', time: '25 min', status: 'Active', statusColor: 'green', created: 'Apr 14, 2026' },
  { id: 6, title: 'Leadership Fundamentals', course: 'Leadership Essentials', questions: 15, score: '75%', scoreColor: 'yellow', time: '25 min', status: 'Active', statusColor: 'green', created: 'Apr 14, 2026' },
];
const analyticsCoursesData = [
  { id: 1, name: 'React Advanced Patterns', themeColor: '#3B82F6', category: 'Technical', categoryColor: 'blue', assigned: 5, completed: 4, completion: 80, avgScore: 89, status: 'Published', statusColor: 'green' },
  { id: 2, name: 'Leadership Essentials', themeColor: '#9333EA', category: 'Leadership', categoryColor: 'blue', assigned: 3, completed: 3, completion: 100, avgScore: 93, status: 'Published', statusColor: 'green' },
  { id: 3, name: 'Data Privacy & GDPR', themeColor: '#10B981', category: 'Compliance', categoryColor: 'blue', assigned: 4, completed: 3, completion: 65, avgScore: 92, status: 'Published', statusColor: 'green' },
  { id: 4, name: 'Design Systems at Scale', themeColor: '#F59E0B', category: 'Design', categoryColor: 'blue', assigned: 2, completed: 1, completion: 30, avgScore: 86, status: 'Draft', statusColor: 'gray' },
  { id: 5, name: 'Agile & Scrum Mastery', themeColor: '#0EA5E9', category: 'Leadership', categoryColor: 'blue', assigned: 3, completed: 1, completion: 45, avgScore: 94, status: 'Published', statusColor: 'green' },
  { id: 6, name: 'SQL & Data Analytics', themeColor: '#E11D48', category: 'Technical', categoryColor: 'blue', assigned: 3, completed: 2, completion: 55, avgScore: 90, status: 'Archived', statusColor: 'blue' }
];

const analyticsEmployeesData = [
  { id: 1, name: 'Riya Nair', role: 'Sr. Engineer', team: 'Engineering', enrolled: 5, completion: 92, avgScore: 88, lastActive: 'Today', initials: 'RN', color: '#0EA5E9' },
  { id: 2, name: 'Arjun Kumar', role: 'Designer', team: 'Design', enrolled: 4, completion: 78, avgScore: 82, lastActive: 'Yesterday', initials: 'AK', color: '#E11D48' },
  { id: 3, name: 'Sneha Patel', role: 'HR Manager', team: 'HR', enrolled: 6, completion: 96, avgScore: 94, lastActive: 'Today', initials: 'SP', color: '#3B82F6' },
  { id: 4, name: 'Kiran Rao', role: 'QA Engineer', team: 'QA', enrolled: 3, completion: 67, avgScore: 75, lastActive: '2 days ago', initials: 'KR', color: '#10B981' },
  { id: 5, name: 'Priya Mehta', role: 'Marketing Lead', team: 'Marketing', enrolled: 4, completion: 55, avgScore: 70, lastActive: '3 days ago', initials: 'PM', color: '#8B5CF6' },
  { id: 6, name: 'Devraj Singh', role: 'Backend Dev', team: 'Engineering', enrolled: 5, completion: 84, avgScore: 90, lastActive: 'Today', initials: 'DS', color: '#3B82F6' },
];

const analyticsQuizzesData = [
  { id: 1, name: 'GDPR Compliance Quiz', course: 'Data Privacy & GDPR', score: '2', result: 100, attempts: '80%', lastAttempt: 'Active', statusColor: 'green' },
  { id: 2, name: 'Leadership Fundamentals', course: 'Leadership Essentials', score: '1', result: 0, attempts: '48%', lastAttempt: 'Active', statusColor: 'green' },
  { id: 3, name: 'Scrum Ceremonies Quiz', course: 'Agile & Scrum Mastery', score: '0', result: 0, attempts: '0%', lastAttempt: 'Draft', statusColor: 'gray' },
];

const employeeAnalyticsCoursesData = [
  { id: 1, name: 'React Advanced Patterns', status: 'Completed', statusColor: 'green', progress: 100, score: '94%', completedOn: 'Apr 22, 2026' },
  { id: 2, name: 'Leadership Essentials', status: 'Completed', statusColor: 'green', progress: 100, score: '88%', completedOn: 'Apr 18, 2026' },
  { id: 3, name: 'Data Privacy & GDPR', status: 'In Progress', statusColor: 'blue', progress: 65, score: '—', completedOn: '—' },
  { id: 4, name: 'Agile & Scrum Mastery', status: 'In Progress', statusColor: 'blue', progress: 40, score: '—', completedOn: '—' },
  { id: 5, name: 'Design Systems at Scale', status: 'Not Started', statusColor: 'gray', progress: 0, score: '—', completedOn: '—' }
];

const courseAnalyticsEmployeesData = [
  { id: 1, name: 'Riya Nair', role: 'Sr. Engineer', status: 'Completed', statusColor: 'green', progress: 100, score: '94%', lastActive: 'Today', initials: 'RN', color: '#0EA5E9' },
  { id: 2, name: 'Arjun Kumar', role: 'Designer', status: 'Completed', statusColor: 'green', progress: 100, score: '82%', lastActive: 'Yesterday', initials: 'AK', color: '#E11D48' },
  { id: 3, name: 'Sneha Patel', role: 'HR Manager', status: 'Completed', statusColor: 'green', progress: 100, score: '96%', lastActive: 'Today', initials: 'SP', color: '#3B82F6' },
  { id: 4, name: 'Kiran Rao', role: 'QA Engineer', status: 'In Progress', statusColor: 'blue', progress: 45, score: '—', lastActive: '2 days ago', initials: 'KR', color: '#10B981' },
  { id: 5, name: 'Devraj Singh', role: 'Backend Dev', status: 'Completed', statusColor: 'green', progress: 100, score: '91%', lastActive: 'Today', initials: 'DS', color: '#3B82F6' }
];

const quizAnalyticsEmployeesData = [
  { id: 1, name: 'Riya Nair', score: '94%', result: 'Pass', resultColor: 'green', attempts: 1, lastAttempt: 'Today', initials: 'RN', color: '#0EA5E9' },
  { id: 2, name: 'Arjun Kumar', score: '67%', result: 'Fail', resultColor: 'red', attempts: 2, lastAttempt: 'Yesterday', initials: 'AK', color: '#E11D48' },
  { id: 3, name: 'Devraj Singh', score: '99%', result: 'Pass', resultColor: 'green', attempts: 1, lastAttempt: 'Apr 18', initials: 'DS', color: '#3B82F6' },
  { id: 4, name: 'Sneha Patel', score: '95%', result: 'Pass', resultColor: 'green', attempts: 1, lastAttempt: 'Apr 22', initials: 'SP', color: '#3B82F6' },
  { id: 5, name: 'Kiran Rao', score: '56%', result: 'Fail', resultColor: 'red', attempts: 1, lastAttempt: 'Apr 25', initials: 'KR', color: '#10B981' },
];

const courseModulesData = [
  { id: 1, title: 'Introduction & Overview', subtitle: '45m • Completed' },
  { id: 2, title: 'Core Concepts & Fundamentals', subtitle: '2h 15m • Completed' },
  { id: 3, title: 'Advanced Techniques & Patterns', subtitle: '3h 30m • Completed' },
  { id: 4, title: 'Real-world Applications', subtitle: '2h 45m • Completed' },
  { id: 5, title: 'Final Assessment & Review', subtitle: '1h 30m • Completed' }
];

const Learning = () => {
  console.log('Force HMR Reload');
  const [activeTab, setActiveTab] = useState('Courses');
  const [analyticsTab, setAnalyticsTab] = useState('Employees');
  const [selectedEmployeeForAnalytics, setSelectedEmployeeForAnalytics] = useState(null);
  const [selectedCourseForAnalytics, setSelectedCourseForAnalytics] = useState(null);
  const [selectedQuizForAnalytics, setSelectedQuizForAnalytics] = useState(null);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
  const [isCreatingQuiz, setIsCreatingQuiz] = useState(false);
  const [editingQuizId, setEditingQuizId] = useState(null);
  const [wizardStep, setWizardStep] = useState(1);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editModalTab, setEditModalTab] = useState('Add Module'); // 'Add Module' or 'Create Quiz'
  const [editContentType, setEditContentType] = useState('PDF'); // 'PDF', 'Video', or 'Link'

  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [allowRetakes, setAllowRetakes] = useState(false);
  const [allowMultipleAttempts, setAllowMultipleAttempts] = useState(false);

  const [editShuffle, setEditShuffle] = useState(true);
  const [editRetakes, setEditRetakes] = useState(false);
  const [editShowAnswers, setEditShowAnswers] = useState(true);
  const [mockQuizAnswers, setMockQuizAnswers] = useState({});

  const [isReminderModalOpen, setIsReminderModalOpen] = useState(false);

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [assignSelection, setAssignSelection] = useState(null);
  const [notifyEmployees, setNotifyEmployees] = useState(true);

  const [courseCategory, setCourseCategory] = useState('Technical');
  const [employees, setEmployees] = useState([
    { id: 'u1', initials: 'RN', name: 'Riya Nair', bg: '#0EA5E9', selected: true },
    { id: 'u2', initials: 'AK', name: 'Arjun Kumar', bg: '#EC4899', selected: true },
    { id: 'u3', initials: 'SP', name: 'Sneha Patel', bg: '#3B82F6', selected: true },
    { id: 'u4', initials: 'KR', name: 'Kiran Rao', bg: '#10B981', selected: true },
    { id: 'u5', initials: 'PM', name: 'Priya Mehta', bg: '#8B5CF6', selected: false },
    { id: 'u6', initials: 'DS', name: 'Devraj Singh', bg: '#3B82F6', selected: false },
    { id: 'u7', initials: 'MH', name: 'Meena HR', bg: '#3B82F6', selected: false },
    { id: 'u8', initials: 'AY', name: 'Amit Yadav', bg: '#3B82F6', selected: false },
  ]);
  const [completionRules, setCompletionRules] = useState({
    requireQuiz: true,
    minScore: '70',
    certificate: true,
    reminders: true,
    allowRetakes: false,
    reminderDays: '3'
  });

  const toggleEmployeeSelection = (id) => {
    setEmployees(employees.map(emp => emp.id === id ? { ...emp, selected: !emp.selected } : emp));
  };

  const toggleRule = (ruleKey) => {
    setCompletionRules({ ...completionRules, [ruleKey]: !completionRules[ruleKey] });
  };

  return (
    <div className="learning-page">
      {!isCreatingCourse && !selectedCourseId && !isCreatingQuiz && !editingQuizId ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div className="lm-tabs" style={{ marginBottom: 0 }}>
              <button 
                className={`lm-tab ${activeTab === 'Courses' ? 'active' : ''}`}
                onClick={() => { setActiveTab('Courses'); setSelectedEmployeeForAnalytics(null); }}
              >
                <FiBookOpen className="lm-tab-icon" /> Courses
              </button>
              <button 
                className={`lm-tab ${activeTab === 'Quizzes' ? 'active' : ''}`}
                onClick={() => { setActiveTab('Quizzes'); setSelectedEmployeeForAnalytics(null); }}
              >
                <FiHelpCircle className="lm-tab-icon" /> Quizzes
              </button>
              <button 
                className={`lm-tab ${activeTab === 'Analytics' ? 'active' : ''}`}
                onClick={() => { setActiveTab('Analytics'); setSelectedEmployeeForAnalytics(null); }}
              >
                <FiBarChart2 className="lm-tab-icon" /> Analytics
              </button>
            </div>
            {activeTab === 'Analytics' && selectedEmployeeForAnalytics && (
              <button onClick={() => { setSelectedEmployeeForAnalytics(null); setSelectedCourseForAnalytics(null); }} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: '#1E293B', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiArrowLeft size={16} /> Back to Analytics
              </button>
            )}
          </div>

          {activeTab === 'Courses' && (
            <>
              <div className="lm-header">
                <div className="lm-breadcrumb">Dashboard &gt; <span className="lm-breadcrumb-active">Learning</span></div>
                <div className="lm-header-top">
                  <div>
                    <h1 className="lm-page-title">Learning Management</h1>
                    <p className="lm-page-subtitle">Courses, Quizzes and certifications</p>
                  </div>
                  <div className="lm-actions">
                    <button className="btn-create-course" onClick={() => setIsCreatingCourse(true)}><FiPlus size={14} /> Create Course</button>
                    <button onClick={() => console.log("Button clicked!")} className="btn-lm-refresh"><FiRefreshCw size={14} /> Refresh</button>
                  </div>
                </div>
              </div>

              <div className="lm-kpi-grid">
                <div className="lm-kpi-card kpi-yellow">
                  <span className="lm-kpi-label">TOTAL COURSES</span>
                  <span className="lm-kpi-value text-yellow">24</span>
                  <span className="lm-kpi-subtext text-yellow">Published 20</span>
                </div>
                <div className="lm-kpi-card kpi-green">
                  <span className="lm-kpi-label">ENROLLMENTS</span>
                  <span className="lm-kpi-value text-green">342</span>
                  <span className="lm-kpi-subtext text-green">Active this month</span>
                </div>
                <div className="lm-kpi-card kpi-pink">
                  <span className="lm-kpi-label">QUIZZES</span>
                  <span className="lm-kpi-value text-pink">3</span>
                  <span className="lm-kpi-subtext text-pink">9 Total Questions</span>
                </div>
                <div className="lm-kpi-card kpi-blue">
                  <span className="lm-kpi-label">CERTIFICATES ISSUED</span>
                  <span className="lm-kpi-value text-blue">5</span>
                  <span className="lm-kpi-subtext text-blue">All active</span>
                </div>
              </div>

              <div className="lm-filters">
                <div className="lm-search-wrapper">
                  <FiSearch className="lm-search-icon" />
                  <input type="text" className="lm-search-input" placeholder="Search courses..." />
                </div>
                <div className="lm-select-group">
                  <select className="lm-select">
                    <option>All categories</option>
                  </select>
                  <select className="lm-select">
                    <option>All status</option>
                  </select>
                </div>
              </div>

              <div className="lm-course-grid">
                {coursesData.map((course) => (
                  <div key={course.id} className={`lm-course-card ${course.theme}`}>
                    <div className="lm-card-top-border"></div>
                
                <div className="lm-card-header">
                  <div className="lm-course-icon-box">
                    <course.Icon size={18} />
                  </div>
                </div>
                
                <h3 className="lm-course-title">{course.title}</h3>
                <p className="lm-course-desc">{course.description}</p>
                
                <div className="lm-course-tags">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className={`lm-tag tag-${tag.color}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                
                <div className="lm-course-meta">
                  <div className="lm-avatar-stack">
                    {course.avatars.map((avatar, idx) => (
                      <div key={idx} className={`lm-avatar ${avatar.color}`} style={{ zIndex: 10 - idx }}>
                        {avatar.initials}
                      </div>
                    ))}
                  </div>
                  <span className="lm-assigned-count">{course.assignedCount} assigned</span>
                </div>
                
                <div className="lm-progress-section">
                  <div className="lm-progress-track">
                    <div 
                      className={`lm-progress-fill ${course.progressColor}`} 
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <span className="lm-progress-text">{course.progress}%</span>
                </div>
                
                <div className="lm-card-footer">
                  <div className="lm-card-actions">
                    <button className="lm-action-btn" onClick={() => setSelectedCourseId(course.id)}><FiEye size={12} /></button>
                    <button onClick={() => console.log("Button clicked!")} className="lm-action-btn"><FiEdit2 size={12} /></button>
                    <button onClick={() => console.log("Button clicked!")} className="lm-action-btn"><FiBarChart2 size={12} /></button>
                    <button onClick={() => console.log("Button clicked!")} className="lm-action-btn"><FiUser size={12} /></button>
                  </div>
                  <span className="lm-hours">{course.hours}</span>
                </div>
              </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'Quizzes' && (
            <div className="lm-quizzes-view">
              <div className="lm-header-top" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 6, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                    <LuFileText size={16} />
                  </div>
                  <div>
                    <h1 className="lm-page-title" style={{ fontSize: '18px', marginBottom: '2px' }}>Quizzes</h1>
                    <p className="lm-page-subtitle">All quizzes created for your courses</p>
                  </div>
                </div>
                <div className="lm-actions">
                  <button className="btn-create-course" style={{ padding: '8px 16px', fontSize: '12px' }} onClick={() => setIsCreatingQuiz(true)}><FiPlus size={14} /> Create Quiz</button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
                <div className="lm-quiz-stat-card">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', flexShrink: 0 }}>
                    <FiClock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', lineHeight: '1' }}>3</div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px', fontWeight: '500' }}>Total Quizzes</div>
                  </div>
                </div>
                <div className="lm-quiz-stat-card">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', flexShrink: 0 }}>
                    <FiCheckCircle size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#059669', lineHeight: '1' }}>2</div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px', fontWeight: '500' }}>Active</div>
                  </div>
                </div>
                <div className="lm-quiz-stat-card">
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FEF3C7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D97706', flexShrink: 0 }}>
                    <FiClock size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '20px', fontWeight: '700', color: '#D97706', lineHeight: '1' }}>75%</div>
                    <div style={{ fontSize: '11px', color: '#64748B', marginTop: '6px', fontWeight: '500' }}>Avg Pass Score</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ position: 'relative', width: '300px' }}>
                    <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8' }} />
                    <input type="text" placeholder="Search quizzes..." style={{ width: '100%', padding: '8px 12px 8px 36px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '13px', outline: 'none' }} />
                  </div>
                  <select style={{ padding: '8px 32px 8px 12px', border: '1px solid #E2E8F0', borderRadius: '6px', fontSize: '13px', appearance: 'none', background: 'white url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'16\' height=\'16\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2394A3B8\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E") no-repeat right 8px center', outline: 'none' }}>
                    <option>All Status</option>
                  </select>
                </div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>Showing 3 quizzes</div>
              </div>

              <div className="lm-table-container" style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                <table className="lm-quizzes-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quiz Title</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Associated Course</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Questions</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Pass Score</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Time Limit</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Created</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'right' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quizzesData.map((quiz, idx) => (
                      <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '600', color: '#1E293B' }}>{quiz.title}</td>
                        <td style={{ padding: '16px 24px', fontSize: '13px', color: '#64748B' }}>{quiz.course}</td>
                        <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '600', color: '#1E293B' }}>{quiz.questions}</td>
                        <td style={{ padding: '16px 24px' }}>
                          <span className={`lm-tag tag-${quiz.scoreColor}`} style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>{quiz.score}</span>
                        </td>
                        <td style={{ padding: '16px 24px', fontSize: '13px', color: '#64748B' }}>{quiz.time}</td>
                        <td style={{ padding: '16px 24px' }}>
                          <span className={`lm-tag tag-${quiz.statusColor}`} style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>{quiz.status}</span>
                        </td>
                        <td style={{ padding: '16px 24px', fontSize: '13px', color: '#94A3B8' }}>{quiz.created}</td>
                        <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                            <button onClick={() => setEditingQuizId(quiz.id)} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', color: '#64748B', fontWeight: '500', cursor: 'pointer' }}>Edit</button>
                            <button onClick={() => console.log("Button clicked!")} style={{ background: '#FEF2F2', border: '1px solid #FEE2E2', padding: '4px 12px', borderRadius: '6px', fontSize: '12px', color: '#EF4444', fontWeight: '500', cursor: 'pointer' }}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Analytics' && (
            <div className="lm-analytics-view">
              {selectedEmployeeForAnalytics ? (
                selectedCourseForAnalytics ? (

                  <div>
                    
                    <div style={{ marginBottom: '24px', background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B', marginBottom: '24px' }}>
                        <span style={{ color: '#2563EB', cursor: 'pointer' }} onClick={() => { setSelectedEmployeeForAnalytics(null); setSelectedCourseForAnalytics(null); }}>Analytics</span>
                        <FiChevronRight size={14} />
                        <span style={{ color: '#2563EB', cursor: 'pointer' }} onClick={() => setSelectedCourseForAnalytics(null)}>{selectedEmployeeForAnalytics.name}</span>
                        <FiChevronRight size={14} />
                        <span style={{ color: '#94A3B8' }}>{selectedCourseForAnalytics.name}</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                          <div style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', marginBottom: '4px' }}>{selectedCourseForAnalytics.name}</div>
                          <div style={{ fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span>Technical</span>
                            <span style={{ color: '#CBD5E1' }}>|</span>
                            <span>12h total</span>
                          </div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <span style={{ background: '#D1FAE5', color: '#065F46', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: '600', display: 'inline-block', marginBottom: '4px' }}>Completed</span>
                          <div style={{ fontSize: '11px', color: '#94A3B8' }}>Completed on Apr 22, 2026</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px', marginBottom: '24px' }}>
                      
                      <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E293B', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #F1F5F9' }}>Course Modules & Progress</div>
                        
                        <div style={{ position: 'relative', paddingLeft: '8px' }}>
                          {courseModulesData.map((mod, index) => (
                            <div key={mod.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: index !== courseModulesData.length - 1 ? '32px' : '0', position: 'relative' }}>
                              
                              {index !== courseModulesData.length - 1 && (
                                <div style={{ position: 'absolute', left: '7px', top: '24px', bottom: '-40px', width: '2px', background: '#D1FAE5', zIndex: 0 }}></div>
                              )}

                              <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#10B981', flexShrink: 0, marginTop: '2px', position: 'relative', zIndex: 1 }}></div>
                              
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B', marginBottom: '2px' }}>{mod.title}</div>
                                <div style={{ fontSize: '12px', color: '#94A3B8' }}>{mod.subtitle}</div>
                              </div>
                              
                              <div>
                                <LuCheck size={18} color="#10B981" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        
                        <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', marginBottom: '24px' }}>
                          <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E293B', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #F1F5F9' }}>Overall Performance</div>
                          
                          <div style={{ textAlign: 'center', paddingBottom: '24px', borderBottom: '1px solid #F1F5F9', marginBottom: '24px' }}>
                            <div style={{ fontSize: '36px', fontWeight: '800', color: '#10B981', marginBottom: '4px' }}>94%</div>
                            <div style={{ fontSize: '11px', color: '#94A3B8' }}>Average Assessment Score</div>
                          </div>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div style={{ fontSize: '12px', color: '#64748B' }}>Time Spent</div>
                              <div style={{ fontSize: '12px', fontWeight: '700', color: '#1E293B' }}>10h 45m</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div style={{ fontSize: '12px', color: '#64748B' }}>Modules Finished</div>
                              <div style={{ fontSize: '12px', fontWeight: '700', color: '#1E293B' }}>5 / 5</div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <div style={{ fontSize: '12px', color: '#64748B' }}>Quiz Attempts</div>
                              <div style={{ fontSize: '12px', fontWeight: '700', color: '#1E293B' }}>1 Attempt</div>
                            </div>
                          </div>
                        </div>

                        <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '24px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                          <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E293B', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid #F1F5F9' }}>Quiz Results</div>
                          
                          <div style={{ background: '#ECFDF5', border: '1px solid #D1FAE5', borderRadius: '8px', padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <div style={{ fontSize: '13px', fontWeight: '700', color: '#065F46' }}>Final Assessment</div>
                              <div style={{ background: '#A7F3D0', color: '#065F46', padding: '2px 8px', borderRadius: '12px', fontSize: '11px', fontWeight: '700' }}>94%</div>
                            </div>
                            <div style={{ fontSize: '11px', color: '#047857' }}>Passed on Apr 22, 2026</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (

                  <div>
                    
                    <div style={{ marginBottom: '24px', background: '#FFFFFF', padding: '24px', borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B', marginBottom: '24px' }}>
                        <span style={{ color: '#2563EB', cursor: 'pointer' }} onClick={() => setSelectedEmployeeForAnalytics(null)}>Analytics</span>
                        <FiChevronRight size={14} />
                        <span style={{ color: '#94A3B8' }}>{selectedEmployeeForAnalytics.name}</span>
                      </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: selectedEmployeeForAnalytics.color, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: '700' }}>
                          {selectedEmployeeForAnalytics.initials}
                        </div>
                        <div>
                          <div style={{ fontSize: '18px', fontWeight: '700', color: '#1E293B', marginBottom: '4px' }}>{selectedEmployeeForAnalytics.name}</div>
                          <div style={{ fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span>{selectedEmployeeForAnalytics.role}</span>
                            <span style={{ color: '#CBD5E1' }}>|</span>
                            <span>{selectedEmployeeForAnalytics.team} Team</span>
                            <span style={{ color: '#CBD5E1' }}>|</span>
                            <span>Email: {selectedEmployeeForAnalytics.name.split(' ')[0].toLowerCase()}.{selectedEmployeeForAnalytics.name.split(' ')[1].toLowerCase()}@company.com</span>
                            <span style={{ color: '#CBD5E1' }}>|</span>
                            <span>Employee ID: EMP00{selectedEmployeeForAnalytics.id}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div style={{ position: 'relative' }}>
                        <div style={{ fontSize: '11px', color: '#94A3B8', textAlign: 'right', marginBottom: '4px' }}>Select Employee</div>
                        <div style={{ position: 'relative' }}>
                          <select className="lm-input" style={{ appearance: 'none', cursor: 'pointer', color: '#1E293B', paddingRight: '32px', minWidth: '160px', padding: '8px 12px', border: '1px solid #E2E8F0', borderRadius: '8px' }}>
                            <option>{selectedEmployeeForAnalytics.name}</option>
                          </select>
                          <FiChevronDown style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B', pointerEvents: 'none' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '24px' }}>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                        <LuBook size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B' }}>5</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Enrolled Courses</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                        <LuCheck size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#10B981' }}>2</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Completed (40%)</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6' }}>
                        <FiClock size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#3B82F6' }}>2</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>In Progress (40%)</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B' }}>
                        <FiAlertCircle size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#F59E0B' }}>1</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Not Started (20%)</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333EA' }}>
                        <LuStar size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#9333EA' }}>91%</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Average Score</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #F1F5F9' }}>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>5 Enrolled Courses</div>
                      <button onClick={() => console.log("Button clicked!")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#1E293B', fontWeight: '600', cursor: 'pointer' }}>
                        <FiDownload size={14} /> Export Report
                      </button>
                    </div>
                    
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', width: '40px' }}>#</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Course Name</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Status</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Progress</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Score</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Completed On</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {employeeAnalyticsCoursesData.map((course) => {
                          let progressColor = '#E2E8F0';
                          if (course.statusColor === 'green') progressColor = '#10B981';
                          if (course.statusColor === 'blue') progressColor = '#3B82F6';

                          let statusBg = '#F1F5F9', statusText = '#64748B';
                          if (course.statusColor === 'green') { statusBg = '#D1FAE5'; statusText = '#065F46'; }
                          if (course.statusColor === 'blue') { statusBg = '#DBEAFE'; statusText = '#1E40AF'; }

                          let scoreColor = '#64748B';
                          if (course.score !== '—') {
                            const num = parseInt(course.score);
                            if (num >= 80) scoreColor = '#10B981';
                            else scoreColor = '#F59E0B';
                          }

                          return (
                            <tr key={course.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                              <td style={{ padding: '16px 24px', fontSize: '12px', color: '#94A3B8' }}>{course.id}</td>
                              <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '600', color: '#1E293B' }}>{course.name}</td>
                              <td style={{ padding: '16px 24px' }}>
                                <span style={{ background: statusBg, color: statusText, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>{course.status}</span>
                              </td>
                              <td style={{ padding: '16px 24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <div style={{ width: '100px', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ width: `${course.progress}%`, height: '100%', background: progressColor, borderRadius: '3px' }}></div>
                                  </div>
                                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569', minWidth: '32px' }}>{course.progress}%</span>
                                </div>
                              </td>
                              <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: scoreColor }}>{course.score}</td>
                              <td style={{ padding: '16px 24px', fontSize: '12px', color: '#64748B' }}>{course.completedOn}</td>
                              <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                                <button onClick={() => setSelectedCourseForAnalytics(course)} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', width: '28px', height: '28px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', cursor: 'pointer' }}>
                                  <FiEye size={14} />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                )
              ) : selectedCourseForAnalytics ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B' }}>
                      <span style={{ color: '#2563EB', cursor: 'pointer' }} onClick={() => setSelectedCourseForAnalytics(null)}>Analytics</span>
                      <FiChevronRight size={14} />
                      <span style={{ color: '#94A3B8' }}>{selectedCourseForAnalytics.name}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: selectedCourseForAnalytics.themeColor, color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <LuBook size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', marginBottom: '4px' }}>{selectedCourseForAnalytics.name}</div>
                        <div style={{ fontSize: '12px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>{selectedCourseForAnalytics.category}</span>
                          <span style={{ color: '#CBD5E1' }}>|</span>
                          <span>{selectedCourseForAnalytics.status}</span>
                        </div>
                      </div>
                    </div>
                    <button onClick={() => console.log("Button clicked!")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: '#1E293B', fontWeight: '600', cursor: 'pointer' }}>
                      <FiDownload size={16} /> Export Course Data
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                        <LuBook size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#1E293B' }}>{selectedCourseForAnalytics.assigned}</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Total Enrolled</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                        <LuCheck size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981' }}>{selectedCourseForAnalytics.completed}</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Completed</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B' }}>
                        <FiClock size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#F59E0B' }}>1</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>In Progress</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333EA' }}>
                        <LuStar size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#9333EA' }}>{selectedCourseForAnalytics.avgScore}%</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Avg Quiz Score</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#FFFFFF', borderBottom: '1px solid #F1F5F9' }}>
                      <div style={{ fontSize: '13px', color: '#64748B' }}>5 Enrolled Employees</div>
                      <div style={{ position: 'relative', width: '240px' }}>
                        <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', fontSize: '14px' }} />
                        <input type="text" placeholder="Search employees..." style={{ width: '100%', padding: '8px 12px 8px 36px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px', color: '#1E293B', outline: 'none' }} />
                      </div>
                    </div>
                    
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead style={{ background: '#F8FAFC' }}>
                        <tr>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Employee</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Status</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Progress</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Quiz Score</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Last Active</th>
                          <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courseAnalyticsEmployeesData.map((emp) => {
                          let progressColor = '#E2E8F0';
                          if (emp.statusColor === 'green') progressColor = '#10B981';
                          if (emp.statusColor === 'blue') progressColor = '#2563EB';

                          let statusBg = '#F1F5F9', statusText = '#64748B';
                          if (emp.statusColor === 'green') { statusBg = '#D1FAE5'; statusText = '#065F46'; }
                          if (emp.statusColor === 'blue') { statusBg = '#DBEAFE'; statusText = '#1E40AF'; }

                          let scoreColor = '#10B981';
                          if (emp.score !== '—') {
                            const num = parseInt(emp.score);
                            if (num < 80) scoreColor = '#F59E0B';
                            if (num < 60) scoreColor = '#EF4444';
                          } else {
                            scoreColor = '#64748B';
                          }

                          return (
                            <tr key={emp.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                              <td style={{ padding: '16px 24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <div className="lm-avatar" style={{ background: emp.color, width: '32px', height: '32px', fontSize: '11px', marginRight: 0, border: 'none' }}>{emp.initials}</div>
                                  <div>
                                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B', marginBottom: '2px' }}>{emp.name}</div>
                                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>{emp.role}</div>
                                  </div>
                                </div>
                              </td>
                              <td style={{ padding: '16px 24px' }}>
                                <span style={{ background: statusBg, color: statusText, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>{emp.status}</span>
                              </td>
                              <td style={{ padding: '16px 24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                  <div style={{ width: '100px', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                    <div style={{ width: `${emp.progress}%`, height: '100%', background: progressColor, borderRadius: '3px' }}></div>
                                  </div>
                                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569', minWidth: '32px' }}>{emp.progress}%</span>
                                </div>
                              </td>
                              <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: scoreColor }}>{emp.score}</td>
                              <td style={{ padding: '16px 24px', fontSize: '12px', color: '#94A3B8' }}>{emp.lastActive}</td>
                              <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                                <button onClick={() => console.log("Button clicked!")} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', width: '28px', height: '28px', borderRadius: '6px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#64748B', cursor: 'pointer' }}>
                                  <FiEye size={14} />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : selectedQuizForAnalytics ? (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748B' }}>
                      <span style={{ color: '#2563EB', cursor: 'pointer' }} onClick={() => setSelectedQuizForAnalytics(null)}>Analytics</span>
                      <FiChevronRight size={14} />
                      <span style={{ color: '#94A3B8' }}>{selectedQuizForAnalytics.name}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '20px', fontWeight: '700', color: '#1E293B', marginBottom: '4px' }}>{selectedQuizForAnalytics.name}</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>{selectedQuizForAnalytics.course}</div>
                      </div>
                    </div>
                    <button onClick={() => console.log("Button clicked!")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: '#1E293B', fontWeight: '600', cursor: 'pointer' }}>
                      <FiDownload size={16} /> Export Quiz Data
                    </button>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                        <LuBook size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#1E293B' }}>5</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Total Attempts</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                        <LuCheck size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981' }}>60%</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Pass Rate</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B' }}>
                        <LuStar size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#F59E0B' }}>82%</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Avg Score</div>
                      </div>
                    </div>
                    <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333EA' }}>
                        <FiClock size={24} />
                      </div>
                      <div>
                        <div style={{ fontSize: '24px', fontWeight: '700', color: '#9333EA' }}>99%</div>
                        <div style={{ fontSize: '12px', color: '#64748B' }}>Top Score</div>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '24px' }}>
                    <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                      <div style={{ padding: '16px 24px', background: '#FFFFFF', borderBottom: '1px solid #F1F5F9' }}>
                        <div style={{ fontSize: '13px', color: '#64748B' }}>5 Total Attempts</div>
                      </div>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead style={{ background: '#F8FAFC' }}>
                          <tr>
                            <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Employee</th>
                            <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }}>Score</th>
                            <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }}>Result</th>
                            <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }}>Attempts</th>
                            <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Last Attempt</th>
                          </tr>
                        </thead>
                        <tbody>
                          {quizAnalyticsEmployeesData.map((emp) => {
                            let resultBg = '#D1FAE5', resultText = '#065F46';
                            if (emp.resultColor === 'red') { resultBg = '#FEE2E2'; resultText = '#B91C1C'; }

                            let scoreColor = '#10B981';
                            if (emp.resultColor === 'red') scoreColor = '#EF4444';

                            return (
                              <tr key={emp.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                                <td style={{ padding: '16px 24px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div className="lm-avatar" style={{ background: emp.color, width: '32px', height: '32px', fontSize: '11px', marginRight: 0, border: 'none', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>{emp.initials}</div>
                                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B' }}>{emp.name}</div>
                                  </div>
                                </td>
                                <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: scoreColor, textAlign: 'center' }}>{emp.score}</td>
                                <td style={{ padding: '16px 24px', textAlign: 'center' }}>
                                  <span style={{ background: resultBg, color: resultText, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>{emp.result}</span>
                                </td>
                                <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '600', color: '#475569', textAlign: 'center' }}>{emp.attempts}</td>
                                <td style={{ padding: '16px 24px', fontSize: '12px', color: '#94A3B8' }}>{emp.lastAttempt}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    
                    <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', padding: '24px' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#1E293B', marginBottom: '24px' }}>Score Distribution</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                            <span style={{ color: '#475569' }}>Excellent (90-100)</span>
                            <span style={{ fontWeight: '700', color: '#1E293B' }}>3</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: '60%', height: '100%', background: '#10B981', borderRadius: '3px' }}></div>
                          </div>
                        </div>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                            <span style={{ color: '#475569' }}>Good (70-89)</span>
                            <span style={{ fontWeight: '700', color: '#1E293B' }}>0</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: '0%', height: '100%', background: '#F1F5F9', borderRadius: '3px' }}></div>
                          </div>
                        </div>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                            <span style={{ color: '#475569' }}>Average (50-69)</span>
                            <span style={{ fontWeight: '700', color: '#1E293B' }}>2</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: '40%', height: '100%', background: '#F59E0B', borderRadius: '3px' }}></div>
                          </div>
                        </div>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                            <span style={{ color: '#475569' }}>Below Pass (&lt;50)</span>
                            <span style={{ fontWeight: '700', color: '#1E293B' }}>0</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: '0%', height: '100%', background: '#F1F5F9', borderRadius: '3px' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                    <FiBarChart2 size={24} color="#2563EB" />
                    <h1 className="lm-page-title" style={{ fontSize: '20px', margin: 0 }}>Analytics & Reports</h1>
                  </div>
                  <p className="lm-page-subtitle" style={{ fontSize: '12px', color: '#64748B' }}>Learning insights, completion trends and performance data</p>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ position: 'relative' }}>
                    <select className="lm-input" style={{ appearance: 'none', cursor: 'pointer', color: '#1E293B', paddingRight: '32px' }}>
                      <option>Last 30 days</option>
                    </select>
                    <FiChevronDown style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#64748B', pointerEvents: 'none' }} />
                  </div>
                  <button onClick={() => console.log("Button clicked!")} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', color: '#1E293B', fontWeight: '600', cursor: 'pointer' }}>
                    <FiDownload size={16} /> Export
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: '#FEE2E2', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FCA5A5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#991B1B', flexShrink: 0 }}>
                    <FiAlertOctagon size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#991B1B', marginBottom: '4px' }}>12 Employees Not Started</div>
                    <div style={{ fontSize: '12px', color: '#B91C1C' }}>Courses assigned but not begun</div>
                  </div>
                </div>
                <div style={{ background: '#FEF3C7', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#FDE68A', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#92400E', flexShrink: 0 }}>
                    <FiAlertTriangle size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#92400E', marginBottom: '4px' }}>3 Low Completion Courses</div>
                    <div style={{ fontSize: '12px', color: '#B45309' }}>Below 40% completion rate</div>
                  </div>
                </div>
                <div style={{ background: '#EFF6FF', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#BFDBFE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1E40AF', flexShrink: 0 }}>
                    <FiCheckSquare size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E40AF', marginBottom: '4px' }}>8 Recent Quiz Failures</div>
                    <div style={{ fontSize: '12px', color: '#1D4ED8' }}>Scored below passing threshold</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB' }}>
                    <LuBook size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#1E293B' }}>186</div>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Total Enrollments</div>
                  </div>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10B981' }}>
                    <LuCheck size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#10B981' }}>78%</div>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Avg Completion</div>
                  </div>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FFFBEB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#F59E0B' }}>
                    <LuStar size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#F59E0B' }}>82%</div>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Avg Quiz Score</div>
                  </div>
                </div>
                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#FAF5FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9333EA' }}>
                    <LuStar size={24} />
                  </div>
                  <div>
                    <div style={{ fontSize: '24px', fontWeight: '700', color: '#9333EA' }}>94%</div>
                    <div style={{ fontSize: '12px', color: '#64748B' }}>Quiz Pass Rate</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                {['Employees', 'Courses', 'Quizzes'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setAnalyticsTab(tab)}
                    style={{ 
                      background: analyticsTab === tab ? '#2563EB' : '#FFFFFF', 
                      color: analyticsTab === tab ? '#FFFFFF' : '#475569', 
                      border: analyticsTab === tab ? 'none' : '1px solid #E2E8F0',
                      padding: '8px 20px', 
                      borderRadius: '24px', 
                      fontSize: '13px', 
                      fontWeight: '600', 
                      cursor: 'pointer' 
                    }}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {analyticsTab === 'Employees' && (
                <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '13px', color: '#64748B' }}>All employees — 42 total</div>
                    <div style={{ position: 'relative', width: '240px' }}>
                      <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', fontSize: '14px' }} />
                      <input type="text" placeholder="Search..." style={{ width: '100%', padding: '8px 12px 8px 36px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px', color: '#1E293B', outline: 'none' }} />
                    </div>
                  </div>
                
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Employee</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Role</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Team</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center' }}>Enrolled</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Completion %</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Avg Score</th>
                      <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left' }}>Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    {analyticsEmployeesData.map((emp) => {
                      let compColor = '#10B981';
                      if (emp.completion < 60) compColor = '#EF4444';
                      else if (emp.completion < 80) compColor = '#F59E0B';

                      let scoreColor = '#10B981';
                      if (emp.avgScore < 75) scoreColor = '#EF4444';
                      else if (emp.avgScore < 85) scoreColor = '#F59E0B';

                      return (
                        <tr key={emp.id} style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }} onClick={() => setSelectedEmployeeForAnalytics(emp)}>
                          <td style={{ padding: '16px 24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div className="lm-avatar" style={{ background: emp.color, width: '32px', height: '32px', fontSize: '11px', marginRight: 0, border: 'none' }}>{emp.initials}</div>
                              <div>
                                <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B', marginBottom: '2px' }}>{emp.name}</div>
                                <div style={{ fontSize: '11px', color: '#94A3B8' }}>{emp.role}</div>
                              </div>
                            </div>
                          </td>
                          <td style={{ padding: '16px 24px', fontSize: '12px', color: '#64748B' }}>{emp.role}</td>
                          <td style={{ padding: '16px 24px', fontSize: '12px', color: '#64748B' }}>{emp.team}</td>
                          <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: '#1E293B', textAlign: 'center' }}>{emp.enrolled}</td>
                          <td style={{ padding: '16px 24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{ flex: 1, height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                <div style={{ width: `${emp.completion}%`, height: '100%', background: compColor, borderRadius: '3px' }}></div>
                              </div>
                              <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569', minWidth: '32px' }}>{emp.completion}%</span>
                            </div>
                          </td>
                          <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: scoreColor }}>{emp.avgScore}%</td>
                          <td style={{ padding: '16px 24px', fontSize: '12px', color: '#94A3B8' }}>{emp.lastActive}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              )}

              {analyticsTab === 'Courses' && (
                <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '13px', color: '#64748B' }}>All courses — 24 total</div>
                    <div style={{ position: 'relative', width: '240px' }}>
                      <FiSearch style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94A3B8', fontSize: '14px' }} />
                      <input type="text" placeholder="Search..." style={{ width: '100%', padding: '8px 12px 8px 36px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '12px', color: '#1E293B', outline: 'none' }} />
                    </div>
                  </div>
                  
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#F8FAFC' }}>
                      <tr>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Course</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Category</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }}>Assigned</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }}>Completed</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Completion %</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Avg Score</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsCoursesData.map((course) => {
                        let compColor = '#10B981';
                        if (course.completion < 50) compColor = '#EF4444';
                        else if (course.completion < 80) compColor = '#F59E0B';

                        let statusBg = '#F1F5F9', statusText = '#64748B';
                        if (course.statusColor === 'green') { statusBg = '#D1FAE5'; statusText = '#065F46'; }
                        if (course.statusColor === 'blue') { statusBg = '#DBEAFE'; statusText = '#1E40AF'; }

                        let catColorText = '#2563EB';
                        if (course.categoryColor === 'blue') catColorText = '#2563EB';

                        return (
                          <tr key={course.id} style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }} onClick={() => setSelectedCourseForAnalytics(course)}>
                            <td style={{ padding: '16px 24px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: course.themeColor }}></div>
                                <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B' }}>{course.name}</div>
                              </div>
                            </td>
                            <td style={{ padding: '16px 24px' }}>
                              <span style={{ background: '#EFF6FF', color: catColorText, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>{course.category}</span>
                            </td>
                            <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: '#1E293B', textAlign: 'center' }}>{course.assigned}</td>
                            <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: '#10B981', textAlign: 'center' }}>{course.completed}</td>
                            <td style={{ padding: '16px 24px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '100px', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                  <div style={{ width: `${course.completion}%`, height: '100%', background: compColor, borderRadius: '3px' }}></div>
                                </div>
                                <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569', minWidth: '32px' }}>{course.completion}%</span>
                              </div>
                            </td>
                            <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: '#1E293B' }}>{course.avgScore}%</td>
                            <td style={{ padding: '16px 24px' }}>
                              <span style={{ background: statusBg, color: statusText, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>{course.status}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}

              {analyticsTab === 'Quizzes' && (
                <div style={{ background: '#FFFFFF', borderRadius: '12px', border: '1px solid #E2E8F0', overflow: 'hidden' }}>
                  <div style={{ padding: '16px 24px', borderBottom: '1px solid #F1F5F9' }}>
                    <div style={{ fontSize: '13px', color: '#64748B' }}>Quiz Results</div>
                  </div>
                  
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ background: '#F8FAFC' }}>
                      <tr>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Employee</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Quiz</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', borderBottom: '1px solid #F1F5F9' }}>Score</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Result</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Attempts</th>
                        <th style={{ padding: '16px 24px', fontSize: '11px', fontWeight: '700', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'left', borderBottom: '1px solid #F1F5F9' }}>Last Attempt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsQuizzesData.map((quiz) => {
                        let compColor = '#10B981';
                        if (quiz.result < 50) compColor = '#F1F5F9'; // Gray for 0%
                        else if (quiz.result < 80) compColor = '#F59E0B';

                        let statusBg = '#F1F5F9', statusText = '#64748B';
                        if (quiz.statusColor === 'green') { statusBg = '#D1FAE5'; statusText = '#065F46'; }
                        if (quiz.statusColor === 'blue') { statusBg = '#DBEAFE'; statusText = '#1E40AF'; }

                        let attemptsColor = '#10B981';
                        if (quiz.attempts !== '—') {
                          const num = parseInt(quiz.attempts);
                          if (num < 80) attemptsColor = '#F59E0B';
                          if (num < 60) attemptsColor = '#EF4444';
                        } else {
                          attemptsColor = '#64748B';
                        }

                        return (
                          <tr key={quiz.id} style={{ borderBottom: '1px solid #F1F5F9', cursor: 'pointer' }} onClick={() => setSelectedQuizForAnalytics(quiz)}>
                            <td style={{ padding: '16px 24px' }}>
                              <div style={{ fontSize: '13px', fontWeight: '700', color: '#1E293B' }}>{quiz.name}</div>
                            </td>
                            <td style={{ padding: '16px 24px' }}>
                              <div style={{ fontSize: '13px', color: '#64748B' }}>{quiz.course}</div>
                            </td>
                            <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: '#1E293B', textAlign: 'center' }}>{quiz.score}</td>
                            <td style={{ padding: '16px 24px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '100px', height: '6px', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                                  <div style={{ width: `${quiz.result}%`, height: '100%', background: compColor, borderRadius: '3px' }}></div>
                                </div>
                                <span style={{ fontSize: '12px', fontWeight: '600', color: '#475569', minWidth: '32px' }}>{quiz.result}%</span>
                              </div>
                            </td>
                            <td style={{ padding: '16px 24px', fontSize: '13px', fontWeight: '700', color: attemptsColor }}>{quiz.attempts}</td>
                            <td style={{ padding: '16px 24px' }}>
                              <span style={{ background: statusBg, color: statusText, padding: '4px 10px', borderRadius: '12px', fontSize: '11px', fontWeight: '600' }}>{quiz.lastAttempt}</span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
              )}
            </div>
          )}
        </>
      ) : editingQuizId ? (
        <div className="lm-edit-quiz-view" style={{ paddingBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div className="lm-tabs" style={{ background: '#FFFFFF', padding: '4px', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', gap: '4px' }}>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab"><FiBookOpen className="lm-tab-icon" /> Courses</button>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab active"><FiHelpCircle className="lm-tab-icon" /> Quizzes</button>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab"><FiBarChart2 className="lm-tab-icon" /> Analytics</button>
            </div>
            <button 
              style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} 
              onClick={() => setEditingQuizId(null)}
            >
              <FiArrowLeft size={16} /> Back to Quizzes
            </button>
          </div>

          <div className="lm-edit-quiz-header" style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: '#64748B', marginBottom: '12px' }}>
              <span style={{ color: '#2563EB', cursor: 'pointer' }} onClick={() => setEditingQuizId(null)}>Quizzes</span>
              <FiChevronDown style={{ transform: 'rotate(-90deg)' }} />
              <span>GDPR Compliance Quiz</span>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '4px' }}>
                  <MdOutlineEditNote size={24} color="#2563EB" />
                  <h1 className="lm-page-title" style={{ fontSize: '20px', margin: 0 }}>Edit Quiz</h1>
                </div>
                <p className="lm-page-subtitle" style={{ fontSize: '12px' }}>Editing: Data Privacy & GDPR</p>
              </div>
              <div style={{ background: '#D1FAE5', color: '#059669', fontSize: '11px', fontWeight: '700', padding: '6px 12px', borderRadius: '6px' }}>Active</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px' }}>
            
            <div>
              <div className="lm-course-card" style={{ marginBottom: '24px' }}>
                <div className="lm-card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <FiInfo size={18} color="#2563EB" />
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Quiz Basics</h3>
                </div>
                
                <div className="lm-form-group" style={{ marginBottom: '20px' }}>
                  <label className="lm-form-label">QUIZ TITLE <span style={{ color: '#EF4444' }}>*</span></label>
                  <input type="text" className="lm-input" defaultValue="GDPR Compliance Quiz" />
                </div>

                <div className="lm-form-group" style={{ marginBottom: '20px' }}>
                  <label className="lm-form-label">ASSOCIATED COURSE</label>
                  <div style={{ position: 'relative' }}>
                    <select className="lm-input" style={{ appearance: 'none', cursor: 'pointer', color: '#1E293B' }}>
                      <option>Data Privacy & GDPR</option>
                    </select>
                    <FiChevronDown style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B', pointerEvents: 'none' }} />
                  </div>
                </div>

                <div className="lm-split-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div className="lm-form-group">
                    <label className="lm-form-label">PASS SCORE (%)</label>
                    <input type="number" className="lm-input" defaultValue="80" />
                  </div>
                  <div className="lm-form-group">
                    <label className="lm-form-label">TIME LIMIT (MIN)</label>
                    <input type="number" className="lm-input" defaultValue="40" />
                  </div>
                </div>
              </div>

              <div className="lm-course-card">
                <div className="lm-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiAlignLeft size={18} color="#2563EB" />
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Questions</h3>
                  </div>
                  <button onClick={() => console.log("Button clicked!")} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#475569', fontWeight: '600', cursor: 'pointer' }}>+ Add Question</button>
                </div>

                {[1, 2, 3].map((qNum) => (
                  <div key={qNum} className="lm-question-card" style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ background: '#EFF6FF', color: '#2563EB', fontSize: '11px', fontWeight: '700', padding: '4px 8px', borderRadius: '4px' }}>Q{qNum}</div>
                        <div style={{ border: '1px solid #E2E8F0', padding: '4px 12px', borderRadius: '6px', fontSize: '11px', color: '#475569', fontWeight: '500' }}>Multiple Choice</div>
                      </div>
                      <button onClick={() => console.log("Button clicked!")} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', color: '#475569', fontWeight: '500', cursor: 'pointer' }}>Delete</button>
                    </div>

                    <input type="text" className="lm-input" defaultValue={`Enter question ${qNum} here...`} style={{ marginBottom: '12px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {['A', 'B', 'C', 'D'].map((opt, idx) => {
                        const isCorrect = (mockQuizAnswers[`wizard-${qNum}`] !== undefined ? mockQuizAnswers[`wizard-${qNum}`] : 2) === idx;
                        return (
                          <div key={idx} onClick={() => setMockQuizAnswers({ ...mockQuizAnswers, [`wizard-${qNum}`]: idx })} className="lm-question-option" style={{ display: 'flex', alignItems: 'center', gap: '12px', border: isCorrect ? '1px solid #10B981' : '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 12px', background: '#FFFFFF', cursor: 'pointer' }}>
                            <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: isCorrect ? '4px solid #2563EB' : '1px solid #CBD5E1', cursor: 'pointer', background: isCorrect ? '#2563EB' : 'transparent', boxShadow: isCorrect ? 'inset 0 0 0 2px #fff' : 'none' }}></div>
                            <input type="text" placeholder={isCorrect ? `Option ${opt} (Correct)` : `Option ${opt}`} style={{ border: 'none', outline: 'none', fontSize: '12px', width: '100%', color: isCorrect ? '#059669' : '#1E293B', cursor: 'pointer', background: 'transparent' }} readOnly={false} />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              <div className="lm-course-card">
                <div className="lm-card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
                  <FiSettings size={18} color="#2563EB" />
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Settings</h3>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #F1F5F9', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#1E293B', marginBottom: '2px' }}>Shuffle Questions</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Randomise order per attempt</div>
                  </div>
                  <div className={`lm-toggle-switch ${editShuffle ? 'active' : ''}`} onClick={() => setEditShuffle(!editShuffle)}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid #F1F5F9', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#1E293B', marginBottom: '2px' }}>Allow Retakes</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Learner can retry on fail</div>
                  </div>
                  <div className={`lm-toggle-switch ${editRetakes ? 'active' : ''}`} onClick={() => setEditRetakes(!editRetakes)}></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#1E293B', marginBottom: '2px' }}>Show Answers After</div>
                    <div style={{ fontSize: '11px', color: '#94A3B8' }}>Reveal correct answers after submission</div>
                  </div>
                  <div className={`lm-toggle-switch ${editShowAnswers ? 'active' : ''}`} onClick={() => setEditShowAnswers(!editShowAnswers)}></div>
                </div>
              </div>

              <div className="lm-course-card">
                <div className="lm-card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <FiLayout size={18} color="#2563EB" />
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Status</h3>
                </div>
                <div style={{ position: 'relative' }}>
                  <select className="lm-input" style={{ appearance: 'none', cursor: 'pointer', color: '#1E293B' }}>
                    <option>Active</option>
                    <option>Draft</option>
                  </select>
                  <FiChevronDown style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B', pointerEvents: 'none' }} />
                </div>
              </div>

              <div className="lm-course-card">
                <div className="lm-card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <FiPlus size={18} color="#2563EB" />
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Upload Questions (CSV)</h3>
                </div>
                <div style={{ border: '1px dashed #E2E8F0', borderRadius: '8px', padding: '24px 16px', textAlign: 'center' }}>
                  <LuFileText size={24} color="#94A3B8" style={{ marginBottom: '12px' }} />
                  <div style={{ fontSize: '12px', fontWeight: '500', color: '#1E293B', marginBottom: '4px' }}>Replace questions via CSV</div>
                  <div style={{ fontSize: '11px', color: '#94A3B8' }}>question, A, B, C, D, correct</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lm-quiz-footer" style={{ position: 'fixed', bottom: 0, left: 240, right: 0, background: '#F8FAFC', borderTop: '1px solid #E2E8F0', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
            <button style={{ background: '#F1F5F9', border: 'none', borderRadius: '6px', padding: '8px 16px', color: '#475569', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }} onClick={() => setEditingQuizId(null)}>Cancel</button>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => console.log("Button clicked!")} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', color: '#475569', fontWeight: '600', cursor: 'pointer' }}>Save as Draft</button>
              <button onClick={() => console.log("Button clicked!")} className="btn-create-course" style={{ padding: '8px 16px', fontSize: '13px' }}>Save Changes</button>
            </div>
          </div>
        </div>
      ) : isCreatingQuiz ? (
        <div className="lm-create-quiz-view" style={{ paddingBottom: '80px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div className="lm-tabs" style={{ background: '#FFFFFF', padding: '4px', borderRadius: '8px', border: '1px solid #E2E8F0', display: 'flex', gap: '4px' }}>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab"><FiBookOpen className="lm-tab-icon" /> Courses</button>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab active"><FiHelpCircle className="lm-tab-icon" /> Quizzes</button>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab"><FiBarChart2 className="lm-tab-icon" /> Analytics</button>
            </div>
            <button 
              style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#1E293B', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} 
              onClick={() => setIsCreatingQuiz(false)}
            >
              <FiArrowLeft size={16} /> Back to Quizzes
            </button>
          </div>

          <div className="lm-create-quiz-header" style={{ marginBottom: '24px' }}>
            <h1 className="lm-page-title">Create New Quiz</h1>
            <p className="lm-page-subtitle">Build an assessment for a course</p>
          </div>

          <div className="lm-course-card" style={{ marginBottom: '24px' }}>
            <div className="lm-card-header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <FiInfo size={18} color="#2563EB" />
              <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Quiz Basics</h3>
            </div>
            
            <div className="lm-form-group" style={{ marginBottom: '20px' }}>
              <label className="lm-form-label">QUIZ TITLE</label>
              <input type="text" className="lm-input" placeholder="e.g. React Hooks Assessment" />
            </div>

            <div className="lm-form-group" style={{ marginBottom: '20px' }}>
              <label className="lm-form-label">ASSOCIATED COURSE</label>
              <div style={{ position: 'relative' }}>
                <select className="lm-input" style={{ appearance: 'none', cursor: 'pointer', color: '#1E293B' }}>
                  <option>React Advanced Patterns</option>
                  <option>Leadership Essentials</option>
                </select>
                <FiChevronDown style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B', pointerEvents: 'none' }} />
              </div>
            </div>

            <div className="lm-split-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
              <div className="lm-form-group">
                <label className="lm-form-label">TIME LIMIT (MINUTES)</label>
                <input type="number" className="lm-input" defaultValue="30" />
              </div>
              <div className="lm-form-group">
                <label className="lm-form-label">PASSING SCORE (%)</label>
                <input type="number" className="lm-input" defaultValue="70" />
              </div>
            </div>

            <div className="lm-settings-row" style={{ paddingBottom: '16px', borderBottom: '1px solid #F1F5F9', marginBottom: '16px' }}>
              <span className="lm-setting-label">Shuffle Questions</span>
              <div className={`lm-toggle-switch ${shuffleQuestions ? 'active' : ''}`} onClick={() => setShuffleQuestions(!shuffleQuestions)}></div>
            </div>
            <div className="lm-settings-row" style={{ paddingBottom: '0', borderBottom: 'none' }}>
              <span className="lm-setting-label">Allow Multiple Attempts</span>
              <div className={`lm-toggle-switch ${allowMultipleAttempts ? 'active' : ''}`} onClick={() => setAllowMultipleAttempts(!allowMultipleAttempts)}></div>
            </div>
          </div>

          <div className="lm-course-card">
            <div className="lm-card-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiAlignLeft size={18} color="#2563EB" />
                <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1E293B', margin: 0 }}>Questions</h3>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => console.log("Button clicked!")} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', color: '#475569', fontWeight: '600', cursor: 'pointer' }}>
                  <LuFileText size={14} /> Bulk Upload (CSV)
                </button>
                <button onClick={() => console.log("Button clicked!")} className="btn-create-course" style={{ padding: '6px 12px', fontSize: '12px' }}>+ Add Question</button>
              </div>
            </div>

            <div className="lm-csv-helper" style={{ background: '#F8FAFC', border: '1px dashed #E2E8F0', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
              <div style={{ fontSize: '11px', color: '#64748B', marginBottom: '4px' }}><strong>CSV Format:</strong> Question, Option A, Option B, Option C, Option D, Correct Index (0-3)</div>
              <a href="#" style={{ fontSize: '11px', color: '#2563EB', textDecoration: 'none', fontWeight: '500' }}>Download Sample Template</a>
            </div>

            {[1, 2].map((qNum) => (
              <div key={qNum} className="lm-question-card" style={{ border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ background: '#EFF6FF', color: '#2563EB', fontSize: '11px', fontWeight: '700', padding: '4px 8px', borderRadius: '4px' }}>Q{qNum}</div>
                    <div style={{ border: '1px solid #E2E8F0', padding: '4px 12px', borderRadius: '6px', fontSize: '11px', color: '#475569', fontWeight: '500' }}>Multiple Choice</div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => console.log("Button clicked!")} style={{ background: '#F8FAFC', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', color: '#64748B', fontWeight: '600', cursor: 'pointer' }}>Copy</button>
                    <button onClick={() => console.log("Button clicked!")} style={{ background: '#FEF2F2', border: 'none', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', color: '#EF4444', fontWeight: '600', cursor: 'pointer' }}>Delete</button>
                  </div>
                </div>

                <input type="text" className="lm-input" placeholder="Enter your question here..." style={{ marginBottom: '12px' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['A', 'B', 'C', 'D'].map((opt, idx) => {
                    const isCorrect = (mockQuizAnswers[`modal-${qNum}`] !== undefined ? mockQuizAnswers[`modal-${qNum}`] : 2) === idx;
                    return (
                      <div key={idx} onClick={() => setMockQuizAnswers({ ...mockQuizAnswers, [`modal-${qNum}`]: idx })} className="lm-question-option" style={{ display: 'flex', alignItems: 'center', gap: '12px', border: isCorrect ? '1px solid #10B981' : '1px solid #E2E8F0', borderRadius: '6px', padding: '8px 12px', background: '#FFFFFF', cursor: 'pointer' }}>
                        <div style={{ width: '14px', height: '14px', borderRadius: '50%', border: isCorrect ? '4px solid #2563EB' : '1px solid #CBD5E1', cursor: 'pointer', background: isCorrect ? '#2563EB' : 'transparent', boxShadow: isCorrect ? 'inset 0 0 0 2px #fff' : 'none' }}></div>
                        <input type="text" placeholder={isCorrect ? `Option ${opt} (Correct)` : `Option ${opt}`} style={{ border: 'none', outline: 'none', fontSize: '12px', width: '100%', color: isCorrect ? '#059669' : '#1E293B', cursor: 'pointer', background: 'transparent' }} readOnly={false} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="lm-quiz-footer" style={{ position: 'fixed', bottom: 0, left: 240, right: 0, background: '#F8FAFC', borderTop: '1px solid #E2E8F0', padding: '16px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
            <button style={{ background: 'transparent', border: 'none', color: '#475569', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }} onClick={() => setIsCreatingQuiz(false)}>Cancel</button>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setIsCreatingQuiz(false)} style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', color: '#475569', fontWeight: '600', cursor: 'pointer' }}>Save Draft</button>
              <button onClick={() => setIsCreatingQuiz(false)} className="btn-create-course" style={{ padding: '8px 16px', fontSize: '13px' }}>Publish Quiz</button>
            </div>
          </div>
        </div>
      ) : selectedCourseId ? (
        <div className="lm-course-details-view">
          <div className="lm-details-top-bar">
            <div className="lm-tabs">
              <button onClick={() => console.log("Button clicked!")} className="lm-tab active"><FiBookOpen className="lm-tab-icon" /> Courses</button>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab"><FiHelpCircle className="lm-tab-icon" /> Quizzes</button>
              <button onClick={() => console.log("Button clicked!")} className="lm-tab"><FiBarChart2 className="lm-tab-icon" /> Analytics</button>
            </div>
            <button className="btn-back-courses" onClick={() => setSelectedCourseId(null)}>
              <FiArrowLeft size={16} /> Back to Courses
            </button>
          </div>

          <div className="lm-details-header-section">
            <div className="lm-breadcrumb" style={{ marginBottom: '16px' }}>
              Courses &gt; <span className="lm-breadcrumb-active">React Advanced Patterns</span>
            </div>
            <div className="lm-details-header-content">
              <div>
                <h1 className="lm-page-title" style={{ marginBottom: '12px' }}>React Advanced Patterns</h1>
                <div className="lm-course-meta">
                  <span><LuSquareTerminal size={14} /> Technical</span>
                  <span><FiClock size={14} /> 12h</span>
                  <span><LuFileText size={14} /> Due: Jun 30, 2026</span>
                  <span className="lm-badge-green" style={{ marginLeft: '8px' }}>Published</span>
                </div>
              </div>
              <div className="lm-details-actions">
                <button className="btn-form-cancel" onClick={() => setIsEditModalOpen(true)}><FiEdit size={14} /> Edit</button>
                <button className="btn-form-cancel" onClick={() => setIsAssignModalOpen(true)}><FiUserPlus size={14} /> Assign Course</button>
                <button className="btn-form-cancel" onClick={() => setIsReminderModalOpen(true)}><FiSend size={14} /> Send Reminder</button>
                <button onClick={() => console.log("Button clicked!")} className="btn-form-next"><FiDownload size={14} /> Export Report</button>
              </div>
            </div>
          </div>

          <div className="lm-course-kpi-grid">
            <div className="lm-course-kpi-card">
              <div className="lm-kpi-icon-wrapper" style={{ color: '#3B82F6', background: '#EFF6FF' }}>
                <FiUsers size={20} />
              </div>
              <div className="lm-kpi-stats">
                <div className="lm-kpi-value-lg" style={{ color: '#1E293B' }}>42</div>
                <div className="lm-kpi-label-sm">Total Assigned</div>
              </div>
            </div>
            
            <div className="lm-course-kpi-card">
              <div className="lm-kpi-icon-wrapper" style={{ color: '#10B981', background: '#D1FAE5' }}>
                <FiCheckCircle size={20} />
              </div>
              <div className="lm-kpi-stats">
                <div className="lm-kpi-value-lg" style={{ color: '#10B981' }}>28</div>
                <div className="lm-kpi-label-sm">Completed</div>
              </div>
            </div>

            <div className="lm-course-kpi-card">
              <div className="lm-kpi-icon-wrapper" style={{ color: '#3B82F6', background: '#EFF6FF' }}>
                <FiClock size={20} />
              </div>
              <div className="lm-kpi-stats">
                <div className="lm-kpi-value-lg" style={{ color: '#3B82F6' }}>10</div>
                <div className="lm-kpi-label-sm">In Progress</div>
              </div>
            </div>

            <div className="lm-course-kpi-card">
              <div className="lm-kpi-icon-wrapper" style={{ color: '#F59E0B', background: '#FEF3C7' }}>
                <FiAlertCircle size={20} />
              </div>
              <div className="lm-kpi-stats">
                <div className="lm-kpi-value-lg" style={{ color: '#F59E0B' }}>4</div>
                <div className="lm-kpi-label-sm">Not Started</div>
              </div>
            </div>

            <div className="lm-course-kpi-card">
              <div className="lm-radial-progress">
                <svg viewBox="0 0 36 36" className="lm-circular-chart green">
                  <path className="lm-circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className="lm-circle"
                    strokeDasharray="67, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="16.5" className="lm-percentage">67%</text>
                  <text x="18" y="24" className="lm-percentage-label">Done</text>
                </svg>
              </div>
              <div className="lm-kpi-stats" style={{ marginLeft: '12px' }}>
                <div className="lm-kpi-value-lg" style={{ color: '#10B981' }}>67%</div>
                <div className="lm-kpi-label-sm">Completion<br/>Rate</div>
              </div>
            </div>
          </div>
          
          <div className="lm-enrolled-table-section">
            <div className="lm-enrolled-table-header">
              <span className="lm-enrolled-count">42 enrolled employees</span>
              <div className="lm-enrolled-actions">
                <div className="lm-search-box">
                  <FiSearch className="lm-search-icon" />
                  <input type="text" placeholder="Search..." />
                </div>
                <div className="lm-filter-dropdown">
                  <span>All Status</span>
                  <FiChevronDown />
                </div>
              </div>
            </div>
            
            <table className="lm-enrolled-table">
              <thead>
                <tr>
                  <th>EMPLOYEE</th>
                  <th>STATUS</th>
                  <th>PROGRESS</th>
                  <th>SCORE</th>
                  <th>LAST ACTIVE</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="lm-employee-cell">
                      <div className="lm-avatar" style={{ background: '#0891B2' }}>RN</div>
                      <span className="lm-employee-name">Riya Nair</span>
                    </div>
                  </td>
                  <td><span className="lm-badge-green">Completed</span></td>
                  <td>
                    <div className="lm-progress-bar-cell">
                      <div className="lm-progress-track">
                        <div className="lm-progress-fill progress-green" style={{ width: '100%' }}></div>
                      </div>
                      <span className="lm-progress-text">100%</span>
                    </div>
                  </td>
                  <td><span className="lm-score-text">94%</span></td>
                  <td>Today</td>
                  <td><button onClick={() => console.log("Button clicked!")} className="btn-remind">Remind</button></td>
                </tr>
                <tr>
                  <td>
                    <div className="lm-employee-cell">
                      <div className="lm-avatar" style={{ background: '#E11D48' }}>AK</div>
                      <span className="lm-employee-name">Arjun Kumar</span>
                    </div>
                  </td>
                  <td><span className="lm-badge-blue">In Progress</span></td>
                  <td>
                    <div className="lm-progress-bar-cell">
                      <div className="lm-progress-track">
                        <div className="lm-progress-fill progress-blue" style={{ width: '72%' }}></div>
                      </div>
                      <span className="lm-progress-text">72%</span>
                    </div>
                  </td>
                  <td>-</td>
                  <td>Yesterday</td>
                  <td><button onClick={() => console.log("Button clicked!")} className="btn-remind">Remind</button></td>
                </tr>
                <tr>
                  <td>
                    <div className="lm-employee-cell">
                      <div className="lm-avatar" style={{ background: '#2563EB' }}>SP</div>
                      <span className="lm-employee-name">Sneha Patel</span>
                    </div>
                  </td>
                  <td><span className="lm-badge-green">Completed</span></td>
                  <td>
                    <div className="lm-progress-bar-cell">
                      <div className="lm-progress-track">
                        <div className="lm-progress-fill progress-green" style={{ width: '100%' }}></div>
                      </div>
                      <span className="lm-progress-text">100%</span>
                    </div>
                  </td>
                  <td><span className="lm-score-text">88%</span></td>
                  <td>Apr 20</td>
                  <td><button onClick={() => console.log("Button clicked!")} className="btn-remind">Remind</button></td>
                </tr>
                <tr>
                  <td>
                    <div className="lm-employee-cell">
                      <div className="lm-avatar" style={{ background: '#059669' }}>KR</div>
                      <span className="lm-employee-name">Kiran Rao</span>
                    </div>
                  </td>
                  <td><span className="lm-badge-blue">In Progress</span></td>
                  <td>
                    <div className="lm-progress-bar-cell">
                      <div className="lm-progress-track">
                        <div className="lm-progress-fill progress-blue" style={{ width: '45%' }}></div>
                      </div>
                      <span className="lm-progress-text">45%</span>
                    </div>
                  </td>
                  <td>-</td>
                  <td>Apr 19</td>
                  <td><button onClick={() => console.log("Button clicked!")} className="btn-remind">Remind</button></td>
                </tr>
                <tr>
                  <td>
                    <div className="lm-employee-cell">
                      <div className="lm-avatar" style={{ background: '#7C3AED' }}>PM</div>
                      <span className="lm-employee-name">Priya Mehta</span>
                    </div>
                  </td>
                  <td><span className="lm-badge-grey">Not Started</span></td>
                  <td>
                    <div className="lm-progress-bar-cell">
                      <div className="lm-progress-track">
                        <div className="lm-progress-fill" style={{ width: '0%' }}></div>
                      </div>
                      <span className="lm-progress-text">0%</span>
                    </div>
                  </td>
                  <td>-</td>
                  <td>—</td>
                  <td><button onClick={() => console.log("Button clicked!")} className="btn-remind">Remind</button></td>
                </tr>
                <tr>
                  <td>
                    <div className="lm-employee-cell">
                      <div className="lm-avatar" style={{ background: '#2563EB' }}>DS</div>
                      <span className="lm-employee-name">Devraj Singh</span>
                    </div>
                  </td>
                  <td><span className="lm-badge-green">Completed</span></td>
                  <td>
                    <div className="lm-progress-bar-cell">
                      <div className="lm-progress-track">
                        <div className="lm-progress-fill progress-green" style={{ width: '100%' }}></div>
                      </div>
                      <span className="lm-progress-text">100%</span>
                    </div>
                  </td>
                  <td><span className="lm-score-text">91%</span></td>
                  <td>Apr 18</td>
                  <td><button onClick={() => console.log("Button clicked!")} className="btn-remind">Remind</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      ) : (
        <div className="lm-create-course-view">
          <div className="lm-create-top-bar">
            <div className="lm-tabs">
              <button className={`lm-tab ${activeTab === 'Courses' ? 'active' : ''}`} onClick={() => setActiveTab('Courses')}>
                <FiBookOpen className="lm-tab-icon" /> Courses
              </button>
              <button className={`lm-tab ${activeTab === 'Quizzes' ? 'active' : ''}`} onClick={() => setActiveTab('Quizzes')}>
                <FiHelpCircle className="lm-tab-icon" /> Quizzes
              </button>
              <button className={`lm-tab ${activeTab === 'Analytics' ? 'active' : ''}`} onClick={() => setActiveTab('Analytics')}>
                <FiBarChart2 className="lm-tab-icon" /> Analytics
              </button>
            </div>
            <button className="btn-back-courses" onClick={() => setIsCreatingCourse(false)}>
              <FiArrowLeft size={16} /> Back to Courses
            </button>
          </div>

          <div className="lm-create-header">
            <h1 className="lm-page-title">Create New Course</h1>
            <p className="lm-page-subtitle">Fill in the details to create and publish a course</p>
          </div>

          <div className="lm-wizard-stepper">
            <div className={`lm-step ${wizardStep === 1 ? 'active' : wizardStep > 1 ? 'completed' : ''}`} onClick={() => setWizardStep(1)}>
              <div className="lm-step-circle">1</div>
              <span className="lm-step-text">Course Basics</span>
            </div>
            <div className={`lm-step ${wizardStep === 2 ? 'active' : wizardStep > 2 ? 'completed' : ''}`} onClick={() => setWizardStep(2)}>
              <div className="lm-step-circle">2</div>
              <span className="lm-step-text">Content</span>
            </div>
            <div className={`lm-step ${wizardStep === 3 ? 'active' : wizardStep > 3 ? 'completed' : ''}`} onClick={() => setWizardStep(3)}>
              <div className="lm-step-circle">3</div>
              <span className="lm-step-text">Assign Users</span>
            </div>
            <div className={`lm-step ${wizardStep === 4 ? 'active' : wizardStep > 4 ? 'completed' : ''}`} onClick={() => setWizardStep(4)}>
              <div className="lm-step-circle">4</div>
              <span className="lm-step-text">Completion Rules</span>
            </div>
            <div className={`lm-step ${wizardStep === 5 ? 'active' : wizardStep > 5 ? 'completed' : ''}`} onClick={() => setWizardStep(5)}>
              <div className="lm-step-circle">5</div>
              <span className="lm-step-text">Review & Publish</span>
            </div>
          </div>

          <div className="lm-form-card">
            {wizardStep === 1 && (
              <>
                <h2 className="lm-form-section-title">
                  <LuSquareTerminal className="lm-section-icon" />
                  Course Basics
                </h2>

                <div className="lm-form-group">
                  <label>COURSE TITLE *</label>
                  <input type="text" className="lm-input" placeholder="e.g. React Advanced Patterns" />
                </div>

                <div className="lm-form-group">
                  <label>SHORT DESCRIPTION *</label>
                  <textarea className="lm-textarea" rows="4" placeholder="Brief overview of what learners will achieve..."></textarea>
                </div>

                <div className="lm-form-row">
                  <div className="lm-form-group">
                    <label>CATEGORY *</label>
                    <input type="text" className="lm-input" value={courseCategory} onChange={(e) => setCourseCategory(e.target.value)} placeholder="Technical" />
                  </div>
                  <div className="lm-form-group">
                    <label>DIFFICULTY LEVEL</label>
                    <input type="text" className="lm-input" placeholder="Beginner" />
                  </div>
                </div>

                <div className="lm-form-row">
                  <div className="lm-form-group">
                    <label>DURATION (HOURS)</label>
                    <input type="text" className="lm-input" placeholder="e.g. 8" />
                  </div>
                  <div className="lm-form-group">
                    <label>DEADLINE</label>
                    <input type="text" className="lm-input" />
                  </div>
                </div>

                <div className="lm-form-group">
                  <label>COURSE THUMBNAIL</label>
                  <div className="lm-dropzone">
                    <FiUpload className="lm-upload-icon" />
                    <p className="lm-dropzone-text">Drop image here or click to upload</p>
                    <p className="lm-dropzone-subtext">PNG, JPG up to 5MB</p>
                  </div>
                </div>

                <div className="lm-form-footer" style={{ justifyContent: 'flex-end' }}>
                  <button className="btn-form-cancel" onClick={() => setIsCreatingCourse(false)}>Cancel</button>
                  <button className="btn-form-next" onClick={() => setWizardStep(2)}>Next: Content <FiArrowRight size={16} /></button>
                </div>
              </>
            )}

            {wizardStep === 2 && (
              <>
                <h2 className="lm-form-section-title">
                  <LuFileText className="lm-section-icon" />
                  Course Content
                </h2>

                <div className="lm-form-group">
                  <label>CONTENT TYPE</label>
                  <input type="text" className="lm-input" placeholder="Video + Text" />
                </div>

                <div className="lm-form-group">
                  <label>UPLOAD CONTENT</label>
                  <div className="lm-dropzone lm-dropzone-blue">
                    <FiUpload className="lm-upload-icon" />
                    <p className="lm-dropzone-text">Drag & drop files or click to browse</p>
                    <p className="lm-dropzone-subtext">MP4, PDF, ZIP up to 500MB</p>
                  </div>
                </div>

                <div className="lm-form-group">
                  <label>LEARNING OBJECTIVES</label>
                  <textarea className="lm-textarea" rows="4" placeholder="After completing this course, learners will be able to..."></textarea>
                </div>

                <div className="lm-form-group">
                  <label>TAGS</label>
                  <div className="lm-tags-input-container">
                    <div className="lm-tag-pill">React <FiX size={12} /></div>
                    <div className="lm-tag-pill">Frontend <FiX size={12} /></div>
                    <div className="lm-tag-pill">JavaScript <FiX size={12} /></div>
                    <input type="text" className="lm-tags-input" placeholder="Add tag, press Enter..." />
                  </div>
                </div>

                <div className="lm-form-footer" style={{ justifyContent: 'space-between' }}>
                  <button className="btn-form-cancel" onClick={() => setWizardStep(1)}>
                    <FiArrowLeft size={16} /> Previous
                  </button>
                  <button className="btn-form-next" onClick={() => setWizardStep(3)}>
                    Next: Assign Users <FiArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {wizardStep === 3 && (
              <>
                <h2 className="lm-form-section-title">
                  <FiUsers className="lm-section-icon" />
                  Assign Users
                </h2>

                <div className="lm-form-group">
                  <label>SEARCH & SELECT EMPLOYEES</label>
                  <div className="lm-search-input-wrapper">
                    <FiSearch className="lm-search-input-icon" />
                    <input type="text" className="lm-input-with-icon" placeholder="Search employees by name, team, role..." />
                  </div>
                </div>

                <div className="lm-form-group">
                  <label>SELECTED ({employees.filter(e => e.selected).length})</label>
                  <div className="lm-selected-users-container">
                    {employees.filter(e => e.selected).map(emp => (
                      <div className="lm-user-pill" key={emp.id}>
                        <div className="lm-user-pill-avatar" style={{ background: emp.bg }}>{emp.initials}</div>
                        <span>{emp.name}</span>
                        <FiX size={12} className="lm-user-pill-close" onClick={() => toggleEmployeeSelection(emp.id)} />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lm-form-group">
                  <label>OR ASSIGN BY TEAM / ROLE</label>
                  <div className="lm-form-row">
                    <input type="text" className="lm-input" placeholder="Select Team" />
                    <input type="text" className="lm-input" placeholder="Select Role" />
                  </div>
                </div>

                <div className="lm-user-list">
                  {employees.filter(e => !e.selected).map(emp => (
                    <div className="lm-user-row" key={emp.id}>
                      <div className="lm-user-row-avatar" style={{ background: emp.bg }}>{emp.initials}</div>
                      <span className="lm-user-row-name">{emp.name}</span>
                      <button className="lm-user-row-add" onClick={() => toggleEmployeeSelection(emp.id)}>Add</button>
                    </div>
                  ))}
                </div>

                <div className="lm-form-footer" style={{ justifyContent: 'space-between' }}>
                  <button className="btn-form-cancel" onClick={() => setWizardStep(2)}>
                    <FiArrowLeft size={16} /> Previous
                  </button>
                  <button className="btn-form-next" onClick={() => setWizardStep(4)}>
                    Next: Assign Users <FiArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {wizardStep === 4 && (
              <>
                <h2 className="lm-form-section-title">
                  <LuShieldCheck className="lm-section-icon" />
                  Completion Rules
                </h2>

                <div className="lm-rule-row">
                  <div className="lm-rule-info">
                    <div className="lm-rule-title">Require quiz to complete</div>
                    <div className="lm-rule-desc">Learner must pass the assessment to mark course complete</div>
                  </div>
                  <div className="lm-rule-control">
                    <div className={`lm-toggle-switch ${completionRules.requireQuiz ? 'active' : ''}`} onClick={() => toggleRule('requireQuiz')}></div>
                  </div>
                </div>

                <div className="lm-rule-row">
                  <div className="lm-rule-info">
                    <div className="lm-rule-title">Minimum passing score</div>
                    <div className="lm-rule-desc">Set minimum score threshold for passing</div>
                  </div>
                  <div className="lm-rule-control">
                    <input type="text" className="lm-rule-input" value={completionRules.minScore} onChange={(e) => setCompletionRules({...completionRules, minScore: e.target.value})} />
                  </div>
                </div>

                <div className="lm-rule-row">
                  <div className="lm-rule-info">
                    <div className="lm-rule-title">Certificate on completion</div>
                    <div className="lm-rule-desc">Auto-generate and send certificate when learner completes</div>
                  </div>
                  <div className="lm-rule-control">
                    <div className={`lm-toggle-switch ${completionRules.certificate ? 'active' : ''}`} onClick={() => toggleRule('certificate')}></div>
                  </div>
                </div>

                <div className="lm-rule-row">
                  <div className="lm-rule-info">
                    <div className="lm-rule-title">Send reminder notifications</div>
                    <div className="lm-rule-desc">Notify learners before deadline</div>
                  </div>
                  <div className="lm-rule-control">
                    <div className={`lm-toggle-switch ${completionRules.reminders ? 'active' : ''}`} onClick={() => toggleRule('reminders')}></div>
                  </div>
                </div>

                <div className="lm-rule-row">
                  <div className="lm-rule-info">
                    <div className="lm-rule-title">Allow retakes</div>
                    <div className="lm-rule-desc">Learners can retake the quiz multiple times</div>
                  </div>
                  <div className="lm-rule-control">
                    <div className={`lm-toggle-switch ${completionRules.allowRetakes ? 'active' : ''}`} onClick={() => toggleRule('allowRetakes')}></div>
                  </div>
                </div>

                <div className="lm-form-group" style={{ marginTop: '24px' }}>
                  <label style={{ fontSize: '11px', fontWeight: '600', color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    REMINDER DAYS BEFORE DEADLINE
                  </label>
                  <input type="text" className="lm-input" value={completionRules.reminderDays} onChange={(e) => setCompletionRules({...completionRules, reminderDays: e.target.value})} style={{ width: '80px', marginTop: '8px', padding: '8px 12px' }} />
                </div>

                <div className="lm-form-footer" style={{ justifyContent: 'space-between', marginTop: '32px' }}>
                  <button className="btn-form-cancel" onClick={() => setWizardStep(3)}>
                    <FiArrowLeft size={16} /> Previous
                  </button>
                  <button className="btn-form-next" onClick={() => setWizardStep(5)}>
                    Next: Review & Publish <FiArrowRight size={16} />
                  </button>
                </div>
              </>
            )}

            {wizardStep === 5 && (
              <>
                <h2 className="lm-form-section-title">
                  <LuFileText className="lm-section-icon" />
                  Review & Publish
                </h2>

                <div className="lm-review-card">
                  <div className="lm-review-grid">
                    <div className="lm-review-column">
                      <div className="lm-review-header">COURSE DETAILS</div>
                      
                      <div className="lm-review-row">
                        <div className="lm-review-label">Title</div>
                        <div className="lm-review-value">React Advanced Patterns</div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Category</div>
                        <div className="lm-review-value">{courseCategory || 'Not specified'}</div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Difficulty</div>
                        <div className="lm-review-value"><span className="lm-badge-orange">Intermediate</span></div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Duration</div>
                        <div className="lm-review-value">12 hours</div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Deadline</div>
                        <div className="lm-review-value">Jun 30, 2026</div>
                      </div>
                    </div>

                    <div className="lm-review-column">
                      <div className="lm-review-header">ASSIGNMENT</div>
                      
                      <div className="lm-review-row">
                        <div className="lm-review-label">Assigned to</div>
                        <div className="lm-review-value">{employees.filter(e => e.selected).length} employees</div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Quiz required</div>
                        <div className="lm-review-value">
                          {completionRules.requireQuiz ? <span className="lm-badge-green">Yes</span> : <span className="lm-badge-orange" style={{ background: '#F1F5F9', color: '#64748B' }}>No</span>}
                        </div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Pass score</div>
                        <div className="lm-review-value">{completionRules.minScore}%</div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Certificate</div>
                        <div className="lm-review-value">
                          {completionRules.certificate ? <span className="lm-badge-green">Enabled</span> : <span className="lm-badge-orange" style={{ background: '#F1F5F9', color: '#64748B' }}>Disabled</span>}
                        </div>
                      </div>
                      <div className="lm-review-row">
                        <div className="lm-review-label">Reminders</div>
                        <div className="lm-review-value">{completionRules.reminderDays} days before</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lm-form-footer" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                  <button className="btn-form-cancel" onClick={() => setWizardStep(4)}>
                    <FiArrowLeft size={16} /> Previous
                  </button>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button className="btn-form-cancel" onClick={() => { setIsCreatingCourse(false); setWizardStep(1); }}>
                      Save as Draft
                    </button>
                    <button className="btn-form-next" onClick={() => { setIsCreatingCourse(false); setWizardStep(1); }}>
                      Publish Course
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="lm-modal-overlay">
          <div className="lm-modal">
            <div className="lm-modal-header">
              <h2>Edit Course</h2>
              <button className="lm-modal-close" onClick={() => setIsEditModalOpen(false)}>
                <FiX size={20} />
              </button>
            </div>
            
            <div className="lm-modal-tabs">
              <button 
                className={`lm-modal-tab ${editModalTab === 'Add Module' ? 'active' : ''}`}
                onClick={() => setEditModalTab('Add Module')}
              >
                Add Module
              </button>
              <button 
                className={`lm-modal-tab ${editModalTab === 'Create Quiz' ? 'active' : ''}`}
                onClick={() => setEditModalTab('Create Quiz')}
              >
                Create Quiz
              </button>
            </div>
            
            <div className="lm-modal-content">
              {editModalTab === 'Add Module' && (
                <div className="lm-form-group">
                  <label className="lm-form-label">MODULE TITLE</label>
                  <input type="text" className="lm-input" placeholder="e.g. Introduction to Hooks" />
                  
                  <label className="lm-form-label" style={{ marginTop: '20px' }}>CONTENT TYPE</label>
                  <div className="lm-content-type-toggle">
                    <button 
                      className={`type-btn ${editContentType === 'PDF' ? 'active' : ''}`}
                      onClick={() => setEditContentType('PDF')}
                    >
                      PDF
                    </button>
                    <button 
                      className={`type-btn ${editContentType === 'Video' ? 'active' : ''}`}
                      onClick={() => setEditContentType('Video')}
                    >
                      Video
                    </button>
                    <button 
                      className={`type-btn ${editContentType === 'Link' ? 'active' : ''}`}
                      onClick={() => setEditContentType('Link')}
                    >
                      Link
                    </button>
                  </div>
                  
                  {editContentType === 'PDF' && (
                    <>
                      <label className="lm-form-label" style={{ marginTop: '20px' }}>UPLOAD PDF</label>
                      <div className="lm-dropzone-blue">
                        <FiUpload size={24} className="lm-dropzone-icon" />
                        <div className="lm-dropzone-text">Drop PDF here or click to browse</div>
                        <div className="lm-dropzone-subtext">PDF up to 50MB</div>
                      </div>
                    </>
                  )}
                  {editContentType === 'Video' && (
                    <>
                      <label className="lm-form-label" style={{ marginTop: '20px' }}>UPLOAD VIDEO</label>
                      <div className="lm-dropzone-blue">
                        <FiYoutube size={24} className="lm-dropzone-icon" />
                        <div className="lm-dropzone-text">Drop MP4/MOV here or click to browse</div>
                        <div className="lm-dropzone-subtext">MP4, MOV up to 500MB</div>
                      </div>
                    </>
                  )}
                  {editContentType === 'Link' && (
                    <>
                      <label className="lm-form-label" style={{ marginTop: '20px' }}>EXTERNAL URL</label>
                      <input type="url" className="lm-input" placeholder="https://..." />
                      
                      <label className="lm-form-label" style={{ marginTop: '20px' }}>LINK LABEL (OPTIONAL)</label>
                      <input type="text" className="lm-input" placeholder="e.g. Watch on YouTube" />
                    </>
                  )}
                  
                  <label className="lm-form-label" style={{ marginTop: '20px' }}>MODULE DESCRIPTION (OPTIONAL)</label>
                  <textarea 
                    className="lm-input" 
                    placeholder="Brief summary of this module..."
                    rows="3"
                  ></textarea>
                </div>
              )}
              
              {editModalTab === 'Create Quiz' && (
                <div className="lm-form-group">
                  <label className="lm-form-label">QUIZ TITLE</label>
                  <input type="text" className="lm-input" placeholder="e.g. Module 1 Assessment" />
                  
                  <label className="lm-form-label" style={{ marginTop: '20px' }}>UPLOAD QUIZ (CSV)</label>
                  <div className="lm-dropzone-grey">
                    <LuFileText size={24} className="lm-dropzone-icon" />
                    <div className="lm-dropzone-text">Upload Questions CSV</div>
                    <div className="lm-dropzone-subtext">Format: question, optionA, optionB, optionC, optionD, correct</div>
                  </div>
                  
                  <div className="lm-form-row" style={{ marginTop: '20px' }}>
                    <div className="lm-form-col">
                      <label className="lm-form-label">PASSING SCORE (%)</label>
                      <input type="number" className="lm-input" defaultValue="70" />
                    </div>
                    <div className="lm-form-col">
                      <label className="lm-form-label">TIME LIMIT (MIN)</label>
                      <input type="number" className="lm-input" defaultValue="30" />
                    </div>
                  </div>
                  
                  <div className="lm-settings-row" style={{ marginTop: '24px' }}>
                    <div className="lm-settings-info">
                      <div className="lm-settings-title">Shuffle Questions</div>
                      <div className="lm-settings-desc">Randomise question order for each attempt</div>
                    </div>
                    <div 
                      className={`lm-toggle-switch ${shuffleQuestions ? 'active' : ''}`}
                      onClick={() => setShuffleQuestions(!shuffleQuestions)}
                    ></div>
                  </div>
                  
                  <div className="lm-settings-row">
                    <div className="lm-settings-info">
                      <div className="lm-settings-title">Allow Retakes</div>
                      <div className="lm-settings-desc">Learner can re-attempt if they fail</div>
                    </div>
                    <div 
                      className={`lm-toggle-switch ${allowRetakes ? 'active' : ''}`}
                      onClick={() => setAllowRetakes(!allowRetakes)}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="lm-modal-footer">
              <button className="btn-form-cancel" onClick={() => setIsEditModalOpen(false)}>Cancel</button>
              <button className="btn-form-next" onClick={() => setIsEditModalOpen(false)}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {isReminderModalOpen && (
        <div className="lm-modal-overlay">
          <div className="lm-modal" style={{ maxWidth: '480px' }}>
            <div className="lm-modal-header" style={{ borderBottom: 'none', paddingBottom: '0' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <LuMegaphone size={18} color="#2563EB" /> Send Reminder
              </h2>
              <button className="lm-modal-close" onClick={() => setIsReminderModalOpen(false)}>
                <FiX size={20} />
              </button>
            </div>
            
            <div className="lm-modal-content" style={{ padding: '24px 32px' }}>
              <div className="lm-reminder-hero">
                <div className="lm-reminder-icon-wrapper">
                  <LuBellRing size={32} color="#2563EB" />
                </div>
                <h3 className="lm-reminder-title">Push Notifications & Emails</h3>
                <p className="lm-reminder-desc">
                  You are about to send a reminder to learners who haven't completed this course yet.
                </p>
              </div>
              
              <div className="lm-form-group">
                <label className="lm-form-label">TARGET AUDIENCE</label>
                <input type="text" className="lm-input" defaultValue="All Incomplete Learners (14)" readOnly />
                
                <label className="lm-form-label" style={{ marginTop: '20px' }}>MESSAGE PREVIEW</label>
                <div className="lm-reminder-preview-box">
                  <p><strong>Subject:</strong> Course Reminder: React Advanced Patterns</p>
                  <p style={{ marginTop: '12px' }}>
                    Hi [Learner Name], this is a friendly reminder to complete your assigned course before the deadline (Jun 30, 2026).
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lm-modal-footer">
              <button className="btn-form-cancel" onClick={() => setIsReminderModalOpen(false)}>Cancel</button>
              <button className="btn-form-next" onClick={() => setIsReminderModalOpen(false)}>Send Now</button>
            </div>
          </div>
        </div>
      )}

      {isAssignModalOpen && (
        <div className="lm-modal-overlay">
          <div className="lm-modal" style={{ maxWidth: '600px' }}>
            <div className="lm-modal-header" style={{ borderBottom: '1px solid #F1F5F9' }}>
              <h2 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FiUsers size={18} color="#2563EB" /> Assign Course
              </h2>
              <button className="lm-modal-close" onClick={() => setIsAssignModalOpen(false)}>
                <FiX size={20} />
              </button>
            </div>
            
            <div className="lm-modal-content">
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '20px' }}>
                Choose who should be assigned this course:
              </p>
              
              <div className="lm-assign-cards">
                <div 
                  className={`lm-assign-card ${assignSelection === 'team' ? 'active' : ''}`}
                  onClick={() => setAssignSelection('team')}
                >
                  <LuBuilding size={24} color="#8B5CF6" className="lm-assign-card-icon" />
                  <div className="lm-assign-card-title">Project Team</div>
                  <div className="lm-assign-card-desc">Assign to a specific team</div>
                </div>
                <div 
                  className={`lm-assign-card ${assignSelection === 'specific' ? 'active' : ''}`}
                  onClick={() => setAssignSelection('specific')}
                >
                  <LuUser size={24} color="#8B5CF6" className="lm-assign-card-icon" />
                  <div className="lm-assign-card-title">Specific Employee</div>
                  <div className="lm-assign-card-desc">Pick employees manually</div>
                </div>
                <div 
                  className={`lm-assign-card ${assignSelection === 'entire' ? 'active' : ''}`}
                  onClick={() => setAssignSelection('entire')}
                >
                  <LuGlobe size={24} color="#2563EB" className="lm-assign-card-icon" />
                  <div className="lm-assign-card-title">Entire Company</div>
                  <div className="lm-assign-card-desc">Assign to all employees</div>
                </div>
              </div>
              
              <div className="lm-form-group" style={{ marginTop: '24px' }}>
                {assignSelection === 'team' && (
                  <div style={{ marginBottom: '24px' }}>
                    <label className="lm-form-label">SELECT TEAM</label>
                    <div style={{ position: 'relative' }}>
                      <select className="lm-input" style={{ appearance: 'none', cursor: 'pointer', color: '#1E293B' }}>
                        <option>— Choose a team —</option>
                        <option>Engineering</option>
                        <option>Design</option>
                        <option>Marketing</option>
                      </select>
                      <FiChevronDown size={18} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748B', pointerEvents: 'none' }} />
                    </div>
                  </div>
                )}
                
                {assignSelection === 'specific' && (
                  <div style={{ marginBottom: '24px' }}>
                    <label className="lm-form-label">SEARCH EMPLOYEES</label>
                    <div style={{ position: 'relative', marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
                      <FiSearch className="lm-search-input-icon" style={{ top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                      <input type="text" className="lm-input-with-icon" placeholder="Search by name or role..." />
                    </div>
                    
                    <div className="lm-employee-search-dropdown">
                      {employees.slice(0, 5).map(emp => (
                        <div key={emp.id} className="lm-employee-item">
                          <div className="lm-employee-info">
                            <div className="lm-employee-avatar" style={{ backgroundColor: emp.bg }}>{emp.initials}</div>
                            <span className="lm-employee-name">{emp.name}</span>
                          </div>
                          <button onClick={() => console.log("Button clicked!")} className="btn-add-employee">+ Add</button>
                        </div>
                      ))}
                    </div>
                    
                    <label className="lm-form-label" style={{ marginTop: '20px' }}>SELECTED EMPLOYEES</label>
                    <div className="lm-selected-employees-box lm-input"></div>
                  </div>
                )}
                
                {assignSelection === 'entire' && (
                  <div className="lm-assign-alert" style={{ marginBottom: '24px' }}>
                    <FiCheckCircle size={20} color="#059669" className="lm-assign-alert-icon" />
                    <div>
                      <div className="lm-assign-alert-title">Assign to All Employees</div>
                      <div className="lm-assign-alert-desc">This course will be assigned to every active employee in the company.</div>
                    </div>
                  </div>
                )}
                
                <label className="lm-form-label">DUE DATE</label>
                <div className="lm-date-input-wrapper">
                  <div className="lm-input" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#1E293B', fontSize: '14px' }}>dd - mm - yyyy</span>
                    <FiCalendar size={16} color="#1E293B" />
                  </div>
                  <input type="date" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%', height: '100%' }} />
                </div>
                
                <div className="lm-settings-row" style={{ marginTop: '24px', alignItems: 'flex-start', paddingBottom: '0', borderBottom: 'none' }}>
                  <div className="lm-settings-info">
                    <label className="lm-form-label" style={{ marginBottom: '8px' }}>SEND NOTIFICATION</label>
                    <div style={{ fontSize: '14px', color: '#1E293B', fontWeight: '500' }}>Notify employees via email</div>
                  </div>
                  <div 
                    className={`lm-toggle-switch ${notifyEmployees ? 'active' : ''}`}
                    onClick={() => setNotifyEmployees(!notifyEmployees)}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="lm-modal-footer">
              <button className="btn-form-cancel" onClick={() => setIsAssignModalOpen(false)}>Cancel</button>
              <button className="btn-form-next" onClick={() => setIsAssignModalOpen(false)}>
                <FiCheckCircle size={16} style={{ marginRight: '6px' }} /> Confirm Assignment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learning;
