import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Routes
import { PagesRoutes } from './pages/pages.routes';

// Component
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: '**', component: NopagefoundComponent },
];

@NgModule({
	imports: [ RouterModule.forRoot(routes), PagesRoutes ],
	exports: [ RouterModule ],
})
export class AppRoutes {}
