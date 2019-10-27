import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';
import { AuthService } from '../../../auth/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() leftHeaderColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  @Input() headerHeight: number;
  @Input() collapsedLeftHeader: boolean;

  showNotifications: boolean;
  userId: string;

  constructor( private layoutService: LayoutService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.userId = this.authService.getUserId();
  }

  changeTheToggleStatus() {
    this.layoutService.getToggleStatus();
  }

  toggleNotification() {
    this.showNotifications = !this.showNotifications;
    console.log(this.showNotifications);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
