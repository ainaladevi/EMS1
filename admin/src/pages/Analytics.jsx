import React, { useState } from 'react';
import { 
  FiGrid, FiClock, FiActivity, FiRefreshCw, FiPieChart,
  FiCalendar, FiCheckSquare, FiUser, FiCheck,
  FiXCircle, FiFileText, FiInfo, FiAlertCircle,
  FiTrendingUp
} from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import './Analytics.css';

const barData = [
  { name: 'W1', Present: 20, Absent: 3 },
  { name: 'W2', Present: 18, Absent: 4 },
  { name: 'W3', Present: 22, Absent: 2 },
  { name: 'W4', Present: 19, Absent: 4 },
  { name: 'W5', Present: 21, Absent: 2 },
];

const pieData = [
  { name: 'Present', value: 75 },
  { name: 'Absent', value: 10 },
  { name: 'Late', value: 15 },
];
const pieColors = ['#2563EB', '#DC2626', '#D97706']; // Matching the exact screenshot colors where possible

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('Attendance'); // Start on Attendance for easier verification

  return (
    <div className="analytics-page">
      <div className="analytics-header">
        <div className="breadcrumb">Dashboard &gt; <span className="breadcrumb-active">Analytics</span></div>
        <h1 className="page-title">Analytics & Reports</h1>
        <p className="page-subtitle">Comprehensive insights and performance metrics</p>
      </div>

      <div className="analytics-tabs-container">
        <button 
          className={`analytics-tab ${activeTab === 'Dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('Dashboard')}
        >
          <FiGrid size={14} /> Dashboard
        </button>
        <button 
          className={`analytics-tab ${activeTab === 'Attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('Attendance')}
        >
          <FiClock size={14} /> Attendance
        </button>
        <button 
          className={`analytics-tab ${activeTab === 'Productivity' ? 'active' : ''}`}
          onClick={() => setActiveTab('Productivity')}
        >
          <FiActivity size={14} /> Productivity
        </button>
      </div>

      {activeTab === 'Dashboard' && (
        <>
          <div className="analytics-card">
            <div className="ac-header">
              <div className="ac-title"><FiGrid size={16} /> Overview Dashboard</div>
              <button onClick={() => alert("Button clicked!")} className="ac-btn-refresh"><FiRefreshCw size={14} /> Refresh</button>
            </div>

            <div className="ac-section">
              <h3 className="ac-section-title"><FiCalendar size={14} /> Today's Attendance</h3>
              <div className="ac-stats-grid">
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-blue"><FiUser size={16} /></div>
                  <div className="ac-stat-label">TOTAL</div>
                  <div className="ac-stat-value">0</div>
                </div>
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-green"><FiCheck size={16} /></div>
                  <div className="ac-stat-label">PRESENT</div>
                  <div className="ac-stat-value">0</div>
                </div>
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-yellow"><FiClock size={16} /></div>
                  <div className="ac-stat-label">LATE</div>
                  <div className="ac-stat-value">0</div>
                </div>
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-red"><FiXCircle size={16} /></div>
                  <div className="ac-stat-label">ABSENT</div>
                  <div className="ac-stat-value">0</div>
                </div>
              </div>
            </div>

            <div className="ac-section" style={{ marginTop: '32px' }}>
              <h3 className="ac-section-title"><FiCheckSquare size={14} /> Monthly Tasks Overview</h3>
              <div className="ac-stats-grid">
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-blue"><FiFileText size={16} /></div>
                  <div className="ac-stat-label">TOTAL TASKS</div>
                  <div className="ac-stat-value">5</div>
                </div>
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-green"><FiCheck size={16} /></div>
                  <div className="ac-stat-label">COMPLETED</div>
                  <div className="ac-stat-value">3</div>
                </div>
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-yellow"><FiInfo size={16} /></div>
                  <div className="ac-stat-label">PENDING</div>
                  <div className="ac-stat-value">1</div>
                </div>
                <div className="ac-stat-box">
                  <div className="ac-stat-icon icon-red"><FiAlertCircle size={16} /></div>
                  <div className="ac-stat-label">OVERDUE</div>
                  <div className="ac-stat-value">0</div>
                </div>
              </div>
            </div>
          </div>

          <div className="dept-perf-container">
            <h3 className="dept-perf-title">Department Performance</h3>
            <div className="dept-table-wrapper">
              <table className="dept-table">
                <thead>
                  <tr>
                    <th width="25%">DEPARTMENT</th>
                    <th width="15%">EMPLOYEES</th>
                    <th width="25%">ATTENDANCE RATE</th>
                    <th width="25%">TASK COMPLETION</th>
                    <th width="10%">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="fw-600">Backend Development</td>
                    <td>5</td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-green" style={{width: '78%'}}></div></div>
                        <span className="prog-text text-green">78%</span>
                      </div>
                    </td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-blue" style={{width: '62%'}}></div></div>
                        <span className="prog-text text-blue">62%</span>
                      </div>
                    </td>
                    <td><span className="status-dot bg-green"></span></td>
                  </tr>
                  <tr>
                    <td className="fw-600">Engineering</td>
                    <td>4</td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-green" style={{width: '91%'}}></div></div>
                        <span className="prog-text text-green">91%</span>
                      </div>
                    </td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-orange" style={{width: '45%'}}></div></div>
                        <span className="prog-text text-orange">45%</span>
                      </div>
                    </td>
                    <td><span className="status-dot bg-orange"></span></td>
                  </tr>
                  <tr>
                    <td className="fw-600">Design</td>
                    <td>3</td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-green" style={{width: '100%'}}></div></div>
                        <span className="prog-text text-green">100%</span>
                      </div>
                    </td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-green" style={{width: '80%'}}></div></div>
                        <span className="prog-text text-green">80%</span>
                      </div>
                    </td>
                    <td><span className="status-dot bg-green"></span></td>
                  </tr>
                  <tr>
                    <td className="fw-600">QA Testing</td>
                    <td>2</td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-grey" style={{width: '0%'}}></div></div>
                        <span className="prog-text text-red">0%</span>
                      </div>
                    </td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-grey" style={{width: '0%'}}></div></div>
                        <span className="prog-text text-red">0%</span>
                      </div>
                    </td>
                    <td><span className="status-dot bg-red"></span></td>
                  </tr>
                  <tr>
                    <td className="fw-600">HR</td>
                    <td>2</td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-orange" style={{width: '50%'}}></div></div>
                        <span className="prog-text text-orange">50%</span>
                      </div>
                    </td>
                    <td>
                      <div className="prog-cell">
                        <div className="prog-track"><div className="prog-fill bg-red" style={{width: '33%'}}></div></div>
                        <span className="prog-text text-red">33%</span>
                      </div>
                    </td>
                    <td><span className="status-dot bg-red"></span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {activeTab === 'Attendance' && (
        <div className="attendance-view">
          <div className="attendance-header">
            <h2 className="attendance-title"><FiClock size={16} /> Attendance Analytics</h2>
          </div>

          <div className="attendance-filters">
            <div className="filter-group">
              <button onClick={() => alert("Button clicked!")} className="filter-btn">Last 7 Days</button>
              <button onClick={() => alert("Button clicked!")} className="filter-btn">Last 30 Days</button>
              <button onClick={() => alert("Button clicked!")} className="filter-btn">This Month</button>
              <button onClick={() => alert("Button clicked!")} className="filter-btn active">Last Month</button>
            </div>
            
            <div className="date-pickers-group">
              <div className="date-field">
                <div className="date-label">
                  <span>Start</span>
                  <span>Date</span>
                </div>
                <div className="date-input-wrapper">
                  <input type="text" defaultValue="31 - 12 - 2025" />
                  <FiCalendar className="date-icon" />
                </div>
              </div>
              <div className="date-field">
                <div className="date-label">
                  <span>End</span>
                  <span>Date</span>
                </div>
                <div className="date-input-wrapper">
                  <input type="text" defaultValue="30 - 01 - 2026" />
                  <FiCalendar className="date-icon" />
                </div>
              </div>
            </div>

            <button onClick={() => alert("Button clicked!")} className="btn-load-analytics"><FiClock size={14} /> Load Analytics</button>
          </div>

          <div className="info-alert">
            <FiClock size={14} /> Period: 2025-12-31 to 2026-01-30
          </div>

          <div className="att-stats-grid">
            <div className="att-stat-card">
              <div className="att-stat-icon icon-purple"><FiTrendingUp size={16} /></div>
              <div className="att-stat-label">ATTENDANCE RATE</div>
              <div className="att-stat-value">89.7%</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-teal"><FiClock size={16} /></div>
              <div className="att-stat-label">PUNCTUALITY RATE</div>
              <div className="att-stat-value">12.5%</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-orange-light"><FiCalendar size={16} /></div>
              <div className="att-stat-label">AVG DAILY HOURS</div>
              <div className="att-stat-value">7.8</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-blue"><FiClock size={16} /></div>
              <div className="att-stat-label">TOTAL OVERTIME</div>
              <div className="att-stat-value">12.5</div>
            </div>
          </div>

          <div className="att-charts-grid">
            <div className="att-chart-card">
              <div className="chart-header">
                <div className="chart-header-left">
                  <h3 className="chart-title">Monthly Attendance Trend</h3>
                  <p className="chart-subtitle">Present vs Absent over selected period</p>
                </div>
                <div className="custom-legend">
                  <div className="legend-item">
                    <span className="legend-color legend-blue"></span> Present
                  </div>
                  <div className="legend-item">
                    <span className="legend-color legend-red-outline"></span> Absent
                  </div>
                </div>
              </div>
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} margin={{ top: 20, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8' }} dy={10} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#94A3B8' }} />
                    <Tooltip cursor={{fill: '#F8FAFC'}} />
                    <Bar dataKey="Present" fill="#2563EB" radius={[2, 2, 0, 0]} barSize={20} />
                    <Bar dataKey="Absent" fill="#FEF2F2" stroke="#EF4444" strokeWidth={1} radius={[2, 2, 0, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="att-chart-card">
              <div className="chart-header">
                <div className="chart-header-left">
                  <h3 className="chart-title">Attendance Breakdown</h3>
                  <p className="chart-subtitle">Distribution by status</p>
                </div>
              </div>
              <div className="chart-container flex-col-center">
                <div style={{ width: '100%', height: '180px' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="custom-legend center-legend">
                  <div className="legend-item">
                    <span className="legend-color legend-blue"></span> Present
                  </div>
                  <div className="legend-item">
                    <span className="legend-color legend-red"></span> Absent
                  </div>
                  <div className="legend-item">
                    <span className="legend-color legend-orange"></span> Late
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Productivity' && (
        <div className="attendance-view">
          <div className="attendance-header">
            <h2 className="attendance-title"><FiActivity size={16} /> Productivity Analytics</h2>
          </div>

          <div className="attendance-filters">
            <div className="filter-group">
              <button onClick={() => alert("Button clicked!")} className="filter-btn">Last 7 Days</button>
              <button onClick={() => alert("Button clicked!")} className="filter-btn">Last 30 Days</button>
              <button onClick={() => alert("Button clicked!")} className="filter-btn">This Month</button>
              <button onClick={() => alert("Button clicked!")} className="filter-btn active">Last Month</button>
            </div>
            
            <div className="date-pickers-group">
              <div className="date-field">
                <label className="date-label">Start Date</label>
                <div className="date-input-wrapper">
                  <input type="text" defaultValue="31 - 12 - 2025" />
                  <FiCalendar className="date-icon" />
                </div>
              </div>
              <div className="date-field">
                <label className="date-label">End Date</label>
                <div className="date-input-wrapper">
                  <input type="text" defaultValue="30 - 01 - 2026" />
                  <FiCalendar className="date-icon" />
                </div>
              </div>
            </div>

            <button onClick={() => alert("Button clicked!")} className="btn-load-analytics"><FiClock size={14} /> Load Productivity</button>
          </div>

          <div className="info-alert">
            <FiClock size={14} /> Period: 2025-12-31 to 2026-01-30 | Department: Backend Development
          </div>

          <div className="prod-stats-grid">
            <div className="att-stat-card">
              <div className="att-stat-icon icon-blue"><FiFileText size={16} /></div>
              <div className="att-stat-label">TOTAL TASKS</div>
              <div className="att-stat-value">1</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-green"><FiCheck size={16} /></div>
              <div className="att-stat-label">COMPLETED</div>
              <div className="att-stat-value">3</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-cyan"><FiPieChart size={16} /></div>
              <div className="att-stat-label">IN PROGRESS</div>
              <div className="att-stat-value">0</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-yellow"><FiInfo size={16} /></div>
              <div className="att-stat-label">PENDING</div>
              <div className="att-stat-value">4</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-red"><FiAlertCircle size={16} /></div>
              <div className="att-stat-label">OVERDUE</div>
              <div className="att-stat-value">3</div>
            </div>
            <div className="att-stat-card">
              <div className="att-stat-icon icon-purple"><FiTrendingUp size={16} /></div>
              <div className="att-stat-label">COMPLETION RATE</div>
              <div className="att-stat-value">100%</div>
            </div>
          </div>

          <div className="prod-card">
            <h3 className="card-title-bold">Priority Distribution</h3>
            
            <div className="priority-row">
              <div className="priority-header">
                <span className="priority-pill pill-medium">MEDIUM</span>
                <div className="priority-stats">
                  <span className="stat-pct">100.0%</span>
                  <span className="stat-tot">Total: 1</span>
                  <span className="text-green-bold stat-done">Done: 1</span>
                </div>
              </div>
              <div className="prog-track"><div className="prog-fill bg-orange" style={{width: '100%'}}></div></div>
            </div>

            <div className="priority-row">
              <div className="priority-header">
                <span className="priority-pill pill-high">HIGH</span>
                <div className="priority-stats">
                  <span className="stat-pct">0.0%</span>
                  <span className="stat-tot">Total: 0</span>
                  <span className="text-gray-bold stat-done">Done: 0</span>
                </div>
              </div>
              <div className="prog-track"><div className="prog-fill bg-red" style={{width: '0%'}}></div></div>
            </div>

            <div className="priority-row">
              <div className="priority-header">
                <span className="priority-pill pill-low">LOW</span>
                <div className="priority-stats">
                  <span className="stat-pct">0.0%</span>
                  <span className="stat-tot">Total: 0</span>
                  <span className="text-gray-bold stat-done">Done: 0</span>
                </div>
              </div>
              <div className="prog-track"><div className="prog-fill bg-green" style={{width: '0%'}}></div></div>
            </div>
          </div>

          <div className="prod-card" style={{ marginTop: '24px' }}>
            <h3 className="card-title-bold">Top Performers</h3>
            <table className="performers-table">
              <thead>
                <tr>
                  <th width="15%">RANK</th>
                  <th width="35%">NAME</th>
                  <th width="30%">EMAIL</th>
                  <th width="20%" style={{ textAlign: 'right' }}>COMPLETED TASKS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="rank-pill">#1</span></td>
                  <td className="fw-600 text-dark">Emp Test</td>
                  <td className="text-gray">employee@example.com</td>
                  <td style={{ textAlign: 'right' }}><span className="task-pill">1 task</span></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      )}
    </div>
  );
};

export default Analytics;
