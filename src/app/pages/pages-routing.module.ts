import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesCoreComponent } from './pages-core/pages-core.component';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ElementsComponent } from './components/elements/elements.component';
import { TablesComponent } from './components/tables/tables.component';
import { OrdersComponent } from './components/ecommerce/orders/orders.component';
import { OrderViewComponent } from './components/ecommerce/order-view/order-view.component';
import { ProductsComponent } from './components/ecommerce/products/products.component';
import { ProductEditComponent } from './components/ecommerce/product-edit/product-edit.component';

import { InvoiceComponent } from './components/invoice/invoice.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { OtherAppComponent } from './components/other-app/other-app.component';
import { DateTimePickerComponent } from './components/bootstrapComponent/date-time-picker/date-time-picker.component';
import { ColorPickersComponent } from './components/bootstrapComponent/color-pickers/color-pickers.component';
import { SelectComponent } from './components/bootstrapComponent/select/select.component';
import { SwitchComponent } from './components/bootstrapComponent/switch/switch.component';
import { FileUploadComponent } from './components/bootstrapComponent/file-upload/file-upload.component';
import { TouchspinComponent } from './components/bootstrapComponent/touchspin/touchspin.component';
import { IconsComponent } from './components/bootstrapComponent/icons/icons.component';
import { CodeEditorComponent } from './components/bootstrapComponent/code-editor/code-editor.component';
import { WYSIWYGEditorComponent } from './components/bootstrapComponent/wysiwyg-editor/wysiwyg-editor.component';
import { WidgetsToolsComponent } from './components/bootstrapComponent/widgets-tools/widgets-tools.component';
import { ContextMenuComponent } from './components/bootstrapComponent/context-menu/context-menu.component';

import { ColorLibraryComponent } from './components/ui-features/color-library/color-library.component';
import { GridSystemComponent } from './components/ui-features/grid-system/grid-system.component';
import { GeneralComponentsComponent } from './components/ui-features/general-components/general-components.component';
import { ButtonsComponent } from './components/ui-features/buttons/buttons.component';
import { SpinnerButtonsComponent } from './components/ui-features/spinner-buttons/spinner-buttons.component';
import { FontIconsComponent } from './components/ui-features/font-icons/font-icons.component';
import { SoicalIconsComponent } from './components/ui-features/soical-icons/soical-icons.component';

import { FormControlComponent } from './components/form-stuff/form-control/form-control.component';
import { FormValidationComponent } from './components/form-stuff/form-validation/form-validation.component';
import { FormLayoutsComponent } from './components/form-stuff/form-layouts/form-layouts.component';
import { FormInputMaskComponent } from './components/form-stuff/form-input-mask/form-input-mask.component';
import { FormXEditableComponent } from './components/form-stuff/form-x-editable/form-x-editable.component';
import { FormWizardComponent } from './components/form-stuff/form-wizard/form-wizard.component';
import { ImageCroppingComponent } from './components/form-stuff/image-cropping/image-cropping.component';
import { MultipleFileUploadComponent } from './components/form-stuff/multiple-file-upload/multiple-file-upload.component';
import { DropzoneFileUploadComponent } from './components/form-stuff/dropzone-file-upload/dropzone-file-upload.component';

import { BoxedComponent } from './components/portlets/boxed/boxed.component';
import { LightComponent } from './components/portlets/light/light.component';
import { SolidComponent } from './components/portlets/solid/solid.component';
import { AjaxComponent } from './components/portlets/ajax/ajax.component';
import { DraggableComponent } from './components/portlets/draggable/draggable.component';

import { BlankPageComponent } from './components/pages-layouts/blank-page/blank-page.component';
import { AjaxContantLayoutComponent } from './components/pages-layouts/ajax-contant-layout/ajax-contant-layout.component';
import { OffCanvasMobileMenuComponent } from './components/pages-layouts/off-canvas-mobile-menu/off-canvas-mobile-menu.component';
import { ClassicPageHeadComponent } from './components/pages-layouts/classic-page-head/classic-page-head.component';
import { LightPageHeadComponent } from './components/pages-layouts/light-page-head/light-page-head.component';
import { BoxedPageComponent } from './components/pages-layouts/boxed-page/boxed-page.component';

