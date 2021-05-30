import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { DriversService } from '../../services/drivers.service';
import { DriverModel } from '../../models/driverModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // PORQUE ESTAS VARIABLES NO SON CONST O LET ???
  public currentDriver: DriverModel | undefined;
  // public selectedDriver: DriverModel | undefined;

  constructor(
    private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    const drivers: DriverModel[] = DriversService.getDrivers();
    this.route.params.subscribe((params: Params) => {
      this.currentDriver = drivers.find(driver => driver.urlProfile === params.id);
    });
  }

}
