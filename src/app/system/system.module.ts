import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import {BillComponent} from './bill/bill.component';
import {HistoryComponent} from './history/history.component';
import {PlanningComponent} from './planning/planning.component';
import {RecordsComponent} from './records/records.component';
import {BillCardComponent} from './bill/bill-card/bill-card.component';
import {CurrencyCardComponent} from './bill/currency-card/currency-card.component';
import {SharedModule} from '../shared/shared.module';
import {BillService} from './shared/bill.service';

@NgModule({
  declarations: [
    SystemComponent,
    BillComponent,
    HistoryComponent,
    PlanningComponent,
    RecordsComponent,
    BillCardComponent,
    CurrencyCardComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  providers: [
    BillService
  ]
})
export class SystemModule {
}
