import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.component.html',
  styleUrls: ['./trans.component.scss']
})
export class TransComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    console.log('=====browserLang', browserLang);
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {
  }

}
