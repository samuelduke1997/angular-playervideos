import { PaginaInicialService } from '../pagina-inicial.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Videos } from '../videos';

@Injectable({
  providedIn: 'root',
})
export class ListaVideosResolver implements Resolve<boolean> {
  constructor(private paginaInicialService: PaginaInicialService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.paginaInicialService.listaVideos();
  }
}
