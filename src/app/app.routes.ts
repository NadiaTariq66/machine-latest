import { Routes } from '@angular/router';
import { ScreeningComponent } from './pages/screening/screening.component';
import { Screening2Component } from './pages/screening2/screening2.component';
import { SectorsIndustriesComponent } from './pages/sectors-industries/sectors-industries.component';
import { BusinessDescriptionComponent } from './pages/business-description/business-description.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { BusinessCyclesBackingStatusComponent } from './pages/business-cycles-backing-status/business-cycles-backing-status.component';
import { DealsInvestorsComponent } from './pages/deals-investors/deals-investors.component';
import { FinancialMetricsComponent } from './pages/financial-metrics/financial-metrics.component';
import { CompanyDashboardComponent } from './pages/company-dashboard/company-dashboard.component';
import { BalanceSheetComponent } from './pages/balance-sheet/balance-sheet.component';

export const routes: Routes = [
  {
    path: '', component: ScreeningComponent
  },
  {
    path: 'screening2', component: Screening2Component
  },
  {
    path: 'sectors-industries', component: SectorsIndustriesComponent
  },
  {
    path: 'business-description', component: BusinessDescriptionComponent
  },
  {
    path: 'locations', component: LocationsComponent
  },
  {
    path: 'businesscycles', component: BusinessCyclesBackingStatusComponent
  },
  {
    path: 'deals-investors', component: DealsInvestorsComponent
  },
  {
    path: 'financial-metrics', component: FinancialMetricsComponent
  },
  {
    path: 'company-dashboard', component: CompanyDashboardComponent
  },
  {
    path: 'balance-sheet', component: BalanceSheetComponent
  }
];
