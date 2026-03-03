import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { App } from './app/app';
import { appConfig } from './app/app.config';

export default function bootstrap(context: unknown) {
  return bootstrapApplication(
    App,
    {
      ...appConfig,
      providers: [
        ...(appConfig.providers ?? []),
        provideServerRendering()
      ]
    },
    context as any // ✅ THIS is what was missing
  );
}
