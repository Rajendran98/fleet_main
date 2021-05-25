import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {
  ASSET_STATUS_OPTIONS,
  OVERALL_DASHBOARD_COUNT,
  ASSET_PRODUCT_FAMILY
} from '../../../provider/__mocks__/asset-status-dashboard.mock';
import { ASSET_UTILIZATION } from '../../../provider/__mocks__/asset-utilization.mock';
import Chart from 'chart.js';
// import { AssetProducts, CountData } from '../../../model/assets';
import { UtilizationHours } from '../../../model/asset-utilization';


@Component({
  selector: 'ccss-asset-utilization',
  templateUrl: './asset-utilization.component.html',
  styleUrls: ['./asset-utilization.component.css']
})
export class AssetUtilizationComponent implements OnInit {
  @ViewChild('myCanvas', { static: false }) myCanvas: ElementRef;
  chart: Chart;
  totalAssetUtilization: UtilizationHours[] = [];
  avgAssetUtilization: UtilizationHours[] = [];
  totalWorkingHours: number[] = [];
  totalIdleHours: number[] = [];
  totalRunningHours: number[] = [];
  chartLabel: string[] = ['Today', 'Current Week', 'Current Month'];
  utilization: any = [];
  @Output() enableSelection = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    ASSET_UTILIZATION.map(val => {
      Object.keys(val).map(ele => {
        ele.startsWith('total') ? this.totalAssetUtilization.push(val[ele]) : this.avgAssetUtilization.push(val[ele]);
      });
    });
    this.totalClick();
  }

  totalClick() {
    this.totalAssetUtilization.map(val => {
      this.totalWorkingHours.push(val['workingHours']);
      this.totalIdleHours.push(val['idleHours']);
     
    });
    this.utilization.push(
      { label: 'working', val: this.totalWorkingHours },
      { label: 'idle', val: this.totalIdleHours },

    );
    console.log(this.utilization);
  }

}
