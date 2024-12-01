import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';

const firebaseConfig = {
  apiKey: "AIzaSyBc1p5nYIzIyvfqnADvWMME5ztfr_Qh5RM",
  authDomain: "angular-firebase0aut.firebaseapp.com",
  projectId: "angular-firebase0aut",
  storageBucket: "angular-firebase0aut.firebasestorage.app",
  messagingSenderId: "670929806907",
  appId: "1:670929806907:web:121446e1cef7a9a46a9e1e"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
