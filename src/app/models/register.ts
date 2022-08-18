import { Profile } from './profile';

export class Register {
  id: number;
  date: string;
  amount: number;
  fkprofiletaqui: number;
  fkprofileturis: number;
  status: string;
  profiletaqui: Profile;
  profileturis: Profile;

  constructor(){}

  setdata(data){
    this.id = data.id;
    this.date = data.date;
    this.amount = data.amount;
    this.fkprofiletaqui = data.fkprofiletaqui;
    this.fkprofileturis = data.fkprofileturis;
    this.status = data.status;
    this.profiletaqui = new Profile();
    this.profiletaqui.setdata(data.profiletaqui);
    this.profileturis = new Profile();
    this.profileturis.setdata(data.profileturis);
  }
}
