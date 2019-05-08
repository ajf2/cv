import { EmploymentRecord } from '../employment-record/employment-record';

export interface CV {
  name: string;
  nameSuffix: string;
  jobTitle: string;
  softSkills: string[];
  techSkills: string[];
  employmentHistory: EmploymentRecord[];
  personalSummary: string;
}
