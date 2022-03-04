import { Position } from "src/enums/Position";
import { DatePipe } from "@angular/common";

export interface Programmer {
  id: number;
  firstName: string;
  lastName: string;
  middleName?: string;
  position: Position;
  // dateOfBirth?: DatePipe;
  active: boolean;
}
