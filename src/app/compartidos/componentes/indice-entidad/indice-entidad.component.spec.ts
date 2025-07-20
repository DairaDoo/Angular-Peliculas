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
    >('IServicioCRUD', ['obtenerPaginado', 'borrar']);

    mockIServicioCRUD.obtenerPaginado.and.returnValue(of());
    mockIServicioCRUD.borrar.and.returnValue(of({})); // aca pasamos un objeto vacío como respuesta

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

  it('Debe de colocar la página igual a 1 cuando borrar sea llamada', () => {
    const fixture = TestBed.createComponent(IndiceEntidadComponent);
    const componente = fixture.componentInstance;

    const id = 1;
    componente.paginacion.pagina = 2; // Simulamos que estamos en la página 2

    componente.borrar(id);

    expect(componente.paginacion.pagina).toBe(1);
  });

});
