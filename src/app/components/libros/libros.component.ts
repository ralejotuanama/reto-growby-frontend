import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibroService } from '../../services/libro.service';

@Component({
  selector: 'app-libros',
  standalone: true,
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class LibrosComponent implements OnInit {
  libros: any[] = [];
  libroForm: FormGroup;

  constructor(private libroService: LibroService, private fb: FormBuilder) {
    this.libroForm = this.fb.group({
      id: [null],
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      isbn: ['', Validators.required],
      fechaPublicacion: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getLibros();
    this.getLibrosSinPaginacion();
  }

  getLibros(): void {
    this.libroService.getLibros(0, 10).subscribe((data) => {
      this.libros = data.content;
    });
  }

  getLibrosSinPaginacion(): void {
    this.libroService.getLibrosSinPaginacion().subscribe((data) => {
      this.libros = data; // Almacena la lista completa de libros
    });
  }

  saveLibro(): void {
    if (this.libroForm.value.id) {
      this.libroService.updateLibro(this.libroForm.value).subscribe(() => {
        this.getLibros();
      });
    } else {
      this.libroService.createLibro(this.libroForm.value).subscribe(() => {
        this.getLibros();
      });
    }
    this.libroForm.reset();
  }

  editLibro(libro: any): void {
    this.libroForm.patchValue(libro);
  }

  deleteLibro(id: number): void {
    this.libroService.deleteLibro(id).subscribe(() => {
      this.getLibros();
    });
  }
}
