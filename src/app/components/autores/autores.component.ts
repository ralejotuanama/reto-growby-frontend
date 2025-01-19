import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { AutorService } from '../../services/autor.service';

@Component({
  selector: 'app-autores',
  standalone: true,
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
  imports: [
    CommonModule, // Necesario para *ngFor y *ngIf
    ReactiveFormsModule, // Necesario para formGroup y formularios reactivos
  ],
})
export class AutoresComponent implements OnInit {
  autores: any[] = [];
  autorForm: FormGroup;
  editMode: boolean = false; // Indica si se está editando un autor

  constructor(private autorService: AutorService, private fb: FormBuilder) {
    this.autorForm = this.fb.group({
      id: [null],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      nacionalidad: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAutores();
  }

  getAutores(): void {
    this.autorService.getAutores().subscribe((data) => {
      this.autores = data;
    });
  }

  saveAutor(): void {
    if (this.editMode) {
      this.autorService.updateAutor(this.autorForm.value).subscribe(() => {
        this.getAutores();
        this.resetForm();
      });
    } else {
      this.autorService.createAutor(this.autorForm.value).subscribe(() => {
        this.getAutores();
        this.resetForm();
      });
    }
  }

  editAutor(autor: any): void {
    this.editMode = true;
    this.autorForm.patchValue(autor);
  }

  deleteAutor(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este autor?')) {
      this.autorService.deleteAutor(id).subscribe(() => {
        this.getAutores();
      });
    }
  }

  resetForm(): void {
    this.editMode = false;
    this.autorForm.reset();
  }
}
