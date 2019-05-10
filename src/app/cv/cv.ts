import { EmploymentRecord } from '../employment-record/employment-record';

export interface CV {
  name: string;
  nameSuffix: string;
  jobTitle: string;
  telephone: string;
  email: string;
  githubLink: string;
  skills: string[];
  tech: string[];
  employmentHistory: EmploymentRecord[];
  personalSummary: string;
}
