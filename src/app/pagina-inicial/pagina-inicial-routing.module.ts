import { ListaVideosResolver } from './lista-videos/lista-videos.resolver';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaVideosComponent } from './lista-videos/lista-videos.component';

const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent,
    resolve: {
      videos: ListaVideosResolver,
    },

    children: [
      {
        path: '',
        component: ListaVideosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaInicialRoutingModule {}
