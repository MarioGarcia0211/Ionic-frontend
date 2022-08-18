import { Profile } from './profile';
import { Register } from './register';

export class User {
  id: number;
  name: string;
  lastname: string;
  identification: number;
  email: string;
  password: string;
  status: string;


  constructor(){}

  setdata(data){
    this.id = data.id;
    this.name = data.name;
    this.lastname = data.lastname;
    this.identification = data.identification;
    this.email = data.email;
    this.password = data.password;
    this.status = data.status;
  }
}
