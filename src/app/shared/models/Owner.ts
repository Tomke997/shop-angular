import {Pet} from './Pet';

export class Owner {
  id?: number;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: number;
  pet?: Pet;
}
