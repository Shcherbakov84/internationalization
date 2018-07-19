import { Injectable } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

export function TRANSLATE(str: string) {
  return str;
}

@Injectable()
export class ValidationService {

  constructor(private translate: TranslateService) { }

  getMsg(msg: string, params): Observable<any> {
    return this.translate.get(msg, params);
  }
}

