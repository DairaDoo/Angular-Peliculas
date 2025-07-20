import { TestBed } from '@angular/core/testing';
import { IndiceEntidadComponent } from './indice-entidad.component';
import { IServicioCRUD } from '../../interfaces/IServicioCRUD';
import { of } from 'rxjs';
import { SERVICIO_CRUD_TOKEN } from '../../proveedores/proveedores';
import { RouterModule } from '@angular/router';

describe('IndiceEntidadComponent', () => {
  beforeEach(async () => {
    const mockIServicioCRUD = jasmine.createSpyObj<
      IServicioCRUD<object, object>
    >('IServicioCRUD', ['obtenerPaginado']);

    mockIServicioCRUD.obtenerPaginado.and.returnValue(of());

    await TestBed.configureTestingModule({
      imports: [IndiceEntidadComponent, RouterModule.forRoot([])],
      providers: [
        { provide: SERVICIO_CRUD_TOKEN, useValue: mockIServicioCRUD },
      ],
    }).compileComponents();
  });

  it('Debe crear el componente correctamente', () => {
    const fixture = TestBed.createComponent(IndiceEntidadComponent);
    const componente = fixture.componentInstance;
    expect(componente).toBeTruthy();
  });
});
