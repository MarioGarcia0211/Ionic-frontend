import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioAdminPage } from './mostrar-usuario-admin.page';

describe('MostrarUsuarioAdminPage', () => {
  let component: MostrarUsuarioAdminPage;
  let fixture: ComponentFixture<MostrarUsuarioAdminPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarUsuarioAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarUsuarioAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
