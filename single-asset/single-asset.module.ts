import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleAssetComponent } from './single-asset.component';
import { RouterModule } from '@angular/router';
import { routes } from './single-asset.routing';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { DetailsComponent } from './details/details.component';
import { FuelLevelComponent } from './fuel-level/fuel-level.component';
import { LocationComponent } from './location/location.component';
import { DieselExhaustFluidComponent } from './diesel-exhaust-fluid/diesel-exhaust-fluid.component';
import { NotesComponent } from './notes/notes.component';
import { DeviceDetailsComponent } from './device-details/device-details.component';
import { ECMInformationComponent } from './ecm-information/ecm-information.component';
import { NotificationComponent } from './notification/notification.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DeviceHeaderComponent } from './device-header/device-header.component';
import {MatButtonModule} from '@angular/material/button';
//import {FuelLevelComponent} from '../../components/fuel-level/fuel-level.component'
import { PulseFuelGaugeComponent } from '@ccss/core/components/pulse-fuelgauge/pulse-fuelgauge.component';
import { CanvasChartComponent } from '../../components/canvas-chart/canvas-chart.component';
import { AssetUtilizationComponent } from './asset-utilization/asset-utilization.component';
@NgModule({
  declarations: [SingleAssetComponent, 
    DetailsComponent,
    PulseFuelGaugeComponent,
    CanvasChartComponent,
    FuelLevelComponent, 
    LocationComponent,
     DieselExhaustFluidComponent, 
     NotesComponent,
      DeviceDetailsComponent,
       ECMInformationComponent, NotificationComponent, DeviceHeaderComponent, AssetUtilizationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [],
  providers: []
})
export class SingleAssetModule { }
