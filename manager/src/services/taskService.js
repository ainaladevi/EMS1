class TaskService {
  async getTaskPageData() {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: {
            kpis: {
              active: { count: 12, label: 'Assigned this sprint' },
              completed: { count: 5, label: '41% completion rate' },
              inProgress: { count: 5, label: 'Due this week' },
              overdue: { count: 2, label: 'Needs immediate action' }
            },
            list: [
              {
                id: 1,
                title: 'Frontend bug',
                type: 'BUG',
                date: '17/4/2026',
                assignee: 'Anil Rachuri',
                sourceControl: 'github',
                repo: 'github.com/pegorion/frontend-ui',
                prLink: 'pull/34: Add fix for alignment',
                prStatus: 'passing',
                branch: 'fix/header-alignment',
                commit: 'b4f7a2d',
                actionsStatus: 'Passing',
                badges: ['TODO', 'MEDIUM'],
                buildPipeline: 'Passed'
              },
              {
                id: 2,
                title: 'frontend Bug',
                type: 'ABCD',
                date: '31/3/2026',
                assignee: 'admin company',
                sourceControl: 'bitbucket',
                repo: 'bitbucket.org/pegorion/backend-services',
                prLink: 'projects/PEG/repos/backend/pull-requests/21...',
                prStatus: null,
                branch: 'refactor/endpoint-names',
                commit: 'a7c1b2d',
                actionsStatus: 'FAILED',
                badges: ['COMPLETED', 'MEDIUM'],
                buildPipeline: 'Failed',
                stages: 'Build (Passed) → Staging (Depl) → Production (Pend)'
              },
              {
                id: 3,
                title: 'frontend Bug',
                type: 'ABCD',
                date: '31/3/2026',
                assignee: 'admin company',
                sourceControl: 'bitbucket',
                repo: 'bitbucket.org/pegorion/backend-services',
                prLink: 'projects/PEG/repos/backend/pull-requests/21...',
                prStatus: null,
                branch: 'refactor/endpoint-names',
                commit: 'a7c1b2d',
                actionsStatus: 'FAILED',
                badges: ['COMPLETED', 'MEDIUM'],
                buildPipeline: 'Failed',
                stages: 'Build (Passed) → Staging (Depl) → Production (Pend)'
              }
            ]
          }
        });
      }, 300);
    });
  }
}

const taskService = new TaskService();
export default taskService;
