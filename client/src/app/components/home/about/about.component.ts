import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    console.log(this.data.data.user);
    console.log(this.data.data.user.name);
  }

  data = JSON.parse(localStorage.getItem('data') || '{}');
}

export interface User {
  _id: string;
  name: string;
  email: string;
  title: string;
  skills: string[];
  projects: string[];
  experiences: string[];
  __v: number;
  photo: string;
}

export interface Data {
  user: User;
}
