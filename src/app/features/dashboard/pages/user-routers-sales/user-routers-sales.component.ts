import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { PageTitleComponent } from '../../components/ui/page-title/page-title.component';
import { BackButtonComponent } from '../../components/ui/back-button/back-button.component';
import { RouterSalesCardComponent } from '../../components/logic/router-sales-card/router-sales-card.component';
import { TableListingComponent } from '../../components/logic/table-listing/table-listing.component';
import { IMatColumns } from '../../../../shared/interfaces/table.interface';
import { ICoupon } from '../../models/coupons.model';
import { PaginatorComponent } from '../../components/logic/paginator/paginator.component';
import { PageEvent } from '@angular/material/paginator';
import { RoutersService } from '../../services/routers/routers.service';
import { IRouterCashData } from '../../models/userRouters.model';

@Component({
  selector: 'app-user-routers-sales',
  imports: [
    PageTitleComponent,
    BackButtonComponent,
    RouterSalesCardComponent,
    TableListingComponent,
    PaginatorComponent,
  ],
  templateUrl: './user-routers-sales.component.html',
  styleUrl: './user-routers-sales.component.scss',
})
export class UserRoutersSalesComponent implements OnInit {
  @Input() hotspotName!: string;
  @Input() totalSales!: number;
  @Input() cashCollected!: number;

  @Input() routerId!: string;

  routerCashData = signal<IRouterCashData | null>(null);

  // router service
  private _routerService = inject(RoutersService);

  pageSize = 5;
  pageIndex = 0;
  paginatedData: ICoupon[] = [];

  get balance(): number {
    return this.totalSales - this.cashCollected;
  }

  couponColumns: IMatColumns[] = [
    { label: 'Phone Number', key: 'phoneNumber' },
    { label: 'Coupon Count', key: 'couponCount' },
    { label: 'Coupon Number', key: 'couponNumber' },
    { label: 'Profile', key: 'profile' },
    { label: 'Cost', key: 'cost' },
    { label: 'Date', key: 'date' },
  ];

  coupons: ICoupon[] = [
    {
      phoneNumber: '9000000001',
      couponCount: 2,
      profile: '1-D',
      cost: 60,
      date: '2025-01-01',
    },
    {
      phoneNumber: '9000000002',
      couponCount: 1,
      couponNumber: 'CPN-1002',
      profile: '2-D',
      cost: 30,
      date: '2025-01-02',
    },
    {
      phoneNumber: '9000000003',
      couponCount: 3,
      profile: '3-D',
      cost: 90,
      date: '2025-01-03',
    },
    {
      phoneNumber: '9000000004',
      couponCount: 4,
      profile: '4-D',
      cost: 120,
      date: '2025-01-04',
    },
    {
      phoneNumber: '9000000005',
      couponCount: 1,
      couponNumber: 'CPN-1005',
      profile: '5-D',
      cost: 40,
      date: '2025-01-05',
    },

    {
      phoneNumber: '9000000006',
      couponCount: 2,
      profile: '6-D',
      cost: 70,
      date: '2025-01-06',
    },
    {
      phoneNumber: '9000000007',
      couponCount: 1,
      couponNumber: 'CPN-1007',
      profile: '7-D',
      cost: 35,
      date: '2025-01-07',
    },
    {
      phoneNumber: '9000000008',
      couponCount: 5,
      profile: '8-D',
      cost: 150,
      date: '2025-01-08',
    },
    {
      phoneNumber: '9000000009',
      couponCount: 3,
      profile: '9-D',
      cost: 90,
      date: '2025-01-09',
    },
    {
      phoneNumber: '9000000010',
      couponCount: 1,
      couponNumber: 'CPN-1010',
      profile: '10-D',
      cost: 50,
      date: '2025-01-10',
    },

    {
      phoneNumber: '9000000011',
      couponCount: 4,
      profile: '11-D',
      cost: 120,
      date: '2025-01-11',
    },
    {
      phoneNumber: '9000000012',
      couponCount: 2,
      profile: '12-D',
      cost: 60,
      date: '2025-01-12',
    },
    {
      phoneNumber: '9000000013',
      couponCount: 1,
      couponNumber: 'CPN-1013',
      profile: '13-D',
      cost: 45,
      date: '2025-01-13',
    },
    {
      phoneNumber: '9000000014',
      couponCount: 3,
      profile: '14-D',
      cost: 90,
      date: '2025-01-14',
    },
    {
      phoneNumber: '9000000015',
      couponCount: 2,
      profile: '15-D',
      cost: 70,
      date: '2025-01-15',
    },

    {
      phoneNumber: '9000000016',
      couponCount: 5,
      profile: '16-D',
      cost: 150,
      date: '2025-01-16',
    },
    {
      phoneNumber: '9000000017',
      couponCount: 1,
      couponNumber: 'CPN-1017',
      profile: '17-D',
      cost: 55,
      date: '2025-01-17',
    },
    {
      phoneNumber: '9000000018',
      couponCount: 2,
      profile: '18-D',
      cost: 60,
      date: '2025-01-18',
    },
    {
      phoneNumber: '9000000019',
      couponCount: 3,
      profile: '19-D',
      cost: 90,
      date: '2025-01-19',
    },
    {
      phoneNumber: '9000000020',
      couponCount: 4,
      profile: '20-D',
      cost: 120,
      date: '2025-01-20',
    },

    {
      phoneNumber: '9000000021',
      couponCount: 1,
      couponNumber: 'CPN-1021',
      profile: '21-D',
      cost: 40,
      date: '2025-01-21',
    },
    {
      phoneNumber: '9000000022',
      couponCount: 2,
      profile: '22-D',
      cost: 60,
      date: '2025-01-22',
    },
    {
      phoneNumber: '9000000023',
      couponCount: 5,
      profile: '23-D',
      cost: 150,
      date: '2025-01-23',
    },
    {
      phoneNumber: '9000000024',
      couponCount: 3,
      profile: '24-D',
      cost: 90,
      date: '2025-01-24',
    },
    {
      phoneNumber: '9000000025',
      couponCount: 1,
      couponNumber: 'CPN-1025',
      profile: '25-D',
      cost: 50,
      date: '2025-01-25',
    },

    {
      phoneNumber: '9000000026',
      couponCount: 4,
      profile: '26-D',
      cost: 120,
      date: '2025-01-26',
    },
    {
      phoneNumber: '9000000027',
      couponCount: 2,
      profile: '27-D',
      cost: 60,
      date: '2025-01-27',
    },
    {
      phoneNumber: '9000000028',
      couponCount: 1,
      couponNumber: 'CPN-1028',
      profile: '28-D',
      cost: 55,
      date: '2025-01-28',
    },
    {
      phoneNumber: '9000000029',
      couponCount: 3,
      profile: '29-D',
      cost: 90,
      date: '2025-01-29',
    },
    {
      phoneNumber: '9000000030',
      couponCount: 5,
      profile: '30-D',
      cost: 150,
      date: '2025-01-30',
    },
  ];

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.updatePaginatedData();
  }

  updatePaginatedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.coupons.slice(start, end);
  }

  getRouterCashData() {
    this._routerService.getRouterCashData(this.routerId).subscribe({
      next: (res) => {
        console.log(res);
        this.routerCashData.set(res);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnInit(): void {
    this.totalSales = 1000;
    this.cashCollected = 300;
    this.hotspotName = 'My hotspot';

    window.scrollTo(0, 0);
    this.updatePaginatedData();
    this.getRouterCashData();
  }
}
