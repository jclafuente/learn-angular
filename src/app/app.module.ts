import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { AppRoutes } from './app.routes';

// Modulos
import { PagesModules } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
	declarations: [ AppComponent, LoginComponent, RegisterComponent ],
	imports: [ BrowserModule, AppRoutes, PagesModules ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
