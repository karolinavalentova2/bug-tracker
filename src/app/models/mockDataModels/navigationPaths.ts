export const navPaths = [
  {
    title: 'Inbox',
    path: '/inbox',
    entries: null,
  },
  {
    title: 'Separator',
    path: null,
    entries: null,
  },
  {
    title: 'Projects',
    path: '/projects',
    entries: [
      {
        path: '/my-projects',
        name: 'My projects',
      },
      {
        path: '/active-projects',
        name: 'Active projects',
      },
      {
        path: '/completed-projects',
        name: 'Completed projects',
      },
      {
        path: '/add-new-project',
        name: 'Add new project',
      }
    ]
  },
  {
    title: 'Users',
    path: '/users',
    entries: [
      {
        path: '/all-users',
        name: 'All users',
      },
      {
        path: '/my-profile',
        name: 'My profile',
      },
      {
        path: '/add-new-user',
        name: 'Add new user',
      }
    ]
  },
  {
    title: 'Separator',
    path: null,
    entries: null,
  },
  {
    title: 'Settings',
    path: '/settings',
    entries: null,
  }
];
