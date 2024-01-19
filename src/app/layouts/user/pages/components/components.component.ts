import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  selected = new FormControl('', [Validators.required]);

  basicButtonsCode = `<code>
  &lt;div <span class="attribute">fxLayout</span>=<span class="value">"row"</span> <span class="attribute">fxLayoutGap</span>=<span class="value">"10"</span> <span class="attribute">fxLayoutAlign</span>=<span class="value">"space-between center"</span>&gt;
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;button <span class="attribute">fxFlex</span>=<span class="value">"100"</span> <span class="attribute">mat-raised-button</span> <span class="attribute">color</span>=<span class="value">"light-primary"</span>&gt;light primary&lt;/button&gt;
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;button <span class="attribute">fxFlex</span>=<span class="value">"100"</span> <span class="attribute">mat-raised-button</span> <span class="attribute">color</span>=<span class="value">"light-secondary"</span>&gt;light secondary&lt;/button&gt;
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;&lt;button <span class="attribute">fxFlex</span>=<span class="value">"100"</span> <span class="attribute">mat-raised-button</span> <span class="attribute">color</span>=<span class="value">"light-success"</span>&gt;light success&lt;/button&gt;
  <br>
  &nbsp;&nbsp;&nbsp;&nbsp;<!-- Add similar lines for other buttons -->
  <br>
  &lt;/div&gt;
</code>`;

  lightButtonsCode = `<div fxLayout="row" fxLayoutGap="10" fxLayoutAlign="space-between center">
                      <button fxFlex="100" mat-raised-button color="light-primary">light primary</button>
                      <button fxFlex="100" mat-raised-button color="light-secondary">light secondary</button>
                      <button fxFlex="100" mat-raised-button color="light-success">light success</button>
                      <button fxFlex="100" mat-raised-button color="light-warn">light warn</button>
                      <button fxFlex="100" mat-raised-button color="light-danger">light danger</button>
                      <button fxFlex="100" mat-raised-button color="light-info">light info</button>
                      <button fxFlex="100" mat-raised-button color="light-dark">light dark</button>
                    </div>`;


  buttonsWithIconsCode = `<div fxLayout="row" fxLayoutGap="10" fxLayoutAlign="space-between center">
                          <button fxFlex="100" mat-raised-button color="primary"><mat-icon>delete</mat-icon>primary</button>
                          <button fxFlex="100" mat-raised-button color="secondary"><mat-icon>delete</mat-icon>secondary</button>
                          <button fxFlex="100" mat-raised-button color="success"><mat-icon>settings</mat-icon>success</button>
                          <button fxFlex="100" mat-raised-button color="warn"><mat-icon>thumb_up</mat-icon>warn</button>
                          <button fxFlex="100" mat-raised-button color="danger"><mat-icon>visibility</mat-icon>danger</button>
                          <button fxFlex="100" mat-raised-button color="info"><mat-icon>network_wifi</mat-icon>info</button>
                          <button fxFlex="100" mat-raised-button color="dark"><mat-icon>folder</mat-icon>dark</button>
                        </div>`;


  typographySizes = `<div fxLayout="column" fxFlex="100" class="pb-5">
                        <p class="mat-headline-1">.mat-headline-1</p>
                        <p class="mat-headline-2">.mat-headline-2</p>
                        <p class="mat-headline-3">.mat-headline-3</p>
                        <p class="mat-headline-4">.mat-headline-4</p>
                        <p class="mat-headline-5">.mat-headline-5</p>
                        <p class="mat-headline-6">.mat-headline-6</p>
                        <p class="mat-subtitle-1">.mat-subtitle-1</p>
                        <p class="mat-subtitle-2">.mat-subtitle-2</p>
                        <p class="mat-body-1">.mat-body-1</p>
                        <p class="mat-body-2">.mat-body-2</p>
                        <p class="mat-caption-2">.mat-caption</p>
                        <p class="mat-button-2">.mat-button</p>
                    </div>`;

  typographyColors = `<div fxLayout="column" fxFlex="100" class="pb-5">
                        <p class="mat-headline-5 mat-text-primary">.mat-text-primary</p>
                        <p class="mat-headline-5 mat-text-success">.mat-text-success</p>
                        <p class="mat-headline-5 mat-text-dark">.mat-text-dark</p>
                        <p class="mat-headline-5 mat-text-warn">.mat-text-warn</p>
                        <p class="mat-headline-5 mat-text-info">.mat-text-info</p>
                        <p class="mat-headline-5 mat-text-danger">.mat-text-danger</p>
                        <p class="mat-headline-5 mat-text-secondary">.mat-text-secondary</p>
                    </div>`;

}
