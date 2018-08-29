import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';


@Injectable()
export class CityDatasService {
  constructor(private http: HttpClient) {
  }

  test(): Observable<any> {
    return new Observable<any>((observer) => {
      this.http.get('https://www.data.gouv.fr/api/1/organizations/?page_size=1').subscribe(elements => {
        observer.next(elements);
      });
    });
  }

  getTaxes(dep: number, city: string): Observable<any> {
    return new Observable<any>((observer) => {
      // TODO : gerer les annees (10 ans)
      this.http.get('https://www.impots.gouv.fr/portail/files/media/stats/rei_16_' + dep + '.xls').subscribe(elements => {
        observer.next(elements);
      });
    });
  }

  private handleErrors(error: any): Observable<any> {
    console.error('An error occurred', error);
    return Observable.throw(error.message || error);
  }
}
