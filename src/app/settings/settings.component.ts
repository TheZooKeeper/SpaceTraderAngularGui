import { Component, OnInit } from '@angular/core';
import { SpaceTradersWrapper } from '../space-traders-wrapper'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  spaceTrader: SpaceTradersWrapper
  newUserName = "";
  newToken = "";
  currentStatus = "";
  constructor() {
    this.spaceTrader = SpaceTradersWrapper.getInstance();
  }

  ngOnInit(): void {
    setInterval(() => {
      this.spaceTrader.getStatus().then((res) => {
        this.currentStatus = res.status;
      }, () => {
        this.currentStatus = 'Error Retrieving Status';
      })
    }, 10000);
  }

}
