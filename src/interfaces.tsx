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

export interface ActivityPageState {
  graphData: {
    total: GraphData;
  };
}

export interface RecentLog {
  log_id: number;
  username: string;
  successful: string;
  student_id: number;
  timestamp: Date;
}

export interface Activity {
  log_id: number;
  name: string;
  username: string;
  successful: string;
  student_id: number;
  timestamp: Date;
}

export interface ActivityLogTableProps {
  logs: Activity[];
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
  successful: number;
  failed: number;
}

export interface ClassLogins {
  classSection: string;
  days: DayTotal[];
}

export interface Dataset {
  label: string;
  data: Array<number>;
  backgroundColor?: Array<string>;
  borderColor?: Array<string>;
  borderWidth?: number;
}

export interface NotificationInfo {
  id: number;
  username: string;
  date: Date;
  failed_count: number;
  read_flag: string;
}

export interface FeedbackInfo {
  id: number;
  name: string;
  feedback: number;
  timestamp: Date;
}
