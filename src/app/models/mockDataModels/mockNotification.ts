import {NotificationEntry} from '../mockDataTypes';

export const mockNotification: NotificationEntry[] = [
  {
    type: 'newProject',
    date: new Date(),
    sender:
      {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development',
      },
    description: 'Created new project',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'assignedToProject',
    date: new Date(),
    sender:
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
    description: 'You have been assigned as',
    position: 'Developer',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'assignedToIssue',
    date: new Date(),
    sender:
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'You have been assigned as',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Video does not work',
        id: 17,
      },
  },
  {
    type: 'newIssue',
    date: new Date(),
    sender:
      {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'Created new issue',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Video does not work',
        id: 17,
      },
  },
  {
    type: 'deletedIssue',
    date: new Date(),
    sender:
      {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'Deleted an issue',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Tooltip does not show email',
        id: 17,
      },
  },
  {
    type: 'deletedProject',
    date: new Date(),
    sender:
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'Deleted project',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'newProject',
    date: new Date(),
    sender:
      {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development',
      },
    description: 'Created new project',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'assignedToProject',
    date: new Date(),
    sender:
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
    description: 'You have been assigned as',
    position: 'Developer',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'deletedIssue',
    date: new Date(),
    sender:
      {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'Deleted an issue',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Tooltip does not show email',
        id: 17,
      },
  },
  {
    type: 'assignedToIssue',
    date: new Date(),
    sender:
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'You have been assigned as',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Video does not work',
        id: 17,
      },
  },
  {
    type: 'newProject',
    date: new Date(),
    sender:
      {
        name: 'Bart Simpson',
        phone: '+45 117233',
        email: 'bartsimpson@gmail.com',
        imageUrl: '',
        department: 'development',
      },
    description: 'Created new project',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'assignedToProject',
    date: new Date(),
    sender:
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
    description: 'You have been assigned as',
    position: 'Developer',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'assignedToIssue',
    date: new Date(),
    sender:
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'You have been assigned as',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Video does not work',
        id: 17,
      },
  },
  {
    type: 'assignedToProject',
    date: new Date(),
    sender:
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
    description: 'You have been assigned as',
    position: 'Developer',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'deletedIssue',
    date: new Date(),
    sender:
      {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'Deleted an issue',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Tooltip does not show email',
        id: 17,
      },
  },
  {
    type: 'assignedToIssue',
    date: new Date(),
    sender:
      {
        name: 'Lisa Simpson',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'You have been assigned as',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Video does not work',
        id: 17,
      },
  },
  {
    type: 'assignedToProject',
    date: new Date(),
    sender:
      {
        name: 'Meggie Simpson',
        phone: '+45 117923',
        email: 'meggiesimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'development',
      },
    description: 'You have been assigned as',
    position: 'Developer',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
  },
  {
    type: 'deletedIssue',
    date: new Date(),
    sender:
      {
        name: 'John Black',
        phone: '+45 607923',
        email: 'lisasimpson@gmail.wd.dk',
        imageUrl: '',
        department: 'project management',
      },
    description: 'Deleted an issue',
    position: 'Project manager',
    project:
      {
        name: 'TimerV3',
        id: 33,
      },
    issue:
      {
        name: 'Tooltip does not show email',
        id: 17,
      },
  },
];
