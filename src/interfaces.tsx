export interface ClassInfo {
  class_id: number;
  class_code: string;
  class_section_number: number;
  name: string;
  students_instantiated: number;
  total_student_count: number;
}

export interface Classes {
  list: Array<ClassInfo>;
}

export interface ClassPageState {
  classInfo: ClassInfo;
  graphData: {
    success: GraphData;
    failure: GraphData;
    total: GraphData;
  };
  students: Student[];
}

export interface RecentLog {
  log_id: number;
  username: string;
  successful: string;
  student_id: number;
  timestamp: Date;
}

export interface LoginTotals {
  successful: number;
  failed: number;
}

export interface LogTableProps {
  logs: RecentLog[];
}

export interface Student {
  name: string;
  username: string;
  instantiated: boolean;
  last_sign_in: Date;
}

export interface Students {
  list: Array<Student>;
}

export interface GraphData {
  labels: Array<string>;
  datasets: Array<Dataset>;
}

export interface DayTotal {
  day: string;
  succesful: number;
  failed: number;
}

export interface Dataset {
  label: string;
  data: Array<number>;
  backgroundColor?: Array<string>;
  borderColor?: Array<string>;
  borderWidth?: number;
}
