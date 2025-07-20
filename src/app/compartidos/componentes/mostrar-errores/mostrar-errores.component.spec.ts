import { TestBed } from "@angular/core/testing"
import { MostrarErroresComponent } from "./mostrar-errores.component"

describe('MostrarErroresComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MostrarErroresComponent],
        }).compileComponents();
    });

    it('Debe crear el componente correctamente', () => {
        const fixture = TestBed.createComponent(MostrarErroresComponent);
        const component = fixture.componentInstance;
        expect(component).toBeTruthy();
    })

    it('Debe mostrar un list-item cuando haya un error', () => {
        const fixture = TestBed.createComponent(MostrarErroresComponent);
        const component = fixture.componentInstance;


        component.errores = ['Error']; // Asignar un error
        fixture.detectChanges(); // Detectar cambios realizados en el componente

        const compilado = fixture.nativeElement as HTMLElement;
        expect(compilado.querySelectorAll('li').length).toBe(1);
    })
})