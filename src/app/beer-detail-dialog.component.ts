import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { Beer } from './beer';

@Component({
	selector: 'beer-detail-dialog',
	templateUrl: 'beer-detail-dialog.component.html',
  	styleUrls: ['./beer-detail-dialog.component.css']
})
export class BeerDetailDialogComponent {
	constructor(
		public dialogRef: MatDialogRef<BeerDetailDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any) { }
}