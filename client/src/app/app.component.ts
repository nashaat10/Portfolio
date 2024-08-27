import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DataService } from './services/data.service';
// import { LocalStorageService } from 'path/to/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'andresjosehr-portfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService,
    private dataService: DataService
  ) {}
  ngOnInit(): void {
    this.languageService.initLanguage();

    this.titleService.setTitle('Mohamed Nashaat');

    this.metaService.addTags([
      { name: 'keywords', content: 'Frontend, software, developer' },
      {
        name: 'description',
        content:
          'Con 4 años de experiencia desarrollando sistemas, interfaces, bots y soluciones tecnológicas  para hacer de la web un lugar mejor. En mi trabajo me gusta liderar, proponer y ejecutar ideas, escribir y refactorizar código limpio, reutilizable y escalable.',
      },
    ]);

    AOS.init();
    this.dataService.getData().subscribe((data) => {
      console.log(data);
      localStorage.setItem('data', JSON.stringify(data));
    });

    this.dataService.login().subscribe((data) => {
      console.log(data);
      localStorage.setItem('token', data.token);
    });
  }
}
