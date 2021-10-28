import { CartaoModule } from './../componentes/cartao/cartao.module';
import { MenuModule } from './../componentes/menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicialRoutingModule } from './pagina-inicial-routing.module';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { ListaVideosComponent } from './lista-videos/lista-videos.component';
import { GradeCardVideosComponent } from './grade-card-videos/grade-card-videos.component';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [
    PaginaInicialComponent,
    ListaVideosComponent,
    GradeCardVideosComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,
    PaginaInicialRoutingModule,
    CabecalhoModule,
    MenuModule,
    CartaoModule,
  ],
})
export class PaginaInicialModule {}
