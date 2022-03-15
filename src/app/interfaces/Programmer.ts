import { Position } from "src/app/enums/Position";

export interface Programmer {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  position: string;
  dateOfBirth?: string;
  active: boolean;
}
