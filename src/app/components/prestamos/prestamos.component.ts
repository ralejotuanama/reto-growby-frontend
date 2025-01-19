import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PrestamoService } from '../../services/prestamo.service';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class PrestamosComponent implements OnInit {
  prestamoForm: FormGroup;
  prestamos: any[] = [];
  libros: any[] = []; // Lista de libros sin paginación para el dropdown
  

  constructor(private fb: FormBuilder,private prestamoService: PrestamoService, private libroService: LibroService) {
    this.prestamoForm = this.fb.group({
      fechaPrestamo: ['', Validators.required],
      fechaDevolucion: ['', Validators.required],
      libro: this.fb.group({
        id: ['', Validators.required], // Solo necesitamos el ID del libro
      }),
      estado: ['Activo', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getPrestamos();
    this.getLibrosSinPaginacion();
  }

  // Cargar libros sin paginación
  getLibrosSinPaginacion(): void {
    this.libroService.getLibrosSinPaginacion().subscribe((data) => {
      this.libros = data; // Guardar libros en la lista
      console.log('Libros cargados:', this.libros);
    });
  }

  getPrestamos(): void {
    this.prestamoService.getPrestamos().subscribe((data) => {
      this.prestamos = data;
    });
  }

  

  savePrestamo(): void {
    console.log('Formulario enviado:', this.prestamoForm.value); //
    if (this.prestamoForm.valid) {
     
      this.prestamoService.createPrestamo(this.prestamoForm.value).subscribe(() => {
        this.getPrestamos();
        this.prestamoForm.reset({ estado: 'Activo' });
        alert('Préstamo registrado con éxito');
      });
    }
  }
}
