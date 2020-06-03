export class User {
  id?: number;
  projects?: Array<Project>;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  name: string;
  phone?: number | string;
  email: string;
  country?: string;
  imageUrl?: string;
  department: string;
}

export class Departments {
  name: Array<string>;
}

export class Project {
  recentEdit: boolean;
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

export class NotificationEntry {
  type: string;
  date: Date;
  sender: User;
  description: string;
  project?: {
    name: string;
    id: number;
  };
  issue?: {
    name: string;
    id: number;
  };
  position?: string;
  isConfirmed?: boolean;
}

export class BreadcrumbData {
  name: string;
  path: string;
}

export class FilterEntry {
  name: string;
  property: string;
  value: any;
  isDefaultSelected?: boolean;
}

export class FilterConfig {
  prop: string;
  value: any;
}
