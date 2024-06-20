import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng_material';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');

    if(localStorage.getItem('language') === null){
      localStorage.setItem('language', 'en');
    }
    translate.use(localStorage.getItem('language'));
    
  }z

}
