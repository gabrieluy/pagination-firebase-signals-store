import { connectFirestoreEmulator, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { EnvironmentProviders, ApplicationConfig } from '@angular/core';
import { withInMemoryScrolling, provideRouter } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })
    ),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmulators) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      return firestore;
    }),    
    provideFirebaseApp(() => initializeApp(environment.firebase))
  ],
};
