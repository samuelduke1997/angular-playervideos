import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Videos, Video } from './videos';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class PaginaInicialService {
  constructor() {}
  videos: Videos = [
    { id: 'qQK7XTdzUk0/hq720', title: 'Product 002' },
    { id: 'qQK7XTdzUk0/hq720', title: 'Product 003' },
    { id: 'qQK7XTdzUk0/hq720', title: 'Product 004' },
    { id: 'qQK7XTdzUk0/hq720', title: 'Product 005' },
    { id: 'qQK7XTdzUk0/hq720', title: 'Product 006' },
  ];

  listaVideos(): Observable<Videos> {
    return of(this.videos);
  }
}
