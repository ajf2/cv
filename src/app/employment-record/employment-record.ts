import { EmploymentExperience } from '../employment-experience/employment-experience';

export interface EmploymentRecord {
  employerName: string;
  era: string;
  website: string;
  experiences: EmploymentExperience[];
}
