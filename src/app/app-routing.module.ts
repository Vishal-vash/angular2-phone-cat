import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'phone-list',
        component: PhoneListComponent
    },
    {
        path: 'details/:id',
        component: PhoneDetailsComponent
    }
]

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})

export class AppRoutingModule {
    //
}