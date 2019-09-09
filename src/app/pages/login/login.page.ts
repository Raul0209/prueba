import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController, MenuController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { Login } from 'src/app/models/Login.model';
import { User } from 'src/app/models/user.model';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _userService: UserService, private navCtrl: NavController, private uiService: UiServiceService, private menuCtrl: MenuController) {
    this.loginUserModel = new Login('', '');
    this.userModel = new User(0, '', '', '', null);
    this.disableSideMenu();
  }

  ngOnInit() {
    this.slides.lockSwipes(true);
    this.disableSideMenu();
  }

  public loginUserModel: Login
  public status;
  public userModel: User

  @ViewChild('slidePrincipal', null) slides: IonSlides;

  disableSideMenu() {
    this.menuCtrl.enable(false, 'first')
  }

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };

  login(fLogin: NgForm) {
    if (fLogin.valid) {
      this._userService.login(this.loginUserModel).subscribe(
        response => {
          this.status = 'ok'
          if (response.tokenAdmin) {
            this._userService.saveToken(response.tokenAdmin);
            this.navCtrl.navigateRoot('/tabs-admin/tabs/tab1', { animated: true });
          }
          if (response.tokenPilot) {
            this._userService.saveToken(response.tokenPilot);
            this.navCtrl.navigateRoot('/tabs-pilot/tabs/tab-pilot1', { animated: true });
          }
          if (response.tokenRestaurant) {
            this._userService.saveToken(response.tokenRestaurant);
            this.navCtrl.navigateRoot('tabs-restaurant/tabs/tab-restaurant1', { animated: true });
          }
          if (response.withoutToken) {
            this.uiService.soporteToken('Contacta a soporte tecnico para validar tu cuenta y poder utilizarla.');
          }
        },
        error => {
          if (error) {
            this.uiService.informativeAlert('Usuario o Contraseña incorrectos.')
            this._userService.clearToken();
            fLogin.reset(fLogin);
          }
        }
      )
    } else if (fLogin.invalid) {
      this.uiService.informativeAlert('Ingrese todos los campos')
    }
  }

  register(fRegister: NgForm) {
    if (fRegister.valid) {
      this._userService.register(this.userModel).subscribe(
        response => {
          this.status = 'ok'
          if (response.user) {
            this.uiService.succes('Registrado Correctamente')
            this.viewLogin(fRegister);

          }
          if (response.duplicateEmail) {
            this.uiService.informativeAlert('Este email ya esta registrado')
          }
          if (response.incomplete) {
            this.uiService.informativeAlert('Rellene todos los campos')
          }
        },
        error => {
          if (error.incomplete) {
            this.uiService.informativeAlert('Rellene todos los campos')
          }
        }
      )
    } else if (fRegister.invalid) {
      this.uiService.informativeAlert('Rellene todos los campos')
    }
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false)
    avatar.seleccionado = true;
  }

  viewRegister(fLogin: NgForm) {
    fLogin.reset();
    this.slides.lockSwipes(false)
    this.slides.slideTo(1);
    this.slides.lockSwipes(true)
  }

  viewLogin(fRegister: NgForm) {
    fRegister.reset();
    this.slides.lockSwipes(false)
    this.slides.slideTo(0);
    this.slides.lockSwipes(true)
  }

  // menActivated() {
  //   this.gender = 'Masculino'
  // }

  // womenActivated() {
  //   this.gender = 'Femenino'
  // }



}
