import { Component, OnInit } from '@angular/core';
import { defaultFleetPreferences} from  '../../../components/fleet-preferences/fleet-preferences.defaults'
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Pinned } from '../../../components/fleet-preferences/types'
import { ColumnDefs, PinDirection } from '@ccss/core/components/ccss-grid/types';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'ccss-column-preference',
  templateUrl: './column-preference.component.html',
  styleUrls: ['./column-preference.component.scss']
})
export class ColumnPreferenceComponent implements OnInit {

  default=[];
  entries = [];
  selectedwidth
  mass = [
    {
      name: 'ID',
      visible: false,
      width: 0,
      pinned: Pinned.LEFT
    },
    {
      name: 'isGpsRollOverAffected',
      visible: true,
      width: 12,
      pinned: Pinned.LEFT
    },
    {
      name: 'AssetIcon',
      visible: true,
      width: 60,
      pinned: Pinned.LEFT
    },
    {
      name: 'AssetID',
      visible: true,
      width: 150,
      pinned: Pinned.LEFT
    },
    {
      name: 'AssetSerialNumber',
      visible: true,
      width: 150,
      pinned: Pinned.LEFT
    },
    {
      name: 'MakeModel',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'Status',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'CustomStateDescription',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'HourMeter',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'LifetimeFuelLiters',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'Location',
      visible: true,
      width: 140,
      pinned: Pinned.NONE
    },
    {
      name: 'LastLocationUpdateUTC',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'LastReportedTime',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'FuelLevelLastReported',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'FuelReportedTime',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'DEFLevelLastReported',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'DefReportedTime',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'Notifications',
      visible: true,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'Odometer',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'DeviceType',
      visible: false,
      width: 195,
      pinned: Pinned.NONE
    },
    {
      name: 'OperatorName',
      visible: false,
      width: 140,
      pinned: Pinned.NONE
    },
    {
      name: 'OperatorID',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'GeofenceList',
      visible: true,
      width: 140,
      pinned: Pinned.NONE
    },
    {
      name: 'ModelYear',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'MainboardSoftwareVersion',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'DealerCustomerNumber',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'DealerCustomerName',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'DealerCode',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'DealerName',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'UniversalCustomerIdentifier',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    },
    {
      name: 'UniversalCustomerName',
      visible: false,
      width: 150,
      pinned: Pinned.NONE
    }
  
];

  constructor(
    public dialogRef: MatDialogRef<ColumnPreferenceComponent>
  ) { }

  ngOnInit(): void {
    // this.entries.push(defaultFleetPreferences);
    // console.log(this.entries)
    console.log(this.mass)
  }

  onReorderColumns(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.mass, event.previousIndex, event.currentIndex);
   
  }

  onPinnedClick(column) {
    if (!column.pinned) {
      column.pinned = PinDirection.LEFT;
    } else {
      column.pinned = undefined;
    }
   
  }

  onShowOrHideClick(column) {
    column.visible = !column.visible;
   
  }
  oncliled(column){
    this.default = column
  }
  submit(addCommandForm: NgForm, name){
    var width1
    console.log(name)
    Object.keys(addCommandForm.value).forEach(key => {
      width1 =  addCommandForm.value[key]
      console.log('value', width1);     
  });

  for (var i in this.mass) {
    if (this.mass[i].name == name) {
       this.mass[i].width = width1;
       console.log(this.mass)
       break; //Stop this loop, we found it!
    }
  }
  }
}
