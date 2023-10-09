import { Component } from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ui';
  version: VersionEvent | undefined;
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.versionUpdates.subscribe((event) => {
        this.version = event;
      });

      this.swUpdate
        .checkForUpdate()
        .then((update: boolean) => {
          console.log('Checked for updates, new SW?: ', update);
          console.log(this.version);
          if (update) {
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error('Could not check for app updates', error);
        });
    }
  }
}
