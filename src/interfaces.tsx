export interface ClassInfo {
  name: string;
  days: string;
  startTime: Date;
  endTime: Date;
  students: number;
}

export interface Classes {
  list: Array<ClassInfo>;
}
