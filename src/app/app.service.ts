import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public language = 'en-US';
  public dateFormat = 'MM/dd/yyyy';

  constructor(public translate: TranslateService) {
    this.setLanguage();
    this.setDateFormat();
  }

  setLanguage() {
    this.translate.addLangs(['en-US', 'en-CA', 'fr-CA']);
    this.translate.setDefaultLang('en-US');

    const browserLang = this.translate.getBrowserLang();
    // console.log('=====browserLang', browserLang);
    this.language = browserLang.match(/en-US|en-CA|fr-CA/) ? browserLang : this.language;
    this.translate.use(this.language);
  }

  setDateFormat() {
    if (this.language == 'en-US') {
      this.dateFormat = "MM/dd/yyyy";
    } else if (this.language == 'fr-CA') {
      this.dateFormat = "dd/MM/yyyy";
    }
  }

  getBooks(): Observable<any> {
    return of(['a', 'b', 'c']);
  }
}
