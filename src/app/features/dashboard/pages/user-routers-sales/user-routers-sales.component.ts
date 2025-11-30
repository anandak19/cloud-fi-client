import { Component } from '@angular/core';
import { PageTitleComponent } from "../../components/ui/page-title/page-title.component";
import { BackButtonComponent } from "../../components/ui/back-button/back-button.component";

@Component({
  selector: 'app-user-routers-sales',
  imports: [PageTitleComponent, BackButtonComponent],
  templateUrl: './user-routers-sales.component.html',
  styleUrl: './user-routers-sales.component.scss'
})
export class UserRoutersSalesComponent {

}
