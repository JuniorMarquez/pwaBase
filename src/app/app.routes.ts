import {RouterModule,Routes} from '@angular/router';
import {
	SliderHomeComponent
	}from "./components/index.paginas";

const app_routes: Routes = [
	{path:'',component:SliderHomeComponent},
	{path:'**',pathMatch:'full',redirectTo:''}
	];
	export const app_routing = RouterModule.forRoot(app_routes);

