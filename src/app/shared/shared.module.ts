import { NgModule } from '@angular/core';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
	declarations: [ NopagefoundComponent, HeaderComponent, BreadcrumbsComponent, SidebarComponent ],
	exports: [ NopagefoundComponent, HeaderComponent, BreadcrumbsComponent, SidebarComponent ],
})
export class SharedModule {}
