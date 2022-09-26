export interface ClassInfo {
  id: number;
  name: string;
  days: string;
  startTime: Date;
  endTime: Date;
  students: number;
}

export interface Classes {
  list: Array<ClassInfo>;
}

export interface Student {
  id: number;
  name: string;
  uName: string;
  instantiated: boolean;
  lastActivity: Date;
}

export interface Students {
  list: Array<Student>;
}
