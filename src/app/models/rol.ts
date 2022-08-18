export class Rol {
  id: number;
  rol: string;
  status: string;

  constructor(){}

  setdata(data){
    this.id = data.id;
    this.rol = data.rol;
    this.status = data.status;
  }
}
