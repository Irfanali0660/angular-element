import { createApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { InputComponentComponent } from './app/components/input-component/input-component.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

(async () => {
    const app=await createApplication({
      providers:[]
    })
    const inputElemnt=createCustomElement(InputComponentComponent,{
      injector:app.injector
    })
    customElements.define('custom-input',inputElemnt)
})()