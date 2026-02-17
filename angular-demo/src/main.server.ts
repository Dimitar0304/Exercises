import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { App } from './app/app';
import { appConfig } from './app/app.config';

export default function bootstrap(context: BootstrapContext) {
  return bootstrapApplication(App, {
    ...appConfig,
    providers: [
      ...(appConfig.providers ?? []),
      provideServerRendering()
    ]
  }, context);
}
