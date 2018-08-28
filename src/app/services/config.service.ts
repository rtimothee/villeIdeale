import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';


@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) {
  }

  getConfig(): Observable<any> {
    return this.http.get('/assets/app.config.json').pipe(
      catchError(this.handleErrors)
    );
  }

  private handleErrors(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}
