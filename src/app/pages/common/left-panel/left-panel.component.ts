import { Component, OnInit, Input, HostListener } from '@angular/core';
import { LayoutService } from '../../../shared/services/layout.service';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {
  asidebarHeight: number;
  @Input() navLayout: string;
  @Input() defaultNavbar: string;
  @Input() toggleNavbar: string;
  @Input() toggleStatus: boolean;
  @Input() navbarEffect: string;
  @Input() deviceType: string;
  @Input() headerColorTheme: string;
  @Input() navbarColorTheme: string;
  @Input() activeNavColorTheme: string;
  title: any;
  menuList: any;
  selected: any;
  constructor(private layoutService: LayoutService) { }

  isActive(item) {
      return this.selected === item;
  }
  onItemSelect(item) {
    this.selected = (this.selected === item ? item : item);
  }
  onSubItemSelect(item) {
    event.stopPropagation();
    this.selected = (this.selected === item ? item : item);
  }


  @HostListener('window:resize', ['$event'])
  onResizeHeight(event: any) {
      this.asidebarHeight = window.innerHeight;
  }



  ngOnInit() {
    this.layoutService.setAsidebarHeightCast.subscribe(setSidebarHeight => this.asidebarHeight = setSidebarHeight);

    this.title = 'Navigation';
    this.menuList = [
      {
        name: 'Dashboard',
        icon: 'fas fa-tachometer-alt',
        url: '/pages/dashboard',
      },
      {
        name: 'Elements',
        icon: 'far fa-clone',
        url: '/pages/elements',
        badge: '2',
        badgeBg: 'bg-success',
      },
      {
        name: 'Tables',
        icon: 'far fa-calendar-alt',
        url: '/pages/tables',
        badge: 'New',
        badgeBg: 'bg-danger',
      },
      {
        name: 'eCommerce',
        icon: 'fas fa-shopping-cart',
        subMenu: [
          {
            name: 'Orders',
            icon: 'far fa-circle',
            url: '/pages/orders',
          },
          {
            name: 'Order View',
            icon: 'far fa-circle',
            url: '/pages/order-view',
          },
          {
            name: 'Products',
            icon: 'far fa-circle',
            url: '/pages/products',
          },
          {
            name: 'Product Edit',
            icon: 'far fa-circle',
            url: '/pages/product-edit',
          },
        ]
      },
      {
        name: 'Components',
        icon: 'far fa-sun',
        subMenu: [
          {
            name: 'Date & Time Picker',
            icon: 'far fa-circle',
            url: '/pages/date-time-picker',
          },
          {
            name: 'Color Pickers',
            icon: 'far fa-circle',
            url: '/pages/color-pickers',
          },
          {
            name: 'Bootstrap Select',
            icon: 'far fa-circle',
            url: '/pages/select',
          },
          {
            name: 'Bootstrap Switch',
            icon: 'far fa-circle',
            url: '/pages/switch',
          },
          {
            name: 'Bootstrap file upload',
            icon: 'far fa-circle',
            url: '/pages/file-upload',
          },
          {
            name: 'Bootstrap TouchSpin',
            icon: 'far fa-circle',
            url: '/pages/touchspin',
          },
          {
            name: 'Bootstrap Icons',
            icon: 'far fa-circle',
            url: '/pages/icons',
          },
          {
            name: 'Code Editor',
            icon: 'far fa-circle',
            url: '/pages/code-editor',
          },
          {
            name: 'WYSIWYG Editor',
            icon: 'far fa-circle',
            url: '/pages/WYSIWYG-editor',
          },
          {
            name: 'Widgets & Tools',
            icon: 'far fa-circle',
            url: '/pages/widgets-tools',
          },
          {
            name: 'Context Menu',
            icon: 'far fa-circle',
            url: '/pages/context-menu',
          },

        ]
      },
      {
        name: 'UI Features',
        icon: 'far fa-gem',
        subMenu: [
          {
            name: 'Color Library',
            icon: 'far fa-circle',
            url: '/pages/color-library',
          },
          {
            name: 'Grid System',
            icon: 'far fa-circle',
            url: '/pages/grid-system',
          },
          {
            name: 'General Components',
            icon: 'far fa-circle',
            url: '/pages/general-components',
          },
          {
            name: 'Buttons',
            icon: 'far fa-circle',
            url: '/pages/buttons',
          },
          {
            name: 'Spinner Buttons',
            icon: 'far fa-circle',
            url: '/pages/spinner-buttons',
          },
          {
            name: 'Font Icons',
            icon: 'far fa-circle',
            url: '/pages/font-icons',
          },
          {
            name: 'Social Icons',
            icon: 'far fa-circle',
            url: '/pages/soical-icons',
          }
        ]
      },
      {
        name: 'Form Stuff',
        icon: 'far fa-edit',
        subMenu: [
          {
            name: 'Form Control',
            icon: 'far fa-circle',
            url: '/pages/form-control',
          },
          {
            name: 'Form Validation',
            icon: 'far fa-circle',
            url: '/pages/form-validation',
          },
          {
            name: 'Form Layouts',
            icon: 'far fa-circle',
            url: '/pages/form-layouts',
          },
          {
            name: 'Form Input Mask',
            icon: 'far fa-circle',
            url: '/pages/form-input-mask',
          },
          {
            name: 'Form X-editable',
            icon: 'far fa-circle',
            url: '/pages/form-X-editable',
          },
          {
            name: 'Form Wizard',
            icon: 'far fa-circle',
            url: '/pages/form-wizard',
          },
          {
            name: 'Image Cropping',
            icon: 'far fa-circle',
            url: '/pages/image-cropping',
          },
          {
            name: 'Multiple File Upload',
            icon: 'far fa-circle',
            url: '/pages/multiple-file-upload',
          },
          {
            name: 'Dropzone File Upload',
            icon: 'far fa-circle',
            url: '/pages/dropzone-file-upload',
          }
        ]
      },
      {
        name: 'Portlets',
        icon: 'far fa-bookmark',
        subMenu: [
          {
            name: 'Boxed Portlets',
            icon: 'far fa-circle',
            url: '/pages/boxed-portlets',
          },
          {
            name: 'Light Portlets',
            icon: 'far fa-circle',
            url: '/pages/light-portlets',
          },
          {
            name: 'Solid Portlets',
            icon: 'far fa-circle',
            url: '/pages/solid-portlets',
          },
          {
            name: 'Ajax Portles',
            icon: 'far fa-circle',
            url: '/pages/ajax-portles',
          },
          {
            name: 'Draggable Portlets',
            icon: 'far fa-circle',
            url: '/pages/draggable-portlets',
          },
        ]
      },
      {
        name: 'Pages Layouts',
        icon: 'far fa-list-alt',
        subMenu: [
          {
            name: 'Blank Page',
            icon: 'far fa-circle',
            url: '/pages/blank-page',
          },
          {
            name: 'Ajax Contant',
            icon: 'far fa-circle',
            url: '/pages/ajax-contant-layout',
          },
          {
            name: 'Off-Canvas Menu',
            icon: 'far fa-circle',
            url: '/pages/off-canvas-mobile-menu',
          },
          {
            name: 'Classic Page Head',
            icon: 'far fa-circle',
            url: '/pages/classic-page-head',
          },
          {
            name: 'Light Page Head',
            icon: 'far fa-circle',
            url: '/pages/light-page-head',
          },
          {
            name: 'Boxed Page',
            icon: 'far fa-circle',
            url: '/pages/boxed-page',
          }
        ]
      },
      {
        name: 'Custom Layout',
        icon: 'far fa-paper-plane',
        subMenu: [
          {
            name: 'Light Sidebar',
            icon: 'far fa-circle',
            url: '/pages/light-sidebar-menu',
          },
          {
            name: 'Hover Sidebar',
            icon: 'far fa-circle',
            url: '/pages/hover-sidebar-menu',
          },
          {
            name: 'Fixed Sidebar',
            icon: 'far fa-circle',
            url: '/pages/fixed-sidebar-layout',
          },
          {
            name: 'Closed Sidebar',
            icon: 'far fa-circle',
            url: '/pages/closed-sidebar-layout',
          },
          {
            name: 'Offcanvas Sidebar',
            icon: 'far fa-circle',
            url: '/pages/offcanvas-sidebar-layout',
          }
        ]
      },
      {
        name: 'Invoice',
        icon: 'far fa-file-alt',
        url: '/pages/invoice-summary',
      },
      {
        name: 'Authentication',
        icon: 'far fa-user-circle',
        url: '/pages/authentication',
      },
      {
        name: 'Other App',
        icon: 'far fa-comments',
        url: '/pages/other-app',
        badge: 'New',
        badgeBg: 'bg-warning',
      },

    ];
  }

}
