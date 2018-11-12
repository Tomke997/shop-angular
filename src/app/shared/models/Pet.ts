import {Owner} from './Owner';
import DateTimeFormat = Intl.DateTimeFormat;

export class Pet {
  id?: number;
  name: string;
  type: string;
  birthdate: Date;
  soldDate: Date;
  color: string;
  previousOwner?: Owner[];
  price: number;
}
