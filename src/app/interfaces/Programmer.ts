import { Position } from "src/app/enums/Position";

export interface Programmer {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  position: string;
  dateOfBirth?: string;
  active: boolean;
}
