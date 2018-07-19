import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

export function TRANSLATE(str: string) {
  return str;
}

@Injectable()
export class ValidationService {
  private CONSTS = {
    lengths: {
      firstName: {
        max: 150
      }
    }
  };

  private messages = TRANSLATE('ui.validation.msgs');

  constructor(private translate: TranslateService) { }

  getMsg(msg: string): Observable<any> {
    return this.translate.get(msg, this.CONSTS);
  }
}

