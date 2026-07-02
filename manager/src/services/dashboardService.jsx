import apiClient from './apiClient';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const dashboardService = {
  getOverview: async () => {
    await delay(500);
    return {
      data: {
        attendance: {
          present: 10,
          attendanceRate: 83,
          absent: 1,
          unexcused: 1,
          lateArrivals: 2,
          lateAfter: '9:30 AM',
          workFromHome: 1,
        },
        tasks: {
          assigned: 48,
          assignedAcross: 12,
          completed: 31,
          completionRate: 64.5,
          inProgress: 12,
          nearDeadline: 5,
        },
        announcements: [
          {
            id: 1,
            title: 'URGENT: Security Update Required',
            description: 'Please update your passwords and enable 2FA by end of day 2',
            author: 'Admin',
            expires: '10/20/2025',
            timeAgo: '10 min ago',
            type: 'urgent',
            read: false,
          },
          {
            id: 2,
            title: 'New Project Launch',
            description: 'We are excited to announce the launch of Project Phoenix next month.',
            author: 'Product Team',
            expires: '11/3/2025',
            timeAgo: '10 min ago',
            type: 'info',
            read: false,
          },
          {
            id: 3,
            title: 'Team Building Event',
            description: 'Join us for a team building event this Friday at 4 PM.',
            author: 'HR Dept',
            expires: '10/24/2025',
            timeAgo: '10 min ago',
            type: 'event',
            read: true,
          },
          {
            id: 4,
            title: 'Company Holiday - New Year 2026',
            description: 'Office will be closed on January 1st, 2026 for New Year celebrations.',
            author: 'HR Dept',
            expires: '11/18/2025',
            timeAgo: '10 min ago',
            type: 'event',
            read: true,
          },
        ]
      }
    };
  },
};

export default dashboardService;