import { LightSidebarMenuComponent } from './components/custom-layout/light-sidebar-menu/light-sidebar-menu.component';
import { HoverSidebarMenuComponent } from './components/custom-layout/hover-sidebar-menu/hover-sidebar-menu.component';
import { FixedSidebarLayoutComponent } from './components/custom-layout/fixed-sidebar-layout/fixed-sidebar-layout.component';
import { ClosedSidebarLayoutComponent } from './components/custom-layout/closed-sidebar-layout/closed-sidebar-layout.component';
import { OffcanvasSidebarLayoutComponent } from './components/custom-layout/offcanvas-sidebar-layout/offcanvas-sidebar-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PagesCoreComponent,
    children: [
      {
        path: 'pages',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
       component: DashboardComponent,
      },
      {
        path: 'elements',
        component: ElementsComponent,
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'orders',
        component: OrdersComponent,
      },
      {
        path: 'order-view',
        component: OrderViewComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'product-edit',
        component: ProductEditComponent,
      },
      {
        path: 'invoice-summary',
        component: InvoiceComponent,
      },
      {
        path: 'authentication',
        component: AuthenticationComponent,
      },
      {
        path: 'other-app',
        component: OtherAppComponent,
      },
      {
        path: 'date-time-picker',
        component: DateTimePickerComponent,
      },
      {
        path: 'color-pickers',
        component: ColorPickersComponent,
      },
      {
        path: 'select',
        component: SelectComponent,
      },
      {
        path: 'switch',
        component: SwitchComponent,
      },
      {
        path: 'file-upload',
        component: FileUploadComponent,
      },
      {
        path: 'touchspin',
        component: TouchspinComponent,
      },
      {
        path: 'icons',
        component: IconsComponent,
      },
      {
        path: 'code-editor',
        component: CodeEditorComponent,
      },
      {
        path: 'WYSIWYG-editor',
        component: WYSIWYGEditorComponent,
      },
      {
        path: 'widgets-tools',
        component: WidgetsToolsComponent,
      },
      {
        path: 'context-menu',
        component: ContextMenuComponent,
      },
      {
        path: 'color-library',
        component: ColorLibraryComponent,
      },
      {
        path: 'grid-system',
        component: GridSystemComponent,
      },
      {
        path: 'general-components',
        component: GeneralComponentsComponent,
      },
      {
        path: 'buttons',
        component: ButtonsComponent,
      },
      {
        path: 'spinner-buttons',
        component: SpinnerButtonsComponent,
      },
      {
        path: 'font-icons',
        component: FontIconsComponent,
      },
      {
        path: 'soical-icons',
        component: SoicalIconsComponent,
      },
      {
        path: 'form-control',
        component: FormControlComponent,
      },
      {
        path: 'form-validation',
        component: FormValidationComponent,
      },
      {
        path: 'form-layouts',
        component: FormLayoutsComponent,
      },
      {
        path: 'form-input-mask',
        component: FormInputMaskComponent,
      },
      {
        path: 'form-X-editable',
        component: FormXEditableComponent,
      },
      {
        path: 'form-wizard',
        component: FormWizardComponent,
      },
      {
        path: 'image-cropping',
        component: ImageCroppingComponent,
      },
      {
        path: 'multiple-file-upload',
        component: MultipleFileUploadComponent,
      },
      {
        path: 'dropzone-file-upload',
        component: DropzoneFileUploadComponent,
      },
      {
        path: 'boxed-portlets',
        component: BoxedComponent,
      },
      {
        path: 'light-portlets',
        component: LightComponent,
      },
      {
        path: 'solid-portlets',
        component: SolidComponent,
      },
      {
        path: 'ajax-portles',
        component: AjaxComponent,
      },
      {
        path: 'draggable-portlets',
        component: DraggableComponent,
      },
      {
        path: 'blank-page',
        component: BlankPageComponent,
      },
      {
        path: 'ajax-contant-layout',
        component: AjaxContantLayoutComponent,
      },
      {
        path: 'off-canvas-mobile-menu',
        component: OffCanvasMobileMenuComponent,
      },
      {
        path: 'classic-page-head',
        component: ClassicPageHeadComponent,
      },
      {
        path: 'light-page-head',
        component: LightPageHeadComponent,
      },
      {
        path: 'boxed-page',
        component: BoxedPageComponent,
      },
      {
        path: 'light-sidebar-menu',
        component: LightSidebarMenuComponent,
      },
      {
        path: 'hover-sidebar-menu',
        component: HoverSidebarMenuComponent,
      },
      {
        path: 'fixed-sidebar-layout',
        component: FixedSidebarLayoutComponent,
      },
      {
        path: 'closed-sidebar-layout',
        component: ClosedSidebarLayoutComponent,
      },
      {
        path: 'offcanvas-sidebar-layout',
        component: OffcanvasSidebarLayoutComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
