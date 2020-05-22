export const mocktableData = [
  {
    managedBy: [
      {
        name: 'John Doe',
        phone: '+45 112233',
        email: 'johndoe@gmail.com',
        imageUrl: '',
        department: 'project management',
      },
      {
        name: 'Peter Griffin',
        phone: '+45 123456',
        email: 'petergriffin@gmail.wd.com',
        imageUrl: '',
        department: 'project management',
      },
      {
        name: 'Homer Simpson',
        phone: '+45 654321',
        email: 'homersimpson@gmail.wd.com',
        imageUrl: '',
        department: 'project management',
      },
    ]
  },
  {
    id: [
      '65',
      '285',
      '14',
    ]
  },
  {
    title: [
      'WD Track V3',
      'growcarrots.dk',
      'PMI Iqos - e-shop',
    ]
  },
  {
    users: [
      {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    ]
  },
  {
    status: [
      ''
    ]
  }
];

export class User {
  id: number;
  projects?: Array<Project>;
  firstName: string;
  lastName: string;
  middleName?: string;
  fullName: string;
  phone?: number;
  email: string;
  country?: string;
  imageUrl?: string;
  department: string;
}

export class Project {
  id: number;
  link: string;
  name: string;
  created: Date;
  issues?: Array<Issue>;
  managedBy: string;
  users?: Array<User>;
  status: boolean;
}

export class Issue {
  id: number;
  name: string;
  created: Date;
  status: string;
}

export const mocktableProject = [
  {
    id: 65,
    link: 'www.wdtrack.wiredelta.com',
    name: 'WD Track V3',
    created: new Date(),
    issues: [
      {
        id: 7,
        name: 'Youtube link does not work',
        created: new Date(),
        status: 'pending',
      }
    ],
    managedBy: 'John Doe',
    users: [
      {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    ],
    status: true,
  },
  {
    id: 186,
    link: 'growcarrots.dk',
    name: 'growcarrots.dk',
    created: new Date(),
    issues: [
      {
        id: 3,
        name: 'Error 404',
        created: new Date(),
        status: 'active',
      },
      {
        id: 2,
        name: 'Preloader broken animation',
        created: new Date(),
        status: 'pending',
      },
      {
        id: 1,
        name: 'Does not communicate with database',
        created: new Date(),
        status: 'closed',
      }
    ],
    managedBy: 'Peter Griffin',
    users: [
      {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    ],
    status: true,
  },
  {
    id: 186,
    link: 'www.pmiiqos/shop.dk',
    name: 'PMI Iqos - e-shop',
    created: new Date(),
    issues: [
      {
        id: 6,
        name: 'Error 404',
        created: new Date(),
        status: 'active',
      },
      {
        id: 11,
        name: 'Preloader broken animation',
        created: new Date(),
        status: 'pending',
      },
      {
        id: 9,
        name: 'Does not communicate with database',
        created: new Date(),
        status: 'closed',
      },
      {
        id: 10,
        name: 'Header is too on top',
        created: new Date(),
        status: 'closed',
      }
    ],
    managedBy: 'Peter Griffin',
    users: [
      {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
      {
        name: 'Bender Black',
        phone: '+45 607203',
        email: 'benderfuture@gmail.wd.dk',
        imageUrl: '',
        department: 'client',
      },
    ],
    status: true,
  }
];
