import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { providePrimeNG } from 'primeng/config';
// import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from "ngx-spinner";
import {provideClientHydration,withEventReplay} from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { httpLoaderInterceptor } from './core/interceptors/http-loader.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes , withComponentInputBinding()),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(
      withInterceptors([
        httpLoaderInterceptor
      ])
    ),
    importProvidersFrom(
      BrowserAnimationsModule,
    ),
    importProvidersFrom(
      NgxSpinnerModule.forRoot({
        type: 'square-jelly-box'
      })
    ),
    // providePrimeNG({
    //   theme: {
    //     preset: Aura
    //   }
    // })
  ],
};
