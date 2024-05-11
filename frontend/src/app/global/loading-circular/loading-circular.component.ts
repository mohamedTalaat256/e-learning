import { Component } from '@angular/core';
import { LoaderService } from 'src/app/service/loader.service';

@Component({
  selector: 'loading-circular',
  templateUrl: './loading-circular.component.html',
  styleUrls: ['./loading-circular.component.scss']
})
export class LoadingCircularComponent {

  constructor(public loader: LoaderService) { }

}
