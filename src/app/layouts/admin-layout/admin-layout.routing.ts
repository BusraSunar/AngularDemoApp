import { Routes } from '@angular/router';

import { AllComponent } from '../../all/all/all.component';
import { AddDataComponent } from '../../add-data/add-data.component'

export const AdminLayoutRoutes: Routes = [
    /*{ path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
    { path: 'all',        component: AllComponent },
    { path: 'add-data',        component: AddDataComponent },
];
