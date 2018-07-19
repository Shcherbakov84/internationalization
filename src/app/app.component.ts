import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TranslateService } from '@ngx-translate/core';
import { ValidationService } from './validation.service';

export function TRANSLATE(str: string) {
  return str;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = {
    name: 'Elon Mask',
    age: 33
  };

  msg;
  msg2;
  validationMsg$: Observable<any>;

  constructor(
    private translate: TranslateService,
    private validationService: ValidationService
  ) {
    translate.setDefaultLang('ua');
  }

  ngOnInit() {
    this.msg = this.getMessage('server.internal_error');
    this.msg2 = this.getMessage('server.user_not_found.cause_email');

    this.validationMsg$ = this.validationService.getMsg(
      'ui.validation.msgs.firstNameLengthWarn', 
      {
        lengths: {
          firstName: {
            max: 150
          }
        }
      }
    );

  }

  switchLanguage(language: string) {
    this.translate.use(language);
    this.validationMsg$ = this.validationService.getMsg(
      'ui.validation.msgs.firstNameLengthWarn',
      {
        lengths: {
          firstName: {
            max: 150
          }
        }
      }
    );
  }

  getMessage(key: string) {
    return TRANSLATE(key);
  }

}
