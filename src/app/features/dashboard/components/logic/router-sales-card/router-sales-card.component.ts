import { Component, Input } from '@angular/core';
import { MatCard } from "@angular/material/card";

@Component({
  selector: 'app-router-sales-card',
  imports: [MatCard],
  templateUrl: './router-sales-card.component.html',
  styleUrl: './router-sales-card.component.scss',
})
export class RouterSalesCardComponent {
  @Input() hotspotName!: string;
  @Input() totalSales!: number;
  @Input() cashCollected!: number;

  get balance(): number {
    return this.totalSales - this.cashCollected;
  }
}
