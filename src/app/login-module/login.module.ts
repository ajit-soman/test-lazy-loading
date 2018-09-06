import { NgModule } from '@angular/core';
import { LoginRouteModule } from './login.route.module';
import { LoginComponent } from './login.component';
import { MatFormFieldModule, MatInputModule,MatTabsModule } from '../../../node_modules/@angular/material';

@NgModule({
    imports: [
        LoginRouteModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule
    ],
    declarations: [
        LoginComponent
    ]

})
export class LoginModule {

}