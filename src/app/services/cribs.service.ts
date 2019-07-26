import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Crib} from '../crib';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CribsService {

  public newCribSubject = new Subject<Crib>();
  file = '../assets/data/cribs.json';

  constructor(private http: HttpClient) {
  }

  getAllCribs() {
    return this.http.get<Crib[]>(this.file);
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }
}
