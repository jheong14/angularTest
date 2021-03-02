import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/* bootstrapModule() 서버 실행 시 가장 먼저 실행되는 모듈 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
