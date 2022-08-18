/* eslint-disable @typescript-eslint/naming-convention */
import { Register } from './register';
import { Rol } from './rol';
import { User } from './user';

export class Profile {
  id: number;
  fkuser: number;
  user: User;
  fkrol: number;
  rol: Rol;
  status: string;
  register_taqui: Array<Register[]>;

  constructor(){}

  setdata(data){
    this.id = data.id;
    this.fkuser = data.fkuser;
    this.user = new User();
    this.user.setdata(data.cargo);
    this.fkrol = data.rol;
    this.rol = new Rol();
    this.rol.setdata(data.cargo);
    this.status = data.status;
    this.register_taqui = data.register_taqui;
  }
}
