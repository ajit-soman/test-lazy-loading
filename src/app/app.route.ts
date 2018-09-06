import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: './login-module/login.module#LoginModule',
    pathMatch:'full'
}, {
    path: 'dashboard',
    loadChildren: './dashboard-module/dashboard.module#DashboardModule',
}, 
// { 
//     path: '**', 
//     component: PageNotFoundComponent 
// }
]