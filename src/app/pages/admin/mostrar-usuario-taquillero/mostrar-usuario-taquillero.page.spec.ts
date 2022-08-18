import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioTaquilleroPage } from './mostrar-usuario-taquillero.page';

describe('MostrarUsuarioTaquilleroPage', () => {
  let component: MostrarUsuarioTaquilleroPage;
  let fixture: ComponentFixture<MostrarUsuarioTaquilleroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarUsuarioTaquilleroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarUsuarioTaquilleroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
