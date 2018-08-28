import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';

function _window(): any {
  // return the global native browser window object
  return window;
}


@Injectable()
export class AppLoadService {

  constructor(private configService: ConfigService) {
  }

  load(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.configService.getConfig()
        .subscribe((config) => {
          //localStorage.setItem('parse_app_id', config.parse_app_id);
          console.log(config);

          if (_window().mapIsReady === false) {
            document.addEventListener('initMap', (e) => {
              resolve();
            }, false);
          } else {
            resolve();
          }

        }, () => {
          reject('Error during config request');
        });
    });
  }

}
