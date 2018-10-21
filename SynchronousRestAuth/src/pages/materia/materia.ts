import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers';
/**
 * Generated class for the MateriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-materia',
  templateUrl: 'materia.html',
})
export class MateriaPage {

    nombre:string = " ";
    codigo:string = " ";
    profesor:string = " ";
    creditos:number = 0;
    descripcion:string = " ";
    starTime:string = " ";
    endTime:string = " ";

  constructor(public navCtrl: NavController,public user: User, public navParams: NavParams) {
  
  }
  account: { email: string, password: string } = {
    email: 'test@example.com',
    password: 'test'
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad MateriaPage');
  }
  agregar(){
    console.log(this.codigo);
    this.navCtrl.push('PrincipalPage');

  }
  doLogout() {
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push('LoginPage');
    }, (err) => {
      this.navCtrl.push('LoginPage');
    });
  }

}
