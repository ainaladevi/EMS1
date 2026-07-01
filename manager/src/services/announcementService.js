import apiClient from './apiClient';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const announcementService = {
  getAnnouncementsPageData: async () => {
    await delay(500);
    return {
      data: {
        metrics: {
          total: 10,
          unread: 4,
          systemAlerts: 2,
          pendingAction: 1
        },
        list: [
          {
            id: 0,
            title: 'Leave Request – Sun',
            description: "I've applied for 3 days of annual leave from Apr 22-24.",
            message: "Hi Sir,\n\nI've applied for 3 days of annual leave from Apr 22-24. I'll ensure my work is managed and handed over properly during this time.\n\nKindly review and approve the request.\n\nThanks,\nRegards,\nSun",
            author: 'Sun',
            expires: 'N/A',
            type: 'leave',
            read: false,
            actionRequired: true
          },
          {
            id: 1,
            title: 'URGENT: Security Update Required',
            description: 'Please update your passwords and enable 2FA by end of day 2',
            message: 'Please ensure you update your passwords immediately. The new security policy requires 2FA to be enabled on all manager accounts by the end of day 2.\n\nFailure to comply may result in temporary account suspension.\n\nThanks,\nAdmin',
            author: 'Admin',
            expires: '10/20/2025',
            type: 'urgent',
            read: false,
            actionRequired: true
          },
          {
            id: 2,
            title: 'New Project Launch',
            description: 'We are excited to announce the launch of Project Phoenix next month.',
            author: 'Product Team',
            expires: '11/3/2025',
            type: 'info',
            read: true,
            actionRequired: false
          },
          {
            id: 3,
            title: 'Team Building Event',
            description: 'Join us for a team building event this Friday at 4 PM.',
            author: 'HR Dept',
            expires: '10/24/2025',
            type: 'event',
            read: true,
            actionRequired: false
          },
          {
            id: 4,
            title: 'Company Holiday - New Year 2026',
            description: 'Office will be closed on January 1st, 2026 for New Year celebrations.',
            author: 'HR Dept',
            expires: '11/18/2025',
            type: 'event',
            read: true,
            actionRequired: false
          }
        ]
      }
    };
  }
};

export default announcementService;
