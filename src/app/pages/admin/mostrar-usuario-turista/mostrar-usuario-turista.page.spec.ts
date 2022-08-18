import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioTuristaPage } from './mostrar-usuario-turista.page';

describe('MostrarUsuarioTuristaPage', () => {
  let component: MostrarUsuarioTuristaPage;
  let fixture: ComponentFixture<MostrarUsuarioTuristaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarUsuarioTuristaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MostrarUsuarioTuristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
