import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from '../user-settings.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {

  constructor(public userSettings: UserSettingsService) { }

  ngOnInit() {
  }

}
