import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'validation-msg',
  templateUrl: './validation-msg.component.html',
  styleUrls: ['./validation-msg.component.scss']
})
export class ValidationMsgComponent implements OnInit{
  @Input() formControl: FormControl;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  formateErrorMessage(errors: object) {
    let result = [];
    Object.keys(errors).forEach(key => {
      let translatedKey = this.translate.instant(key);
      let translatedValue = this.translate.instant(errors[key]);
      result.push([translatedKey,translatedValue].join(':'))
    });
    return result
  }
}
