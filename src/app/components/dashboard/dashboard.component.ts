import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totals: { totalLibros: number; totalAutores: number; totalPrestamos: number } = {
    totalLibros: 0,
    totalAutores: 0,
    totalPrestamos: 0,
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loadTotals();
  }

  // Cargar los totales
  loadTotals(): void {
    this.dashboardService.getTotals().subscribe((data) => {
      this.totals = data;
      console.log('Totales cargados:', this.totals);
    });
  }
}
